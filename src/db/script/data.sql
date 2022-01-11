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

LOCK TABLES `classifications` WRITE;
/*!40000 ALTER TABLE `classifications` DISABLE KEYS */;
INSERT INTO `classifications` VALUES (1,'Tinto'),(2,'Blanco'),(3,'Rosado');
/*!40000 ALTER TABLE `classifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'flor','magna bibendum imperdiet nullam orci','image-1638918452262.jpg',1,1,6747,1),(3,'sapien quis libero nullam','dui luctus rutrum nulla tellus','image-1638918452262.jpg',3,3,3796,1),(4,'erat eros viverra eget','non velit donec diam neque','image-1638918452262.jpg',1,4,2617,1),(5,'orci pede venenatis non','vulputate vitae nisl aenean lectus','image-1638918452262.jpg',2,1,3572,1),(6,'interdum eu tincidunt in leo','ultrices phasellus id sapien in','image-1638918452262.jpg',3,2,5798,1),(7,'semper sapien a libero nam','vestibulum ante ipsum primis in','image-1638918452262.jpg',1,3,4525,1),(8,'id nulla ultrices aliquet','consequat dui nec nisi volutpat','image-1638918452262.jpg',2,4,8359,1),(9,'duis faucibus accumsan odio','at dolor quis odio consequat','image-1638918452262.jpg',3,1,6593,1),(10,'neque aenean auctor gravida','varius ut blandit non interdum','image-1638918452262.jpg',1,2,5876,0);
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
INSERT INTO `varieties` VALUES (1,'Malbec'),(2,'Cavernet'),(3,'Merlot'),(4,'Syrah');
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
