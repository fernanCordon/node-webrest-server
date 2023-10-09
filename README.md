
# Dev

1. Clonar el .env.template y crear el .env

2. Ejecutar el comando ```docker compose up -d```

<!-- 1 Añado carpeta dist/ a .gitignore -->

<!-- 2 Railway - New - PostgresQl - click en "Connect" 
Apartado Available Variables - DATABASE_URL (Clic en el ojo y click en copiar la cadena de conexión)-->

<!-- 3 Pego la nueva cadena de conexión en el archivo .env
POSTGRES_URL=postgresql://postgres:73mdMWyGDJ0nVtvVU0sX@containers-us-west-107.railway.app:6921/railway -->

<!-- 4 Terminal: npx prisma migrate deploy
Terminal: npm run dev  (Ya estoy en la nueva db y la veo el Railway) -->

<!-- 5 Voy a PM y hago un post POST -->

<!-- 6 Voy a Railway proyecto Progres - OK Ya lo tengo -->

<!-- 7 Vuelvo a poner en .env  POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TODO -->

<!-- 8 En package.json "build": "rimraf ./dist && tsc && npx prisma migrate deploy", 
Así cuando hagamos el build de producción se harán las migraciones-->

<!-- 9 Creo el commit y hago el push -->

<!-- 9B Arreglo lo de las vriables de entorno. Dejo solo POSTGRES_URL y PUBLIC_PATH" -->

<!-- 10 Voy a la url que me dan y añado /api/actiones - OK -->

<!-- 11 En PM sustituyo localhost:300 por la url de railway. Hago nuevos POST para rellenar la nueva db de Railway-->