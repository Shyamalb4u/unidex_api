const { prototype } = require("jsonwebtoken/lib/JsonWebTokenError");
require("dotenv").config();

const config = {
  user: process.env.DB_USER, // Database username
  password: process.env.DB_PASS, // Database password
  server: process.env.DB_SERVER, // Server IP address
  database: process.env.DB_DATABASE, // Database name
  options: {
    encrypt: false, // Disable encryption
  },
  port: parseInt(process.env.DB_PORT),
};

module.exports = config;
