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
INSERT INTO `products` VALUES (1,'praesent blandit lacinia erat vestibulum','pellentesque viverra pede ac diam','https://robohash.org/voluptatesvoluptatibusid',1,1,9378,0),(2,'dapibus augue vel accumsan','magna bibendum imperdiet nullam orci','https://robohash.org/uttemporibusrerum.png?si',2,2,6747,1),(3,'sapien quis libero nullam','dui luctus rutrum nulla tellus','https://robohash.org/estoptiominima.png?size=',3,3,3796,0),(4,'erat eros viverra eget','non velit donec diam neque','https://robohash.org/asperioresquaeratquod.pn',1,4,2617,1),(5,'orci pede venenatis non','vulputate vitae nisl aenean lectus','https://robohash.org/veritatisrepellendusaspe',2,1,3572,0),(6,'interdum eu tincidunt in leo','ultrices phasellus id sapien in','https://robohash.org/temporibusporroaut.png?s',3,2,5798,1),(7,'semper sapien a libero nam','vestibulum ante ipsum primis in','https://robohash.org/molestiaeessequo.png?siz',1,3,4525,1),(8,'id nulla ultrices aliquet','consequat dui nec nisi volutpat','https://robohash.org/etcommodivitae.png?size=',2,4,8359,0),(9,'duis faucibus accumsan odio','at dolor quis odio consequat','https://robohash.org/occaecatiestquisquam.png',3,1,6593,1),(10,'neque aenean auctor gravida','varius ut blandit non interdum','https://robohash.org/sapientenihilvelit.png?s',1,2,5876,0);
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
INSERT INTO `users` VALUES (1,'Rayna','Sambidge','rsambidge0@gmpg.org','$2a$12$O13HZm3x9I/pVnkLFvz.quFSxPUUpaB36qfo1Q','https://robohash.org/ipsamdeseruntdoloremque.',1),(2,'Law','Trodler','ltrodler1@huffingtonpost.com','fjjah2CgMp','https://robohash.org/repellendusexplicabout.p',2),(3,'Amy','Baildon','abaildon2@issuu.com','kmn5vsCvE33Z','https://robohash.org/estsaepefugiat.png?size=',2),(4,'Matthus','Dewick','mdewick3@elpais.com','TE27XEUM','https://robohash.org/verononet.png?size=50x50',2),(5,'Flora','Faichnie','ffaichnie4@ibm.com','aKDjyb','https://robohash.org/quifugiattemporibus.png?',2),(6,'Hoyt','Merryfield','hmerryfield5@sciencedirect.com','PHw73PC7Ye','https://robohash.org/possimusvoluptascorporis',2),(7,'Hadleigh','Kamien','hkamien6@pcworld.com','EV5Jru','https://robohash.org/laboreodioenim.png?size=',2),(8,'Bearnard','Chamberlain','bchamberlain7@narod.ru','02qByZ','https://robohash.org/quidemetaperiam.png?size',2),(9,'Dan','Corrie','dcorrie8@ning.com','uXbvzC0RwLGl','https://robohash.org/repudiandaeetmagni.png?s',2),(10,'Lorie','Gabel','lgabel9@unicef.org','QVT1AGTZh','https://robohash.org/voluptateadexcepturi.png',2),(13,'flor','flor','flor@gmail.com','$2a$08$1HZEIULsGKcOKryVJ6yl5OdwMnz6u5kJ6kehxL','image-1640127964632.jpg',1),(14,'flor','flor','florencia@gmail.com','$2a$08$kIiLAgoe.0MV90GyxUoeduGU60NOjmf/hIotd5','image-1640128521259.jpg',2),(15,'flor','flor','florg@gmail.com','$2a$08$/UbyTp/q9UpXqHeP2DCVEO9JMQvKewfje6OeoRgi6kKt/q7xJ3fRy','image-1640268316451.jpg',1),(16,'flor','flor','florusuario@gmail.com','$2a$08$3xSH7EvzScoOyrf9wH5H3e1Di4EcAzuwf.o7MlrUZqU77GQqwnmP2','image-1640268941356.jpg',1),(17,'flor','flor','florus@gmail.com','$2a$08$7mat6AIrw4mRYZxKxQDF0eQQJJ95Ffzn6.om29WlleHSruoWvfFYW','image-1640269003232.jpg',2);
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

-- Dump completed on 2021-12-23 14:05:50
