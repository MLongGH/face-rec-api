BEGIN TRANSACTION;

INSERT into users(name,email,entries,joined,age,pet) values('tim','tim@gmail.com','5','2020-01-01','26','dog');
INSERT into login(hash,email) values('$2a$10$awNuZNJBKq7woqMW5sh2de4vUR4CLqeC0gDwI1e0jyMIRjlZZxdAq', 'tim@gmail.com');

COMMIT;

