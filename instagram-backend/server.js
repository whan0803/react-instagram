const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

const pool = require('./db');
app.use(cors());
app.use(express.json());


app.post('/signup', async (req, res) => {
    try {
        const {user_mail, user_password, user_birth, user_name, user_id} = req.body;
        
        const sql = `insert into instagram_users values(instagram_users_seq.NEXTVAL, :1, :2, :3, :4, :5)`;

        await pool.execute(sql, [
            user_mail,
            user_password,
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

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

