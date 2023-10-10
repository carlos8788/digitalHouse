-- JOINS

/*
Es la semana del rock a nivel mundial y nuestro gerente de Musimundos
 nos pide crear banners con canciones del género Rock. Debemos hacer
  una consulta a nuestra base de datos que nos devuelva los nombres de las canciones que tengan género rock.

Seleccioná la cuarta canción que te devuelva la consulta.
*/

SELECT canciones.nombre
FROM canciones
JOIN generos ON canciones.id_genero = generos.id
WHERE generos.nombre = 'Rock';

-- Restless and Wild

/*
En el salón Musimundos tenemos un cliente fanático de Deep Purple, 
este quiere comprar todos los álbumes que tengan como "artista" a Deep Purple. 
Debemos hacer una consulta a nuestra base de datos que nos traiga el título del 
álbum y el autor para saber si, lo que le estamos vendiendo, es correcto.

Ingresá el título del álbum en la posición número 10.
*/

SELECT albumes.titulo AS 'Título del Álbum', artistas.nombre AS 'Artista'
FROM albumes
JOIN artistas ON albumes.id_artista = artistas.id
WHERE artistas.nombre = 'Deep Purple';

-- Stormbringer

/*
En el departamento de desarrollo de Musimundos están creando la nueva aplicación móvil, 
en la cual vamos a poder escuchar música online de nuestros artistas favoritos. 
Para evitar posibles problemas de compatibilidad, los desarrolladores decidieron 
que solo van a subir canciones que tengan el tipo de medio "MPEG audio file". 
Debemos ayudar al equipo y obtener una lista en las cuales tengamos el nombre 
de las canciones que tengan ese tipo de medio.

Seleccioná el nombre de la cuarta canción que obtuviste de la consulta.
*/

SELECT canciones.nombre AS 'Nombre de la Canción'
FROM canciones
JOIN tipos_de_medio ON canciones.id_tipo_de_medio = tipos_de_medio.id
WHERE tipos_de_medio.nombre = 'MPEG audio file';

-- Inject The Venom


-- Distincts --
/*
Desde el sector de recursos humanos de Musimundos nos están solicitando 
una lista de todos los cargos que tienen los empleados. Realizá una consulta 
a nuestra base de datos que nos brinde el título de los cargos 
que tengan todos los empleados sin repetirse medio.

Ingresá el título que figura en la posición 4.
*/

SELECT * FROM musimundos.empleados;
SELECT DISTINCT titulo AS 'Título del Cargo'
FROM empleados;

-- IT Manager



-- Group by --

/*
¿Para qué nos sirve Group by?
*/

-- Para agrupar registros similares.

/*
Genera una consulta a la base Musimundos que cuente todas las 
canciones por genero y las agrupe por id_genero. Seleccioná el total del quinto registro.
*/

SELECT id_genero, COUNT(*) AS 'Total de Canciones'
FROM canciones
GROUP BY id_genero
ORDER BY id_genero;

-- 12


-- Funciones de agregación --


/*
El área de estrategia de Musimundos está analizando cómo implementar una acción de 
marketing en la cual tiene que destinar un presupuesto acorde a la cantidad de 
clientes que tenga cada país. Por esto nos pide que los ayudemos a identificar 
la cantidad de clientes que son de Brazil.

Generá una consulta en la base de datos que traiga la cuenta de todos los clientes que son de Brazil.
*/

SELECT COUNT(*) AS cantidad_clientes_brazil 
FROM clientes 
WHERE pais = 'Brazil';

-- 5

/*
Es época de balances y en Musimundos quieren saber cuánto es el dinero que la gente lleva gastado en la empresa.

Hacé una consulta a la base de datos que sume el total de todas las facturas que emitió la empresa.
*/

SELECT SUM(total) AS total_facturado 
FROM facturas;

-- 2328.60


/*
En el equipo de desarrollo están mudando de servidor a nuestra aplicación y 
quieren saber cuál es el peso de cada archivo de canciones para buscar un 
servidor adecuado con capacidad suficiente.

Hacé una consulta a la base de datos para saber cuál es el archivo con menor peso en bytes.
*/

SELECT MIN(bytes) AS menor_peso 
FROM canciones;

-- 38747

-- Having --

/*
Se acerca el gerente de Marketing y nos comenta que buscan analizar las facturas
que Ingresos está generando por cada país, PERO le interesa los países 
que hayan generado un total superior a 100.
*/

SELECT clientes.pais, SUM(facturas.total) AS Ingresos_Totales
FROM facturas
JOIN clientes ON facturas.id_cliente = clientes.id
GROUP BY clientes.pais
HAVING Ingresos_Totales > 100;

-- 156.48

/*
Desde el departamento de Estrategia están evaluando en qué ciudad 
tienen más clientes para establecer unas nuevas oficinas.

Es por esto que nos piden un informe donde mostremos, por ciudad, cuántos clientes hay, 
pero solo contando las ciudades que tengan 2 o más 
clientes (sabemos que suena poco, pero en estos momentos para la empresa es un montón).
*/

SELECT ciudad, COUNT(*) AS cantidad_de_clientes
FROM clientes
GROUP BY ciudad
HAVING cantidad_de_clientes >= 2;

-- Prague

-- Ejercicio: Canciones por género

/*
En musimundos estamos muy atentos a que nuestros usuarios encuentren una 
cantidad apropiada de canciones del estilo que quieran escuchar, es por 
eso que en esta oportunidad nos están solicitando una lista de cuantas 
canciones tenemos por género. Hacé una consulta a la base de datos que 
traiga el nombre del género y la cantidad de canciones que posee.
*/

SELECT g.nombre AS Genero, COUNT(c.id) AS Cantidad_de_Canciones
FROM generos AS g
JOIN canciones AS c ON g.id = c.id_genero
GROUP BY g.nombre;

-- 81

-- Ejercicio: Duración de los albums

/*
En el sitio web de Musimundos queremos mejorar nuestras vistas de productos 
colocando al pie de cada álbum el promedio de duración de cada álbum. 
Tomemos como ejemplo a la banda AC/DC y consulta a la base de datos 
el álbum 'Let There Be Rock' , lista sus canciones , su duración y 
saca un promedio de duracion de las mismas.
*/
SELECT 
    al.titulo AS Album, 
    c.nombre AS Cancion, 
    c.milisegundos,
    (SELECT AVG(c2.milisegundos)
     FROM canciones AS c2 
     WHERE c2.id_album = al.id) AS Promedio_Duracion_en_segundos
FROM artistas AS ar
JOIN albumes AS al ON ar.id = al.id_artista
JOIN canciones AS c ON al.id = c.id_album
WHERE ar.nombre = 'AC/DC' AND al.titulo = 'Let There Be Rock';

-- 306657.3750



/*
En el salón de Musimundos, estamos ofreciendo una promoción para los 
clientes regulares donde regalamos un 20% de descuento en su compra si 
alguna vez el cliente hizo una compra con un total de más de 12. 
El cliente número 48 acaba de entrar por la puerta y el vendedor quiere corroborar si el descuento se aplica.

Hacé una consulta a la base de datos que nos traiga el total de la factura más cara que tenga el cliente número 48.

Insertá el número que obtuviste.


*/

SELECT 
    MAX(total) AS Factura_Mas_Cara
FROM facturas
WHERE id_cliente = 48;

-- 13.86