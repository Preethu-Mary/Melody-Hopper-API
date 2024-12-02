import dotenv from 'dotenv';
import { URL } from 'url'; 

dotenv.config(); 

const dbUrl = new URL(process.env.DB_URL); 
export default {
  client: 'mysql2',
  connection: {
    host: dbUrl.hostname,  
    user: dbUrl.username, 
    password: dbUrl.password, 
    database: dbUrl.pathname.slice(1), 
    port: dbUrl.port,
  },
};
