-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema lemnos_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lemnos_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lemnos_db` DEFAULT CHARACTER SET utf8 ;
USE `lemnos_db` ;

-- -----------------------------------------------------
-- Table `lemnos_db`.`beaches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemnos_db`.`beaches` (
  `beaches_id` INT NOT NULL AUTO_INCREMENT,
  `name_gr` VARCHAR(70) CHARACTER SET 'utf8' NOT NULL,
  `name_eng` VARCHAR(70) CHARACTER SET 'utf8' NOT NULL,
  `distance` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  `unit_gr` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  `unit_eng` VARCHAR(45) NOT NULL,
  `location_gr` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  `location_eng` VARCHAR(45) NOT NULL,
  `orientation` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  `description_gr` VARCHAR(200) CHARACTER SET 'utf8' NOT NULL,
  `description_eng` VARCHAR(200) CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`beaches_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
