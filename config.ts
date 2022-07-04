import dotenv from "dotenv";
dotenv.config({ path: ".env" });

console.log(process.env.PORT);

export default {
  PORT: process.env.PORT,
};
