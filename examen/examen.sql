-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 23-03-2018 a las 22:32:34
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.5.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrada`
--

CREATE TABLE `entrada` (
  `valor` varchar(50) NOT NULL,
  `hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `entrada`
--

INSERT INTO `entrada` (`valor`, `hora`, `tipo`) VALUES
('1', '2018-03-23 19:58:18', 'SYSTEM FAILURE'),
('2', '2018-03-23 19:58:32', 'SYSTEM FAILURE'),
('2', '2018-03-23 19:59:13', 'SYSTEM FAILURE'),
('344', '2018-03-23 21:03:38', 'SYSTEM FAILURE'),
('4 8 15 16 21 42', '2018-03-23 19:58:49', 'SUCCESS'),
('4 8 15 16 21 42', '2018-03-23 19:59:11', 'SUCCESS'),
('4 8 15 16 21 42', '2018-03-23 21:30:06', 'SUCCESS'),
('4 8 15 16 21 42', '2018-03-23 21:30:08', 'SUCCESS'),
('4 8 15 16 21 42', '2018-03-23 21:30:10', 'SUCCESS'),
('43', '2018-03-23 21:11:14', 'SYSTEM FAILURE'),
('66 8 6 4 7', '2018-03-23 19:59:19', 'SYSTEM FAILURE'),
('9 8 6 4 ', '2018-03-23 19:59:24', 'SYSTEM FAILURE');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `entrada`
--
ALTER TABLE `entrada`
  ADD PRIMARY KEY (`valor`,`hora`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
