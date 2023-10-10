SELECT primer_nombre FROM clientes WHERE pais = 'USA';
-- Michelle

SELECT nombre FROM canciones WHERE milisegundos > 200000 AND milisegundos < 300000;

-- Inject The Venom

SELECT primer_nombre FROM clientes WHERE pais IN ('Spain', 'Argentina');

-- Enrique

SELECT * FROM generos ORDER BY nombre ASC;

-- Blues

SELECT primer_nombre FROM clientes ORDER BY pais DESC, ciudad ASC;

-- Frank

SELECT nombre FROM canciones WHERE compositor LIKE 'A%';

-- Lets Get It Up

SELECT nombre 
FROM generos 
WHERE nombre LIKE '%ro%';

-- Electronica/Dance

SELECT * 
FROM canciones 
WHERE id BETWEEN 10 AND 20;

-- COD

SELECT id_album FROM canciones
ORDER BY milisegundos DESC
LIMIT 3;

-- 227,229,253


SELECT compositor FROM canciones
ORDER BY nombre ASC
LIMIT 5 OFFSET 5;

-- J.C. Fogerty

SELECT nombre AS nombres_de_medios 
FROM tipos_de_medio;

-- MPEG audio file

SELECT DISTINCT CONCAT('La canción \'', nombre, '\' fue compuesta por ', compositor) AS texto 
FROM canciones;

-- La canción For Those About To Rock (We Salute You) fue compuesta por Angus Young, Malcolm Young, Brian Johnson

SELECT MONTH(fecha_factura) AS mes_factura 
FROM facturas 
WHERE id_cliente = 2 
ORDER BY fecha_factura DESC 
LIMIT 1;

-- 12

