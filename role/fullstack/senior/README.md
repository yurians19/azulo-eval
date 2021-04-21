# Azulo: Evaluación para el rol fullstack senior
## Instrucciones
1. Crear una carpeta 'role/fullstack/senior/[gitusername]' reemplazando '[gitusername]' por el nombre de usuario del candidato en GitHub.
1. Favor realizar todos sus cambios dentro de esta carpeta. Por favor no realice cambios en archivos fuera de esta carpeta, ni tampoco agregue otras carpetas fuera de esta.
1. El resultado de su evaluación debe ser un ejemplo autosuficiente y autocontenido. Para compilar y construir los productos debe incluir instrucciones suficientes para levantar el ambiente de ejemplo sin necesidad de corregir errores o instalar productos no mencionados en las instrucciones.
1. Docker debe ser el producto básico del ejemplo y todos los demás productos deben estar basados en el mismo. Toda instancia de un producto que sea producida por el ejemplo a ser evaluado debe ejecutarse dentro de un contenedor de Docker. Si alguno de los productos de su ejemplo de evaluación no está configurado para correr como un contenedor en Docker, esto se reflejará negativamente en su evaluación. Si no ha usado Docker con anterioridad en un ambiente de desarrollo, siéntase libre de investigar y aprender cuanto tiempo considere necesario, pero recuerde enviar cada día una actualización al servidor, ya sea con el avance, aunque sea parcial, de su ejemplo, o con anotaciones recopiladas durante su sesión de estudio y aprendizaje de la tecnología.
1. Siempre que las instrucciones mencionen la creación, configuración o el levantado de un contenedor, estas harán referencia a un contenedor de Docker.
1. Todo proceso de compilación y construcción de código debe ser ejecutado dentro de un contenedor. La máquina anfitriona no debe tener necesidad de instalar o correr otras herramientas que no sea Docker en si mismo.
1. Herramientas de manejo de paquetes como npm, yarn, entre otras, deben ser instaladas y ejecutas dentro del contenedor de forma autosuficiente y autocontenida.
1. Después de leer con detenimiento este archivo, se espera que antes de iniciar al trabajo el candidato envíe un estimado de las horas/hombre que le tomará realizarlas, y de acuerdo a su disponibilidad de horas diarias para realizar esta prueba, en cuantos días calendario se traduce ese estimado. Si el estimado no es recibido por el candidato el mismo día que se envía la prueba, se descartará su solicitud.
1. Al final hay una lista de tareas marcadas como "*Extra*." Aunque no es requerido realizar todas estas tareas, hacerlo se reflejará positivamente en su evaluación. El candidato debe también decidir cuales tareas extra va a realizar después de su evaluación inicial e incluirlas en el estimado descrito en el punto anterior. Junto con el estimado, el candidato debe mencionar cuales tareas extra se compromete a realizar.
1. Se espera que un candidato senior realice al menos dos tareas extra a elegir, aunque más tareas extra se reflejarán positivamente en su evaluación.
## Tareas
1. Desplegar una imagen de MySQL usando docker-compose.
1. Desplegar una imagen de Adminer usando docker-compose, la cual se conecte al contenedor de MySQL que fue desplegado en la tarea #1.
1. Desplegar una imagen de Directus usando docker-compose, la cual se conecte al contenedor de MySQL que fue desplegado en la tarea #1.
1. Desplegar una imagen de Flyway usando docker-compose, la cual se conecte al contenedor de MySQL y cree por medio de un archivo de migración las siguientes tablas, usando los tipos de datos que considere convenientes:
    1. Location
        1. Id
        1. Country
        1. ProvinceOrState
        1. Longitude
        1. Latitude
    1. AirportOperator
        1. Id
        1. Name
    1. Airport
        1. Id
        1. Name
        1. AirportOperatorId
        1. AirportCode
        1. LocationId
        1. PriorityOrder (entero que representa el orden de prioridad)
