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
INSERT INTO `classifications` (id, name) VALUES 
  (1,'Tinto'),
  (2,'Blanco'),
  (3,'Rosé'),
  (4,'Espumante')
ON DUPLICATE KEY UPDATE id=VALUES(id), name=VALUES (name);
/*!40000 ALTER TABLE `classifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (id, name, description, image, classification_id, variety_id, price, featured) VALUES
  (1, "Alma Mora",                          "Este vino es un Alma Mora Tinto Malbec",                       "VINO1.JPG",     1,1,    "4382", "1"),
  (2, "Matias Riccitelli",                  "Este vino es un Matias Riccitelli Blanco Torrontés",           "VINO2.JPG",     2,7,    "3608", "0"),
  (3, "Mendel",                             "Este vino es un Mendel Blanco Semillón",                       "VINO3.JPG",     2,5,    "1264", "0"),
  (4, "Famiglia Bianchi",                   "Este vino es un Famiglia Bianchi Rosé Blend",                  "VINO4.JPG",     3,13,   "510",  "0"),
  (5, "Vinarija Zvonko Bogdan",             "Este vino es un Vinarija Zvonko Bogdan Rosé Sec",              "VINO5.JPG",     3,11,   "2989", "0"),
  (6, "Champagne Norton",                   "Este es un Champagne Norton Espumante Extra Brut",             "VINO6.JPG",     4,10,   "3628", "0"),
  (7, "Blanco Cabal",                       "Este vino es un Blanco Cabal Espumante Torrontés",             "VINO7.JPG",     4,7,    "5391", "1"),
  (8, "Estancia Mendoza 'Kadabra'",         "Este vino es un Estancia Mendoza 'Kadabra' Tinto Sauvignon",   "VINO8.JPG",     1,8,    "3147", "0"),
  (9, "Los Medanos",                        "Este vino es un Los Medanos Rosé Sauvignon",                   "VINO9.JPG",     3,8,    "3063", "1"),
  (10,"El Relator",                         "Este vino es un El Relator Espumante Syrah",                   "VINO10.JPG",  	 4,4,    "756",  "0"),
  (11,"Grand Sud 1L",                       "Este vino es un Grand Sud de 1L Rosé Merlot",                  "VINO11.JPG", 	 3,3,    "6695", "0"),
  (12,"Gran Tinto Tacama",                  "Este vino es un Gran Tinto Tacama Malbec",                     "VINO12.JPG",  	 1,1,    "4121", "0"),
  (13,"Reserva Aliwen Undurraga",           "Este vino es un Reserva Aliwen Undurraga Tinto Syrah",         "VINO13.JPG",  	 1,4,    "4745", "1"),
  (14,"Cordero con Piel de Lobo",           "Este vino es un Cordero con Piel de Lobo Rosé Cabernet",       "VINO14.JPG",  	 3,2,    "4241", "1"),
  (15,"Lagarde Organic",                    "Este vino es un Lagarde Organic Rosé Semillón",                "VINO15.JPG", 	 3,5,    "4376", "1"),
  (16,"Champagne Finca Las Moras",          "Este es un Champagne Finca Las Moras Espumante Syrah",         "VINO16.JPG", 	 4,4,    "3435", "1"),
  (17,"Champagne Valdivieso",               "Este es un Champagne Valdivieso Espumante Brut",               "VINO17.JPG",    4,9,    "4328", "1"),
  (18,"Bohemia Sekt",                       "Este vino es un Bohemia Sekt Rosé Demi-Sec",                   "VINO18.JPG",  	 3,12,   "776",  "1"),
  (19,"Andeluna SEMILLON",                  "Este vino es un Andeluna SEMILLON Blanco Semillón",            "VINO19.JPG",  	 2,5,    "1249", "1"),
  (20,"Marco Zunino",                       "Este vino es un Marco Zunino Rosé Bonarda",                    "VINO20.JPG",  	 3,6,    "4558", "0"),
  (21,"Elementos",                          "Este vino es un Elementos Rosé Torrontés",                     "VINO21.JPG", 	 3,7,    "3405", "0"),
  (22,"Finca Las Moras BONARDA",            "Este vino es un Finca Las Moras BONARDA Tinto Bonarda",        "VINO22.JPG", 	 1,6,    "5920", "1"),
  (23,"Champagne Vilarnau",                 "Este es un Champagne Vilarnau Barcelona ICE Espumante Sec",    "VINO23.JPG",    4,11,   "5592", "0"),
  (24,"Pays d'Oc Charette",                 "Este vino es un Pays d'Oc Charette Rosé Syrah",                "VINO24.JPG",    3,4,    "2797", "1")
ON DUPLICATE KEY UPDATE id=VALUES(id), name=VALUES (name), description=VALUES (description), image=VALUES (image), classification_id=VALUES (classification_id), variety_id=VALUES (variety_id), price=VALUES (price), featured=VALUES (featured);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` (id, name) VALUES 
  (1,'Administrador'),
  (2,'Usuario')
ON DUPLICATE KEY UPDATE id=VALUES(id), name=VALUES (name);
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (id, firstname, lastname, email, password, image, type_id) VALUES 
  (1,'Administrador','TWS','admin@tws.org','$2a$08$0oZD6kEh6a8MpA7FOMTkqehYjgb/EDn8tWBByqhb0ikB/AjBhrrEG','defaultUsers/admin.svg',1),
  (2,'Law','Trodler','ltrodler1@huffingtonpost.com','$2a$12$a2vjbcbodXOASXDReeKK8OciYPJGUPdMHoBstQwHplCOma83LNNuC','defaultUsers/2.png',2),
  (3,'Amy','Baildon','abaildon2@issuu.com','$2a$12$p6vKvVkALyoZf15NhuV0KeXwXOx53jQDKgnMgMj.qeAlyw4/PBTQW','defaultUsers/3.png',2),
  (4,'Matthus','Dewick','mdewick3@elpais.com','$2a$12$nAj2B0fv/nw/lMMYZsCza.cdQmEvczpaZINICYNdk1CKzJ1Suddt6','defaultUsers/4.png',2),
  (5,'Flora','Faichnie','ffaichnie4@ibm.com','$2a$12$soje7PuZJ1liHIU.UrIeyut.KQQTEsZekPvWVXAhT0TyNTcpdLE2W','defaultUsers/5.png',2),
  (6,'Hoyt','Merryfield','hmerryfield5@sciencedirect.com','$2a$12$rADXbPSoXRDenH9mOKmT8uQO4u/isPzo9Vn1ZTTBXMRYRXK9kZGZu','defaultUsers/6.png',2),
  (7,'Hadleigh','Kamien','hkamien6@pcworld.com','$2a$12$3kR1wGJWzHQUhgR0r27azO.O7h9ak/mWUg7Wd5JKnnPTvD3QmhFt.','defaultUsers/7.png',2),
  (8,'Bearnard','Chamberlain','bchamberlain7@narod.ru','$2a$12$SZSd4WnT1OgLjUSUvT4.te.5UqfqFcyfeyYhl1cUHK5wGz/H4x6XG','defaultUsers/8.png',2),
  (9,'Dan','Corrie','dcorrie8@ning.com','$2a$12$1lIz.rTqNJhScTGXVPRGFet4P4kZFf9JHoGdJWi4Ts5iDEWeYeOT.','defaultUsers/9.png',2),
  (10,'Lorie','Gabel','lgabel9@unicef.org','$2a$12$9txwpyaKjCVMth2/4ywxguz5YoRy7bPn5fxZL8V6cjIYfRccyNCWG','defaultUsers/10.png',2)
ON DUPLICATE KEY UPDATE id=VALUES(id), firstname=VALUES(firstname), lastname=VALUES(lastname), email=VALUES(email), password=VALUES(password), image=VALUES(image), type_id=VALUES(type_id);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `varieties`
--

LOCK TABLES `varieties` WRITE;
/*!40000 ALTER TABLE `varieties` DISABLE KEYS */;
INSERT INTO `varieties` (id, name) VALUES 
  (1,'Malbec'),
  (2,'Cabernet'),
  (3,'Merlot'),
  (4,'Syrah'),
  (5,'Semillón'),
  (6,'Bonarda'),
  (7,'Torrontés'),
  (8,'Sauvignon'),
  (9,'Brut'),
  (10,'Extra Brut'),
  (11,'Sec'),
  (12,'Demi-Sec'),
  (13,'Blend')
ON DUPLICATE KEY UPDATE id=VALUES(id), name=VALUES (name);
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
