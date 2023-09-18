-- Desde el departamento de fidelización de clientes de Musimundos vamos a sacar al 
-- mercado una campaña la cual implica que nuestros clientes van a tener un título 
-- que les otorgará beneficios a la hora de realizar compras. Para esto necesitamos 
-- crear una nueva tabla en nuestra base de datos. El nombre de la tabla será tipo_cliente 
-- y dentro tendrá dos columnas, la primera llamada id_tipo_cliente, siendo un int(6) 
-- primary key not null. Y el segundo campo llamado titulo, siendo varchar(20) y not null.

-- Ingresá la consulta que creaste.

-- Recordá escribir las sentencias SQL en mayúscula

CREATE TABLE TIPO_CLIENTE (
    ID_TIPO_CLIENTE INT(6) NOT NULL PRIMARY KEY,
    TITULO VARCHAR(20) NOT NULL
);



-- Al crear la tabla tipo_cliente, el equipo de fidelización no tuvo en cuenta que 
-- cada tipo de cliente debe tener una cantidad de descuento asignada. De casualidad, 
-- justo caminás por el equipo de fidelización y te preguntan si sabés algo de MySQL. 
-- Te solicitan una query que altere la tabla tipo_cliente agregando 
-- la columna porcentaje_descuento y que sea TINYINT UNSIGNED.

-- Recordá escribir las sentencias SQL en mayúscula.

ALTER TABLE TIPO_CLIENTE
ADD COLUMN PORCENTAJE_DESCUENTO TINYINT UNSIGNED;


-- DAB 2020 - SQL II - Insert, Update, Delete #1 - Nuevos géneros de música
-- Intentos: ilimitados
-- 1
-- Desde el sector comercial de Musimundos nos informan que van a añadir un nuevo género 
-- de música a nuestra plataforma. Necesitan que les ayudemos a cargarlo en nuestra 
-- base de datos. Insertemos en la tabla generos el id 26 y el nombre Cumbia.
-- Insertá tu query en mayúsculas.

INSERT INTO GENEROS (ID, NOMBRE)
VALUES (26, 'CUMBIA');

-- Viene el manager de Musimundos y, para organizar su inventario de discos, te pide un 
-- informe con todos los álbumes que posee la empresa. Realizá una consulta que devuelva 
-- todos los álbumes. Ingresá de la columna titulo el nombre del álbum que aparece quinto.

-- Ejercicio sin sentido
SELECT *
FROM ALBUMES;
'Big ones'

-- Para realizar un control de ventas, Musimundos te pide el primer 
-- nombre y teléfono de todos sus clientes.
-- Insertá el número de teléfono del segundo cliente que obtuviste.

SELECT * FROM musimundos.clientes;

+49 0711 2842222

-- Seleccionemos los nombres de todos los clientes, 
-- una vez obtenidos, necesitamos que obtengas solo 
-- aquellos que sean de USA.

SELECT *
FROM CLIENTES
WHERE PAIS = 'USA';

-- Insertá el nombre del tercer cliente que obtuviste.


+1 (212) 221-3546




