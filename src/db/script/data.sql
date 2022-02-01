-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wines_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `classifications`
--
USE wines_db
LOCK TABLES `classifications` WRITE;
/*!40000 ALTER TABLE `classifications` DISABLE KEYS */;
INSERT INTO `classifications` (id, name) VALUES (1,'Tinto'),(2,'Blanco'),(3,'Rosé'),(4,'Espumante')
ON DUPLICATE KEY UPDATE name = VALUES (name);
/*!40000 ALTER TABLE `classifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES 
  (1,"Alma Mora",                           "Este vino es un Alma Mora Tinto Malbec",                       "VINO1.JPG",    1,1,    "4382", "1","2021-02-15 00:20:48","2021-03-12 04:22:58"),
  (2,"Matias Riccitelli",                   "Este vino es un Matias Riccitelli Blanco Torrontés",           "VINO2.JPG",  	2,7,    "3608", "0","2021-04-03 21:12:32","2021-11-20 22:04:39"),
  (3,"Mendel",                              "Este vino es un Mendel Blanco Semillón",                       "VINO3.JPG",   	2,5,    "1264", "0","2021-09-06 09:13:00","2021-02-14 03:00:28"),
  (4,"Famiglia Bianchi",                    "Este vino es un Famiglia Bianchi Rosé Blend",                  "VINO4.JPG",   	3,13,   "510",  "0","2021-05-19 02:46:05","2021-02-23 10:37:07"),
  (5,"Vinarija Zvonko Bogdan",              "Este vino es un Vinarija Zvonko Bogdan Rosé Sec",              "VINO5.JPG",   	3,11,   "2989", "0","2021-09-05 22:29:26","2021-01-29 04:04:24"),
  (6,"Champagne Norton",                    "Este es un Champagne Norton Espumante Extra Brut",             "VINO6.JPG",   	4,10,   "3628", "0","2021-02-28 07:16:47","2021-08-23 13:40:32"),
  (7,"Blanco Cabal",                        "Este vino es un Blanco Cabal Espumante Torrontés",             "VINO7.JPG",   	4,7,    "5391", "1","2021-06-10 17:27:55","2021-03-21 14:29:28"),
  (8,"Estancia Mendoza 'Kadabra'",          "Este vino es un Estancia Mendoza 'Kadabra' Tinto Sauvignon",   "VINO8.JPG", 	  1,8,    "3147", "0","2022-02-02 23:37:01","2021-08-18 20:16:08"),
  (9,"Los Medanos",                         "Este vino es un Los Medanos Rosé Sauvignon",                   "VINO9.JPG",   	3,8,    "3063", "1","2022-01-16 17:05:00","2021-07-12 08:11:27"),
  (10,"El Relator",                         "Este vino es un El Relator Espumante Syrah",                   "VINO10.JPG",  	4,4,    "756",  "0","2021-08-28 15:28:00","2021-12-13 07:53:12"),
  (11,"Grand Sud 1L",                       "Este vino es un Grand Sud de 1L Rosé Merlot",                  "VINO11.JPG", 	3,3,    "6695", "0","2021-05-04 13:59:55","2021-11-20 06:36:45"),
  (12,"Gran Tinto Tacama",                  "Este vino es un Gran Tinto Tacama Malbec",                     "VINO12.JPG",  	1,1,    "4121", "0","2021-12-26 19:04:09","2021-11-19 05:29:33"),
  (13,"Reserva Aliwen Undurraga",           "Este vino es un Reserva Aliwen Undurraga Tinto Syrah",         "VINO13.JPG",  	1,4,    "4745", "1","2021-08-28 12:05:24","2021-05-30 03:36:23"),
  (14,"Cordero con Piel de Lobo",           "Este vino es un Cordero con Piel de Lobo Rosé Cabernet",       "VINO14.JPG",  	3,2,    "4241", "1","2021-04-27 02:20:47","2021-11-21 19:08:07"),
  (15,"Lagarde Organic",                    "Este vino es un Lagarde Organic Rosé Semillón",                "VINO15.JPG", 	3,5,    "4376", "1","2021-06-25 15:12:53","2021-03-21 17:05:18"),
  (16,"Champagne Finca Las Moras",          "Este es un Champagne Finca Las Moras Espumante Syrah",         "VINO16.JPG", 	4,4,    "3435", "1","2021-01-17 12:02:16","2021-04-18 11:45:07"),
  (17,"Champagne Valdivieso",               "Este es un Champagne Valdivieso Espumante Brut",               "VINO25.JPG",   4,9,    "4328", "1","2021-02-28 02:37:41","2021-09-11 00:11:24");
  (18,"Bohemia Sekt",                       "Este vino es un Bohemia Sekt Rosé Demi-Sec",                   "VINO18.JPG",  	3,12,   "776",  "1","2021-12-21 15:02:44","2021-12-13 20:31:33"),
  (19,"Andeluna SEMILLON",                  "Este vino es un Andeluna SEMILLON Blanco Semillón",            "VINO19.JPG",  	2,5,    "1249", "1","2021-06-19 02:47:04","2021-04-25 22:59:48"),
  (20,"Marco Zunino",                       "Este vino es un Marco Zunino Rosé Bonarda",                    "VINO20.JPG",  	3,6,    "4558", "0","2021-07-09 01:16:49","2021-09-04 10:52:37"),
  (21,"Elementos",                          "Este vino es un Elementos Rosé Torrontés",                     "VINO21.JPG", 	3,7,    "3405", "0","2021-02-02 19:21:31","2021-01-27 15:27:36"),
  (22,"Finca Las Moras BONARDA",            "Este vino es un Finca Las Moras BONARDA Tinto Bonarda",        "VINO22.JPG", 	1,6,    "5920", "1","2021-03-29 23:18:18","2021-02-28 23:18:51"),
  (23,"Champagne Vilarnau Barcelona ICE",   "Este es un Champagne Vilarnau Barcelona ICE Espumante Sec",    "VINO23.JPG",   4,11,   "5592", "0","2021-01-16 23:26:17","2021-11-18 23:16:02"),
  (24,"Pays d'Oc Charette",                 "Este vino es un Pays d'Oc Charette Rosé Syrah",                "VINO24.JPG",   3,4,    "2797", "1","2021-08-31 05:42:39","2021-03-19 23:26:22"),
/*  (25,"Andeluna ROSE",                      "Este vino es un Andeluna ROSE Rosé Malbec",                    "VINO25.JPG",  	3,1,    "6683", "1","2021-06-26 07:36:35","2021-11-18 18:08:11"),

UPDATE `products` SET `id` = 1, `name` = "Alma Mora", `description` = "Este vino es un Alma Mora Tinto Malbec", `image` = "VINO1.JPG", `classification_id` = 1, `variety_id` = 1, `price` = "6070", `featured` = "0", `created_at` = "2021-09-02 11:48:46", `updated_at` = "2021-06-04 07:33:15" WHERE `id` = 1;
UPDATE `products` SET `id` = 2, `name` = "Matias Riccitelli", `description` = "Este vino es un Matias Riccitelli Blanco Torrontés", `image` = "VINO2.JPG", `classification_id` = 2, `variety_id` = 7, `price` = "6070", `featured` = "0", `created_at` = "2021-09-02 11:48:46", `updated_at` = "2021-06-04 07:33:15" WHERE `id` = 1;
UPDATE `products` SET `id` = 3, `name` = "Mendel", `description` = "Este vino es un Mendel Blanco Semillón", `image` = "VINO3.JPG", `classification_id` = 2, `variety_id` = 5, `price` = "5852", `featured` = "0", `created_at` = "2021-05-11 02:03:40", `updated_at` = "2021-12-01 07:12:07" WHERE `id` = 2;
UPDATE `products` SET `id` = 4, `name` = "Famiglia Bianchi", `description` = "Este vino es un Famiglia Bianchi Rosé Blend", `image` = "VINO4.JPG", `classification_id` = 3, `variety_id` = 13, `price` = "5512", `featured` = "0", `created_at` = "2021-02-22 09:24:59", `updated_at` = "2021-09-15 07:39:39" WHERE `id` = 3;
UPDATE `products` SET `id` = 5, `name` = "Vinarija Zvonko Bogdan", `description` = "Este vino es un Vinarija Zvonko Bogdan Rosé Sec", `image` = "VINO5.JPG", `classification_id` = 3, `variety_id` = 11, `price` = "2817", `featured` = "0", `created_at` = "2021-09-14 12:43:11", `updated_at` = "2021-06-29 17:40:14" WHERE `id` = 4;
UPDATE `products` SET `id` = 6, `name` = "Champagne Norton", `description` = "Este es un Champagne Norton Espumante Extra Brut", `image` = "VINO6.JPG", `classification_id` = 4, `variety_id` = 10, `price` = "611", `featured` = "0", `created_at` = "2021-09-06 12:09:44", `updated_at` = "2021-05-13 20:16:33" WHERE `id` = 5;
UPDATE `products` SET `id` = 7, `name` = "Blanco Cabal", `description` = "Este vino es un Blanco Cabal Espumante Torrontés", `image` = "VINO7.JPG", `classification_id` = 4, `variety_id` = 7, `price` = "4284", `featured` = "0", `created_at` = "2021-08-15 05:23:54", `updated_at` = "2021-03-16 10:56:13" WHERE `id` = 6;
UPDATE `products` SET `id` = 8, `name` = "Estancia Mendoza 'Kadabra'", `description` = "Este vino es un Estancia Mendoza 'Kadabra' Tinto Sauvignon", `image` = "VINO8.JPG", `classification_id` = 1, `variety_id` = 8, `price` = "4435", `featured` = "1", `created_at` = "2021-04-11 17:58:08", `updated_at` = "2021-11-24 17:59:24" WHERE `id` = 7;
UPDATE `products` SET `id` = 9, `name` = "Los Medanos", `description` = "Este vino es un Los Medanos Rosé Sauvignon", `image` = "VINO9.JPG", `classification_id` = 3, `variety_id` = 8, `price` = "5464", `featured` = "0", `created_at` = "2021-01-20 12:12:46", `updated_at` = "2021-06-29 23:44:20" WHERE `id` = 8;
UPDATE `products` SET `id` = 10, `name` = "El Relator", `description` = "Este vino es un El Relator Espumante Syrah", `image` = "VINO10.JPG", `classification_id` = 4, `variety_id` = 4, `price` = "2422", `featured` = "1", `created_at` = "2021-02-02 02:55:53", `updated_at` = "2021-04-29 20:57:37" WHERE `id` = 9;
UPDATE `products` SET `id` = 11, `name` = "Grand Sud 1L", `description` = "Este vino es un Grand Sud de 1L Rosé Merlot", `image` = "VINO11.JPG", `classification_id` = 3, `variety_id` = 3, `price` = "6207", `featured` = "0", `created_at` = "2021-07-08 15:01:05", `updated_at` = "2021-03-27 05:24:03" WHERE `id` = 10;
UPDATE `products` SET `id` = 12, `name` = "Gran Tinto Tacama", `description` = "Este vino es un Gran Tinto Tacama Malbec", `image` = "VINO12.JPG", `classification_id` = 1, `variety_id` = 1, `price` = "2164", `featured` = "1", `created_at` = "2021-11-27 15:10:39", `updated_at` = "2021-02-03 16:14:44" WHERE `id` = 11;
UPDATE `products` SET `id` = 13, `name` = "Reserva Aliwen Undurraga", `description` = "Este vino es un Reserva Aliwen Undurraga Tinto Syrah", `image` = "VINO13.JPG", `classification_id` = 1, `variety_id` = 4, `price` = "6557", `featured` = "1", `created_at` = "2021-11-15 08:38:43", `updated_at` = "2021-07-21 09:43:30" WHERE `id` = 12;
UPDATE `products` SET `id` = 14, `name` = "Cordero con Piel de Lobo", `description` = "Este vino es un Cordero con Piel de Lobo Rosé Cabernet", `image` = "VINO14.JPG", `classification_id` = 3, `variety_id` = 2, `price` = "4450", `featured` = "0", `created_at` = "2021-03-27 18:51:05", `updated_at` = "2021-07-31 08:13:34" WHERE `id` = 13;
UPDATE `products` SET `id` = 15, `name` = "Lagarde Organic", `description` = "Este vino es un Lagarde Organic Rosé Semillón", `image` = "VINO15.JPG", `classification_id` = 3, `variety_id` = 5, `price` = "4246", `featured` = "1", `created_at` = "2021-06-14 07:13:44", `updated_at` = "2021-03-08 15:29:55" WHERE `id` = 14;
UPDATE `products` SET `id` = 16, `name` = "Champagne Finca Las Moras", `description` = "Este es un Champagne Finca Las Moras Espumante Syrah", `image` = "VINO16.JPG", `classification_id` = 4, `variety_id` = 4, `price` = "4271", `featured` = "1", `created_at` = "2022-01-02 05:37:37", `updated_at` = "2021-09-15 21:28:36" WHERE `id` = 15;
UPDATE `products` SET `id` = 17, `name` = "Andeluna ROSE", `description` = "Este vino es un Andeluna ROSE Rosé Malbec", `image` = "VINO17.JPG", `classification_id` = 3, `variety_id` = 1, `price` = "5864", `featured` = "1", `created_at` = "2021-10-11 23:25:38", `updated_at` = "2021-02-05 17:32:02" WHERE `id` = 16;
UPDATE `products` SET `id` = 18, `name` = "Bohemia Sekt", `description` = "Este vino es un Bohemia Sekt Rosé Demi-Sec", `image` = "VINO18.JPG", `classification_id` = 3, `variety_id` = 12, `price` = "2368", `featured` = "0", `created_at` = "2021-05-06 14:42:42", `updated_at` = "2021-09-24 12:09:41" WHERE `id` = 17;
UPDATE `products` SET `id` = 19, `name` = "Andeluna SEMILLON", `description` = "Este vino es un Andeluna SEMILLON Blanco Semillón", `image` = "VINO19.JPG", `classification_id` = 2, `variety_id` = 5, `price` = "1259", `featured` = "1", `created_at` = "2021-03-13 02:21:44", `updated_at` = "2021-10-03 15:26:52" WHERE `id` = 18;
UPDATE `products` SET `id` = 20, `name` = "Marco Zunino", `description` = "Este vino es un Marco Zunino Rosé Bonarda", `image` = "VINO20.JPG", `classification_id` = 3, `variety_id` = 6, `price` = "2596", `featured` = "1", `created_at` = "2021-03-31 02:31:49", `updated_at` = "2021-02-17 08:25:35" WHERE `id` = 19;
UPDATE `products` SET `id` = 21, `name` = "Elementos", `description` = "Este vino es un Elementos Rosé Torrontés", `image` = "VINO21.JPG", `classification_id` = 3, `variety_id` = 7, `price` = "5185", `featured` = "0", `created_at` = "2021-03-12 17:51:48", `updated_at` = "2021-05-19 23:17:24" WHERE `id` = 20;
UPDATE `products` SET `id` = 22, `name` = "Finca Las Moras BONARDA", `description` = "Este vino es un Finca Las Moras BONARDA Tinto Bonarda", `image` = "VINO22.JPG", `classification_id` = 1, `variety_id` = 6, `price` = "5431", `featured` = "1", `created_at` = "2022-01-16 12:42:06", `updated_at` = "2021-03-21 09:33:09" WHERE `id` = 21;
UPDATE `products` SET `id` = 23, `name` = "Champagne Vilarnau Barcelona ICE", `description` = "Este es un Champagne Vilarnau Barcelona ICE Espumante Sec", `image` = "VINO23.JPG", `classification_id` = 4, `variety_id` = 11, `price` = "1147", `featured` = "1", `created_at` = "2021-04-23 12:59:54", `updated_at` = "2021-03-02 00:46:03" WHERE `id` = 22;
UPDATE `products` SET `id` = 24, `name` = "Pays d'Oc Charette", `description` = "Este vino es un Pays d'Oc Charette Rosé Syrah", `image` = "VINO24.JPG", `classification_id` = 3, `variety_id` = 4, `price` = "6999", `featured` = "0", `created_at` = "2021-04-25 13:30:58", `updated_at` = "2021-08-12 23:35:13" WHERE `id` = 23;
UPDATE `products` SET `id` = 25, `name` = "Champagne Valdivieso", `description` = "Este es un Champagne Valdivieso Espumante Brut", `image` = "VINO25.JPG", `classification_id` = 4, `variety_id` = 9, `price` = "1062", `featured` = "0", `created_at` = "2021-04-12 23:10:53", `updated_at` = "2021-08-17 11:50:12" WHERE `id` = 24;
*/
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'Administrador'),(2,'Usuario');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rayna','Sambidge','rsambidge0@gmpg.org','$2a$12$O13HZm3x9I/pVnkLFvz.quFSxPUUpaB36qfo1Q','https://robohash.org/ipsamdeseruntdoloremque.',1),(2,'Law','Trodler','ltrodler1@huffingtonpost.com','fjjah2CgMp','https://robohash.org/repellendusexplicabout.p',2),(3,'Amy','Baildon','abaildon2@issuu.com','kmn5vsCvE33Z','https://robohash.org/estsaepefugiat.png?size=',2),(4,'Matthus','Dewick','mdewick3@elpais.com','TE27XEUM','https://robohash.org/verononet.png?size=50x50',2),(5,'Flora','Faichnie','ffaichnie4@ibm.com','aKDjyb','https://robohash.org/quifugiattemporibus.png?',2),(6,'Hoyt','Merryfield','hmerryfield5@sciencedirect.com','PHw73PC7Ye','https://robohash.org/possimusvoluptascorporis',2),(7,'Hadleigh','Kamien','hkamien6@pcworld.com','EV5Jru','https://robohash.org/laboreodioenim.png?size=',2),(8,'Bearnard','Chamberlain','bchamberlain7@narod.ru','02qByZ','https://robohash.org/quidemetaperiam.png?size',2),(9,'Dan','Corrie','dcorrie8@ning.com','uXbvzC0RwLGl','https://robohash.org/repudiandaeetmagni.png?s',2),(10,'Lorie','Gabel','lgabel9@unicef.org','QVT1AGTZh','https://robohash.org/voluptateadexcepturi.png',2),(13,'flor','flor','flor@gmail.com','$2a$08$1HZEIULsGKcOKryVJ6yl5OdwMnz6u5kJ6kehxL','image-1640127964632.jpg',1),(14,'flor','flor','florencia@gmail.com','$2a$08$kIiLAgoe.0MV90GyxUoeduGU60NOjmf/hIotd5','image-1640128521259.jpg',2),(15,'florencia2','modificado','florg@gmail.com','$2a$08$G77/nyi.1TPe0zv7vv3D4e2f/pZUDxKCsM8thkNmVbeXkzzX9IP8W','image-1640303890122.jpg',1),(16,'flor','flor','florusuario@gmail.com','$2a$08$3xSH7EvzScoOyrf9wH5H3e1Di4EcAzuwf.o7MlrUZqU77GQqwnmP2','image-1640268941356.jpg',1),(17,'flor','flor','florus@gmail.com','$2a$08$7mat6AIrw4mRYZxKxQDF0eQQJJ95Ffzn6.om29WlleHSruoWvfFYW','image-1640269003232.jpg',2),(19,'flor','flor','flor@g.com','$2a$08$CP4Lwmt3o2s2ybiPQCv31etVQKWWTPTny4zlpG2yqNgfOA9BhAgUC','image-1641360472614.jpg',1),(20,'flor','flor','flor@garcia.com','$2a$08$6yza6ytH60RGDaUFhHhSuu0CS77tEBfwkIYn4snvlLfz2W5ReqwpK','image-1641360522202.jpg',1),(21,'','','','$2a$08$L6twcAtSr8AbdNiZtFikiOgoGyEUcPbIx4mPOuOSj/GwGnW6aeE7O','image-1641363088998.jpg',1),(26,'flor','flor','florencia@gmail.coc','$2a$08$FVz8pXxLNJzgw0QJEGCYiO18PzdSVPSeurKgRZfjuAfGlG9YSMiKe','image-1641413159768.jpg',1),(27,'flor','flor','florencia.g@gmail.com','$2a$08$quf6h5tUZCj3oG5PjJagHOYeD2I1qBI4FGxDmaAA1Br3kBLb1Cjiq','image-1641413730102.jpg',1),(29,'flor','flor','flor@gmail','$2a$08$gdft8WX2CYAoMEEsuZdsMu1DH7rJnYhqaTrR4jr3LSYBEZrTlZ8mi','image-1641414288598.jpg',1),(31,'flor','flor','florgar@gmail.com','$2a$08$/O6cxVUYoZbo9YTTp63iEe/RAZNQvZvqnXScYLpQ6VLfq52ZsD89u','image-1641515186304.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `varieties`
--

LOCK TABLES `varieties` WRITE;
/*!40000 ALTER TABLE `varieties` DISABLE KEYS */;
INSERT INTO `varieties` VALUES (1,'Malbec'),(2,'Cabernet'),(3,'Merlot'),(4,'Syrah'),(5,'Semillón'),(6,'Bonarda'),(7,'Torrontés'),(8,'Sauvignon'),(9,'Brut'),(10,'Extra Brut'),(11,'Sec'),(12,'Demi-Sec'),(13,'Blend')
ON DUPLICATE KEY UPDATE name = VALUES (name);
/*!40000 ALTER TABLE `varieties` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-09 23:38:00
