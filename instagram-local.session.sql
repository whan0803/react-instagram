create table instagram_users(
id INTEGER primary key,
user_mail varchar(100) not null,
user_password varchar(100) not null,
user_birth date not null,
user_name varchar(30),
user_id varchar(100)
)

create SEQUENCE instagram_users_seq
start with 1
INCREMENT by 1

SELECT instagram_users_seq.NEXTVAL FROM dual;

SELECT nextval('instagram_users_seq');