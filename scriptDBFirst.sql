--CREATE DATABASE IF NOT EXISTS CursoCastDB;

CREATE DATABASE CursoCastDB;
GO
USE CursoCastDB;

CREATE TABLE Curso (
	CursoId INT IDENTITY PRIMARY KEY,
	Nome VARCHAR(50) NOT NULL,
	DataInicio DATETIME NOT NULL,
	DataFinal DATETIME NOT NULL,
	Assunto VARCHAR(200) NOT NULL,
	CatId INT NOT NULL,
	QtdAlunosTurma INT NULL
);

GO

-- Curso (N) -> (1) Categoria (ou seja, de muitos para um)
ALTER TABLE Curso ADD CONSTRAINT FK_Categoria_CatId FOREIGN KEY (CatId) REFERENCES Categoria (CatId)

CREATE TABLE Log (
	LogId INT Identity Primary key,
	DataInclusao Date,
	Acao string NOT NULL
);

GO

CREATE TABLE Usuario (
	UsuarioId INT Identity Primary key,
	Nome string NOT NULL
);

CREATE TABLE Categoria (
	CatId INT IDENTITY PRIMARY KEY,
	Nome VARCHAR (15) NOT NULL
);

GO

-- Inseri as categorias na tabela Categoria do banco de dados
INSERT INTO Categoria (Nome) VALUES ('Multiplataforma'),
('Banco de dados'), ('Metodologia'), ('Comportamento'), ('Comunicação');

