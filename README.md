<!-- 1 Creo el archivo README.md -->

<!-- 2 Subo el repositorio a GitHub: "node-webrest-server" 
De este modo es más fácil hacer un despliegue en Railway -->

<!-- 3 Crear una cuenta en Railway y asociarla a Github -->

<!-- 4 RAILWAY:
    Click en Start New Project
    Selecciono Deploy from GitHub repo
    Busco mi repo: node-webrest-server  
    
    Me sale opciones: Deploy Now o Add variables (En mi proyecto no toco las variables de entorno porque el PORT Railway me pone la que el quiera)
        Así que le doy a Deploy Now 
    Click en Settings 
        Voy al apartado Public HTTP Networking y Click en Generate Domain 
        Click en el Url y ya veo la Web 

    Voy a Herramiento de Desarrollo de Chrome Network, Recargo y veo que el servidor (candadito) tiene un certificado https y que se está sirviendo con el protocolo es Http2. Eso es gracias al Hosting que estamos usando -->


# Dev

1. Clonar el .env.template y crear el .env