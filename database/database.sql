CREATE DATABASE kcd_demo;

USE kcd_demo;

DROP TABLE IF EXISTS  Comentarios;

CREATE TABLE Comentarios (
  id            INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre        VARCHAR(40)     NULL,
  comentario   VARCHAR(200)    NULL
);
