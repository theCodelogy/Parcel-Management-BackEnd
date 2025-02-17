import dotenv from "dotenv";
dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  db_uri: process.env.MONGO_URI,
  bcrypt_salt_rounds:process.env.BCRYPT_SALT,
  jwt_secret:process.env.jWT_SECRET,
  jwt_expair:process.env.JWT_EXPIRES_IN
};