1. Crear un nuevo archivo de migración que genere datos de prueba para cada una de las tablas, con al menos 10 registros en cada tabla. Los contenidos quedan a discreción del participante.
1. Crear un proyecto de vue.js usando TypeScript usando el nombre "airportart-web"
1. Desplegar una imagen de node para compilar y construir el proyecto de vue.js usando docker-compose.
1. Usando la capacidad de docker de crear compilaciones de multiple estado (multi-stage builds), modificar el archivo de Docker creado en el paso anterior para desplegar una imagen de nginx que exponga la aplicación "airportart-web" que fue creada en pasos anteriores usando el puerto 36949.
1. Actualizar la aplicación "airportart-web" para que se conecte al API de Directus corriendo en un contenedor de docker y muestre una lista de los aeropuertos, desplegando para cada aeropuerto una tarjeta de 160x80px que contenga la siguiente información:
    1. {{Airport.AirportCode}} - {{Airport.Name}}
    1. {{Location.ProvinceOrState}}, {{Location.Country}}
    1. Administrado por: {{AirportOperator.Name}}
1. Las tarjetas deben dibujarse en el orden determinado por el campo Airport.PriorityOrder
1. Las tarjetas deben dibujarse en pantalla usando una grilla (grid) que permita desplegar cuantas tarjetas quepan horizontalmente y luego iniciar en la siguiente línea de acuerdo al tamaño del navegador.
1. Debe ser posible cambiar el tamaño del navegador y las tarjetas deben acomodarse para llenar el espacio disponible.
1. Si el tamaño del navegador está entre 240px y 480px de ancho, la página debe tener márgenes a la izquierda y derecha de 20px y márgenes arriba y abajo de 50px.
1. Si el tamaño del navegador está entre 481px y 720px de ancho, la página debe tener márgenes a la izquierda y derecha de 60px y márgenes arriba y abajo de 120px.
1. Si el tamaño del navegador está entre 721px y 1280px de ancho, la página debe tener márgenes a la izquierda y derecha de 90px y márgenes arriba y abajo de 200px.
1. Si el tamaño del navegador excede los 1280px de ancho, la grilla (grid) debe mantenerse a un máximo de 1280px de ancho, centrada en el espacio disponible, con márgenes a la izquierda y derecha de 90px y márgenes arriba y abajo de 200px. El espacio fuera de los márgenes que exceda los 1280px debe ser de color gris claro (#EEEEEE).
1. Todos los textos de la página deben usar la tipografía OpenSans
1. *Extra*: Dibujar un borde y sombreado difuminado alrededor de las tarjetas.
1. *Extra*: Crear otras 3 tablas a discreción del candidato con más detalle acerca del aeropuerto. El detalle puede incluir, por ejemplo un listado de vuelos.
1. *Extra*: Agregar una migración que llene datos de prueba en todas las tablas con al menos 1000 registros en cada una.
1. *Extra*: Agregar funcionalidad que le permita al usuario arrastrar y dejar caer las tarjetas en diferente orden.
1. *Extra*: Agregar funcionalidad que actualice el campo "PriorityOrder" en la base de datos cuando el usuario cambia el orden de las tarjetas.
1. *Extra*: Levantar una instancia de MiniKube (Kubernetes)
1. *Extra*: Levantar los mismos servicios que se levantaron usando docker-compose en MiniKube usando archivos YAML de configuración.
1. *Extra*: Convertir el nombre del aeropuerto en un hipervínculo que lleve al usuario a una página adicional de detalle, la cual muestre los datos creados en las tres tablas de la tarea extra descrita con anterioridad.
1. *Extra*: Agregar un control en el tope de la página que le permita al usuario ordenar las tarjetas por nombre del aeropuerto de forma alfabética, por nombre del operador de forma alfabética o por orden de prioridad.
1. *Extra*: Deshabilitar la funcionalidad de reordenar las tarjetas si el ordenamiento seleccionado no es por orden de prioridad.
1. *Extra*: Agregar un control en el tope de la página que le permita al usuario desplegar las tarjetas usando la vista actual, una vista de tarjeta más pequeña o una vista de detalles, que despliega en forma de tabla en lugar de desplegarlo en forma de grilla.
1. *Extra*: Agregar controles de paginación que le permitan al usuario navegar entre páginas de 10 tarjetas.
1. *Extra*: Generar datos de prueba de hasta 10 mil registros por cada tabla y evaluar el rendimiento de las páginas creadas e implementar cambios que mejoren la experiencia del usuario.