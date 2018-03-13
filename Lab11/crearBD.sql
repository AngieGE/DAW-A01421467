-- :::::: EJERCICIO 1 :::::: --

-- Materiales --
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')
DROP TABLE Materiales

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

BULK INSERT a1421467.a1421467.[Materiales]
  FROM 'e:\wwwroot\a1421467\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

-- Proveedores --
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
DROP TABLE Proveedores

  CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

BULK INSERT a1421467.a1421467.[Proveedores]
  FROM 'e:\wwwroot\a1421467\proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

-- Proyectos --
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
DROP TABLE Proyectos

  CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

BULK INSERT a1421467.a1421467.[Proyectos]
  FROM 'e:\wwwroot\a1421467\proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

-- Entregan --
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')
DROP TABLE Entregan

  CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)

SET DATEFORMAT dmy
BULK INSERT a1421467.a1421467.[Entregan]
  FROM 'e:\wwwroot\a1421467\entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )


-- :::::: EJERCICIO 2 :::::: --
INSERT INTO Materiales values(1000, 'xxx', 1000)

Delete from Materiales
where Clave = 1000 and Costo = 1000


ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
INSERT INTO Materiales values(1000, 'xxx', 1000)

sp_helpconstraint materiales

ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
sp_helpconstraint proveedores
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)
sp_helpconstraint proyectos
ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave, RFC, Fecha)
sp_helpconstraint entregan

-- :::::: EJERCICIO 3 :::::: --

SELECT *
FROM Materiales

SELECT *
FROM Proveedores

SELECT *
FROM Proyectos

INSERT INTO Entregan
values (0, 'xxx', 0, '1-jan-02', 0) ;

SELECT *
FROM Entregan
WHERE Clave LIKE 0 AND RFC LIKE 'xxx'

DELETE FROM Entregan
WHERE Clave = 0

SELECT *      --Para verificar que se haya borrado
FROM Entregan

ALTER TABLE Entregan add constraint cfentreganclave
foreign key (clave) references Materiales(clave);
sp_helpconstraint materiales --Para verificar

INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) ;

ALTER TABLE Entregan add constraint cfentreganrfc
foreign key (RFC) references Proveedores(RFC);

  sp_helpconstraint Entregan

-- :::::: EJERCICIO 4 :::::: --

 INSERT INTO Entregan
 values (1000, 'AAAA800101', 5000, GETDATE(), 0);

SELECT *
FROM Entregan
WHERE Clave =1000

DELETE FROM Entregan
WHERE Cantidad = 0;

ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;

 INSERT INTO Entregan
 values (1000, 'AAAA800101', 5000, GETDATE(), -2);