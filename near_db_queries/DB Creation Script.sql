CREATE DATABASE `near_protocol`;

CREATE TABLE `near_protocol`.`users` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `upvotes` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
  
  CREATE TABLE `near_protocol`.`questions` (
  `id` INT NOT NULL,
  `title` TINYTEXT NOT NULL,
  `question_text` LONGTEXT NOT NULL,
  `author_id` INT NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));
  
  ALTER TABLE `near_protocol`.`questions` 
ADD CONSTRAINT `author_id`
  FOREIGN KEY (`author_id`)
  REFERENCES `near_protocol`.`users` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  CREATE TABLE `near_protocol`.`answers` (
  `id` INT NOT NULL,
  `answer_text` LONGTEXT NOT NULL,
  `author_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `author_id_idx` (`author_id` ASC) VISIBLE,
  INDEX `question_id_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `answer_author`
    FOREIGN KEY (`author_id`)
    REFERENCES `near_protocol`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `question_id`
    FOREIGN KEY (`question_id`)
    REFERENCES `near_protocol`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

