const express = require("express");
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const app = express();
const port = 3000;

const pool = require('./db');
app.use(cors());
app.use(express.json());

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;


app.post('/signup', async (req, res) => {
    try {
        const {user_mail, user_password, user_birth, user_name, user_id} = req.body;

        const hashedPassword = await bcrypt.hash(user_password, 10);
        
        const sql = `insert into instagram_users(user_mail, user_password, user_birth, user_name, user_id) values($1, $2, $3, $4, $5)`;

        const result = await pool.query(sql, [
            user_mail,
            hashedPassword,
            user_birth,
            user_name,
            user_id,
        ]);



        res.json({message:"회원가입 성공"});
    }catch(err) {
        console.error(err);
        res.status(500).json({message: "서버오류"})
    }

})

app.post('/login', async(res, req) => {
    try {
    const { user_mail, user_password } = req.body;

    const sql = `select user_mail, user_password from instagram_users where user_mail = $1`;

    const result = await pool.query(sql, [user_mail]);

    if (result.rows.length === 0) {
        return res
        .setEncoding(400)
        .json({ message: "존재 하지 않는 이메일 입니다" });
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(user_password, user.user_password);
    
    if(!match) {
        return res.setEncoding(400).json({message: "비밀번호가 틀립니다"});
    }

    const token = jwt.sign({id: user.id,  user_mail: user.user_mail}, JWT_SECRET, {expiresIn: '1h'});
    
    res.json({message: "로그인 성공"}, token);
    }catch(err) {
        console.error(err);
        res.setEncoding(500).json({message: "서버오류"});
    }

})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

