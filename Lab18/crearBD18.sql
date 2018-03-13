--------------------  PARTE 1  ----------------

ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;
SELECT *
FROM Materiales

-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
set dateformat dmy
SELECT SUM(e.Cantidad) as 'Cantidad', (e.Cantidad*(m.Costo + m.PorcentajeImpuesto)) as 'Importe Total'
FROM Entregan e, Materiales m
WHERE e.clave=m.Clave
AND e.fecha BETWEEN '01/01/1997' AND '31/12/1997'
GROUP BY (e.Cantidad*(m.Costo + m.PorcentajeImpuesto))

SELECT *
FROM Entregan
WHERE fecha BETWEEN '01/01/1997' AND '31/12/1997'


-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total
-- de las entregas realizadas.
SELECT p.RazonSocial, COUNT(e.Cantidad) as 'No. Entregas', SUM(e.Cantidad*(m.Costo + m.PorcentajeImpuesto)) as 'Importe Total'
FROM Entregan e, Proveedores p, Materiales m
WHERE  e.clave=m.Clave AND e.RFC = p.RFC
GROUP BY p.RazonSocial --  (e.Cantidad*(m.Costo + m.PorcentajeImpuesto))
ORDER BY SUM(e.Cantidad*(m.Costo + m.PorcentajeImpuesto)), COUNT(e.Cantidad)


-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada,
-- la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio
-- entregada sea mayor a 400.
SELECT m.Clave, m.Descripcion, SUM(e.Cantidad) as 'Cantidad entregada', MIN(e.Cantidad) as 'Menor cantidad',
       MAX(e.Cantidad) as 'Mayor cantidad de 400', SUM(e.Cantidad*(m.Costo + m.PorcentajeImpuesto)) as 'Importe Total'
FROM Materiales m, Entregan e
WHERE e.clave=m.Clave
GROUP BY m.Descripcion, m.Clave
HAVING  AVG(e.Cantidad) > 400
ORDER BY m.Clave, SUM(e.Cantidad*(m.Costo + m.PorcentajeImpuesto))

-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando
-- la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT p.RazonSocial, e.Clave, m.Descripcion, AVG(e.Cantidad) as 'Promedio por entrega'
FROM Proveedores p, Entregan e, Materiales m
WHERE  e.clave=m.Clave AND e.RFC = p.RFC
GROUP BY p.RazonSocial, e.Clave, m.Descripcion
HAVING AVG(e.Cantidad) >500
ORDER BY p.RazonSocial, e.Clave


-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos
-- para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada
-- sea mayor a 450.
SELECT p.RazonSocial, e.Clave, m.Descripcion, AVG(e.Cantidad) as 'Promedio por entrega'
FROM Proveedores p, Entregan e, Materiales m
WHERE  e.clave=m.Clave AND e.RFC = p.RFC
GROUP BY p.RazonSocial, e.Clave, m.Descripcion
HAVING (AVG(e.Cantidad) < 370) OR (AVG(e.Cantidad) > 450)
ORDER BY p.RazonSocial, e.Clave

--------------------  PARTE 2  ----------------
-- inserta cinco nuevos materiales.
INSERT INTO Materiales VALUES (999, 'Corcho', 300.00, 1.998);
INSERT INTO Materiales VALUES (1440, 'Ladrillos rosas', 100.00,2.88 );
INSERT INTO Materiales VALUES (1450, 'Aceite', 230.00, 2.9);
INSERT INTO Materiales VALUES (1460, 'Madera triplay', 90.00, 2.92);
INSERT INTO Materiales VALUES (1470, 'Superpegamento', 450.00, 2.94);

SELECT *
FROM Materiales

--------------------  PARTE 2  ----------------
-- Clave y descripción de los materiales que nunca han sido entregados.
SELECT m.Clave, m.Descripcion
FROM Materiales m, Entregan e
WHERE m.Clave NOT IN (
  SELECT e.Clave
  FROM Entregan e
)
GROUP BY m.Clave, m.Descripcion

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
SELECT *
FROM
    (SELECT p.RazonSocial
    FROM Proyectos pro, Proveedores p, Entregan e
    WHERE e.RFC=p.RFC AND e.Numero=pro.Numero
    AND Denominacion IN (SELECT  Denominacion
       FROM Proyectos pro
       WHERE Denominacion LIKE 'Queretaro Limpio') )

 HAVING razonSocial IN  (

  SELECT p.RazonSocial
  FROM Proyectos pro, Proveedores p, Entregan e
  WHERE e.RFC = p.RFC AND e.Numero = pro.Numero
        AND Denominacion IN (SELECT Denominacion
                             FROM Proyectos pro
                             WHERE Denominacion NOT LIKE 'Vamos Mexico')
)

-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
SELECT m.Descripcion
FROM Materiales m, Entregan e, Proyectos p
WHERE m.Clave =  e.Clave AND p.Numero = e.Numero
AND Denominacion <> 'CIT Yucatan'
GROUP BY m.Descripcion


-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada
-- es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
SELECT p.RazonSocial, AVG(e.Cantidad) as 'Promedio de cantidad entregada'
FROM Proveedores p, Entregan e, Materiales m
WHERE e.clave = m.Clave AND e.RFC = p.RFC
GROUP BY p.RazonSocial
HAVING  AVG(e.Cantidad) > (SELECT AVG(e.Cantidad)
                           FROM Entregan e
                            WHERE e.RFC = 'AAAA800101')

-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y
-- cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
set DATEFORMAT dmy
SELECT prov.RFC, prov.RazonSocial
FROM Proveedores prov, Proyectos proy, Entregan e
WHERE e.RFC=prov.RFC AND e.Numero=proy.Numero
AND Denominacion LIKE 'Infonavit Durango'
GROUP BY prov.RFC, prov.RazonSocial
HAVING
  (SELECT SUM(e.Cantidad)
   FROM Entregan e, Proyectos proy
   WHERE e.Numero=proy.Numero
   AND proy.Denominacion LIKE 'Infonavit Durango'
   AND e.Fecha BETWEEN '01/01/2000' AND '31/12/2000')
  >
  (SELECT SUM(e.Cantidad)
   FROM Entregan e, Proyectos proy
   WHERE e.Numero=proy.Numero
   AND proy.Denominacion LIKE 'Infonavit Durango'
   AND e.Fecha BETWEEN '01/01/2001' AND '31/12/2001')

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México'
-- como al proyecto 'Querétaro Limpio'.
SELECT prov.RazonSocial
FROM Entregan e, Proveedores prov, Proyectos proy
WHERE e.RFC=prov.RFC AND e.Numero=proy.Numero
AND  proy.Denominacion IN (
  SELECT proy.Denominacion
  FROM Entregan e, Proyectos proy
  WHERE e.Numero=proy.Numero
  AND proy.Denominacion = 'Vamos Mexico'
)

AND proy.Denominacion IN (
  SELECT proy.Denominacion
  FROM Entregan e, Proyectos proy
  WHERE e.Numero=proy.Numero
  AND proy.Denominacion = 'Queretaro Limpio'
)

--Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
--Proveedores(RFC, RazonSocial)
--Proyectos(Numero, Denominacion)
--Entregan(Clave, RFC, Numero, Fecha, Cantidad)

