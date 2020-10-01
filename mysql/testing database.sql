create database testing;
use testing;
create table exschools (
	 exschool_id int primary key auto_increment,
    name varchar(40)
);

create table students (
    student_id int primary key auto_increment,
    name varchar (40),
    email varchar (40),
    birth_date date,
    exschool_id int,
    foreign key (exschool_id) references exschools (exschool_id)
);

ALTER TABLE students ADD FOREIGN KEY (exschool_id) REFERENCES exschools(exschool_id);

select * from exschools;

select * from students;

select * from students inner join exschools on students.exschool_id = exschools.exschool_id;

select
students.student_id as id,
students.name as name,
students.email as email,
exschools.name as exschool_name 
from students join exschools 
on students.exschool_id = exschools.exschool_id;


insert into exschools (name) values ('yucuber');

insert into students (name, email, birth_date, exschool_id) values
('bambang', 'bamb@ng.com', '1945-08-17', '1'),
('sayuti', 'skrt@skrt.com', '1945-08-17', '2');

insert into students (name, email, birth_date, exschool_id) values
('apoy', 'mail.com', '1945-08-17', '1');


drop table students;


