# spring-boot-crud-app
Simple Java SpringBoot Notes CRUD Application

The application allows you to create, edit and delete notes as well as displaying a list of all entered notes. All notes are timestamped with the creation or last editing date. 

This application is a modification of the web app found at:
https://www.codejava.net/frameworks/spring-boot/spring-boot-crud-example-with-spring-mvc-spring-data-jpa-thymeleaf-hibernate-mysql

The app was built using the IntelliJ community edition IDE and uses the following technologies:

Spring Boot, Spring MVC, Spring Data JPA, Hibernate, MySQL, Bootstrap, JavaScript, CSS

In order to run the project you need to setup a MYSQL database with a "note" table located in a "notes" database:

1. CREATE DATABASE notes;

2. USE notes;

3. CREATE TABLE `note` ( <br/>
  `id` int(11) NOT NULL AUTO_INCREMENT, <br/>
  `name` varchar(45) NOT NULL, <br/>
  `text` varchar(45) NOT NULL, <br/>
  `date` varchar(20) NOT NULL, <br/>
   PRIMARY KEY (`id`) <br/>
) ENGINE=InnoDB DEFAULT CHARSET=utf8; <br/>

After the database is created you can clone this repository into a local directory. After installing Maven and Java JDK (v8 or v11) you can go to the root directory of your project and enter: 

mvn spring-boot:run 

Once running, the application can be found at: http://localhost:8080 







