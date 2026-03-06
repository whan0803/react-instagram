create table instagram_users(
id serial primary key,
user_mail varchar(100) not null,
user_password varchar(100) not null,
user_birth date not null,
user_name varchar(30),
user_id varchar(100)
)

drop table instagram_users

select * from instagram_users;