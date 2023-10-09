
# Dev

1. Clonar el .env.template y crear el .env

2. Ejecutar el comando ```docker compose up -d```

<!-- 1 Añado carpeta dist/ a .gitignore -->

<!-- 2 Railway - New - PostgresQl - click en "Connect" 
Apartado Available Variables - DATABASE_URL (Clic en el ojo y click en copiar la cadena de conexión)-->

<!-- 3 Pego la nueva cadena de conexión en el archivo .env
POSTGRES_URL=postgresql://postgres:73mdMWyGDJ0nVtvVU0sX@containers-us-west-107.railway.app:6921/railway -->

<!-- 4 En package.json "prisma:migrate:prod": "prisma migrate deploy"
Así cuando hagamos el build de producción se harán las migraciones-->

<!-- 5 Terminal: npm run prisma:migrate:prod
Terminal: npm run build  (Ya estoy en la nueva db y la veo el Railway) -->

<!-- 6 Voy a PM y hago un post POST -->

<!-- 7 Voy a Railway proyecto Progres - OK Ya lo tengo -->

<!-- 8 Vuelvo a poner en .env  POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TODO -->

<!-- 9 En package.json "build": "rimraf ./dist && tsc && npm run prisma:migrate:prod", 
Así cuando hagamos el build de producción se harán las migraciones-->

<!-- 10 Creo el commit y hago el push -->

<!-- 11 Arreglo lo de las vriables de entorno. Dejo solo POSTGRES_URL y PUBLIC_PATH" -->

<!-- 12 Voy a la url que me dan y añado /api/actiones - OK -->

<!-- 13 En PM sustituyo localhost:300 por la url de railway. Hago nuevos POST para rellenar la nueva db de Railway-->