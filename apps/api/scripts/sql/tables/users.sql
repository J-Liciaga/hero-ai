CREATE TABLE `users` (
  `id` VARCHAR(36) NOT NULL UNIQUE, 
  `clerk_id` VARCHAR(255) NOT NULL UNIQUE,
  `username` VARCHAR(255) NOT NULL, 
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `phone_number` VARCHAR(50) UNIQUE,
  `full_name` VARCHAR(255),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);