// 26 Pongo estos dos imports
import 'dotenv/config';
import { get } from 'env-var';

// 24 Creo carpeta src/config/
// Creo archivo envs.ts dentro de config/

// 25 Traigo los paquetes dotenv y env-var 
// Terminal: npm i dotenv env-var


// 27 Para las conversiones
export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
}