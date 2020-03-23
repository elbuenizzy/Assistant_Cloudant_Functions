# Watson Assistant - Cloudant
![](assets/assistant.png)<br/> 
Realiza un asistente virtual que utiliza los servicion de cloudant y despliegalo en un voice agent!
# Pre-requisitos
•	Tener instalado [**Node.js**](https://nodejs.org/es/).<br/>
•	Tener una cuenta de [**IBM Cloud**](https://cloud.ibm.com/login).<br/>
•	•	Instalar un [**Editor de código**](https://code.visualstudio.com/download)<br/>
•	Instalar CLI de [**IBM Cloud**](https://cloud.ibm.com/docs/cli/reference/ibmcloud?topic=cloud-cli-install-ibmcloud-cli)<br/>
• Tener cuenta en [**Twilio**](https://www.twilio.com/try-twilio)<br/>
•	Clonar este Repositorio.<br/> 
## Cupones para profesores y estudiantes:

* Acceder al portal de [IBM Academic Initiative][url-academic] y seleccionar la opción "Register now" si aun no tienes cuenta.
* Realizar el registro correspondiente utilizando la cuenta de correo académica y confirma tu cuenta.
* Despues de confirmar tu cuenta, y con la sesion iniciada en IBM Academic Initiative, en la parte de "Most Popular Topics covered", encontraremos **IBM Cloud** y damos click en "Learn more".
* Bajamos de la pagina hasta encontrar "Software". Le damos click, nos dara un apartado que se llama "Request Feature Code".
* Nos dara nuestro codigo. Lo copiamos y lo llevamos a **IBM Cloud**.

## Cargar créditos en IBM Cloud:

* En la parte superior derecha, buscaremos la parte de "MANAGE"/"GESTIONAR", nos desplegara una lista y seleccionaremos "Account"/"Cuenta".
* De lado izquierdo, tendremos una opción "Account settings"/"Configuracion de cuenta".
* Bajamos un poco hasta encontrar "Subscription and feature codes"/"Codigos de suscripción y carateristicas".
* Da click en "Apply code"/"Aplicar codigo".
* Ingresamos el codigo y click en "Apply"/"Aplicar".

[url-academic]: https://my15.digitalexperience.ibm.com/b73a5759-c6a6-4033-ab6b-d9d4f9a6d65b/dxsites/151914d1-03d2-48fe-97d9-d21166848e65/home/

# Creación de Base de Datos con Cloudant
Ingresa a tu cuenta de IBM Cloud y en la barra de busqueda teclea “Cloudant” y da clic en el servicio.
![](assets/1.png)<br/> 

Seleccionamos el plan Lite.
![](assets/2.png)<br/> 

En la parte inferior de la misma ventana configura tu base de datos asignándole un nombre y para poder selecciona la primera opción de la lista desplegable.
![](assets/3.png)<br/> 

Posteriormente da clic en el botón de “Crear”
![](assets/4.png)<br/> 

Una vez creado el servicio ingresa al Menú de Navegación dando clic en las tres líneas que se encuentran en la parte superior izquierda de tu ventana y ve a tu Lista de Recursos.
![](assets/5.png)<br/> 

Dentro de la ventana principal de Cloudant da clic en “Crear Base de Datos”, asigna el nombre de “Proveedores” y da clic en crear.
![](assets/6.png)<br/> 

Una vez en tu Lista de Recursos, da clic en la ventana de Servios y después da clic en el nombre que le asignaste a tu base de datos.
![](assets/7.png)<br/> 

Posteriormente da clic en “Launch Cloudant Dashboard” para inicializar el servicio
![](assets/8.png)<br/> 

Ya dentro de la interfaz de Cloudant da clic en “Create Database” ,asigna el nombre de “proveedores” , selecciona la casilla de “Non-partitioned” y da clic en “Create”.
![](assets/9.png)<br/> 

Despues abrimos la carpeta que clonamos de Github con algún editor de textos y abrimos el documento “basededatos”
<!-- ![](assets/10.png)<br/>  -->

Dentro del archivo copiamos los datos que se encuentran en las primeras llaves { }.
<!-- ![](assets/11.png)<br/>  -->

Regresamos a Cloudant y damos clic en “Create Document”
![](assets/12.png)<br/> 

Dentro del documento, pegamos los datos del paso anterior debajo del ID asignado por Default en nuestro documento, agregamos una “,” después del ID y damos clic en “Create Document”
<!-- ![](assets/13.png)<br/>  -->

Repetimos el proceso con los otros 3 provedores hasta tener desplegados los 4 documentos en la pestaña de “All Documents” dentro de Cloudant.
![](assets/14.png)<br/> 

Posteriormente, desde nuestro editor de textos abrimos el archivo “type-group”, agregamos el nombre del dato que queremos consultar en la base de datos, en este caso es “proveedor” como se indica en la siguiente imagen y copiamos lo que contiene todo el archivo “type-group”.
![](assets/15.png)<br/> 

Regresamos a nuestra ventana de Cloudant, creamos un nuevo documento y pegamos el contenido del paso anterior.
![](assets/16.png)<br/> 

Regresando a la ventana principal de nuestro servicio de Cloudant, podemos ver en la sección de “groupType” que se despliega la pestaña “type-group” que nos trae el dato requerido en el paso anterior, en este caso el del “proveedor”.
<!-- ![](assets/17.png)<br/>  -->

# Creación de Functions
Regresamos a la ventana principal de IBM Cloud y en la barra de búsqueda ingresamos “functions” y damos clic en el servicio.
![](assets/18.png)<br/> 

En la siguiente ventana, damos clic en “Empezar a crear”. 
![](assets/19.png)<br/> 

En la siguiente ventana, damos clic en “Create action”.
![](assets/20.png)<br/> 

Le asignamos el nombre de “Estructurador vista” y damos clic en “Create” dejando las demás opciones como se asignan por default.
![](assets/21.png)<br/> 

Después regresamos a nuestro editor de textos, abrimos el archivo “estructurador vista”, sustituimos el nombre de nuestra base de datos como se muestra a continuación y copiamos todo el código dentro del archivo “estructurador vista”
![](assets/22.png)<br/> 

Regresamos a la ventana de functions, pegamos el código en la acción que hemos creado y damos clic en “Save”
![](assets/23.png)<br/> 

Posteriormente damos clic en “invoke” para hacer la consulta a la base de datos, esperamos unos segundos y podemos observar que la consulta fue realizada de manera exitosa.
![](assets/24.png)<br/> 

Regresamos a la sección de “Actions” en la parte superior izquierda.
![](assets/25.png)<br/> 

Damos clic en “créate”
![](assets/26.png)<br/> 

Y seleccionamos “Create sequence”
![](assets/27.png)<br/> 

En la siguiente ventana asignamos el nombre “Consulta proveedores”, seleccionamos la acción que creamos anteriormente y damos clic en “Create”.
![](assets/28.png)<br/> 

En la siguiente ventana nos encontramos dentro de la secuencia que acabamos de crear, damos clic en “Add” para crear una nueva acción dentro de la secuencia.
![](assets/29.png)<br/> 

En la siguiente ventana seleccionamos la ventana “Use public” y luego damos clic en el icono de “Cloudant”
![](assets/30.png)<br/> 

En la pestaña desplegable, seleccionamos la opción de “exec-query-view” y damos clic en “New Binding”
![](assets/31.png)<br/> 

Para obtener las credenciales de nuestro servicio de Cloudant y los datos requeridos, regresamos a nuestro dashboard de IBM Cloud y damos clic en el nombre que le asignamos al servicio.
![](assets/32.png)<br/> 

Damos clic en la pestaña “credenciales de servicio” que se encuentra del lado izquierdo y damos clic en “nueva credencial”.
![](assets/33.png)<br/> 

En la siguiente ventana, seleccionamos “Auto-generated service credentials” y damos clic en “Añadir”.
![](assets/34.png)<br/> 

Damos clic en credenciales del servicio.
![](assets/35.png)<br/> 

De los siguientes datos solo copiamos los que se muestran en la siguiente imagen.
![](assets/36.png)<br/> 

Regresamos a la ventana de "functions” e ingresamos los valores indicados en el paso anterior, el nombre de la base de datos y damos clic en “Add”.
![](assets/37.png)<br/> 

Posteriormente damos clic en “save”.
![](assets/38.png)<br/> 

Damos clic en “Invoke” y observamos que nos trae los datos desde nuestra base de datos.
<!-- ![](assets/39.png)<br/>  -->

# Creación de Watson Assistant
Regresamos a la ventana principal de IBM Cloud y en la barra de búsqueda buscamos el servicio de “Watson Assistant” y damos clic en el icono del servicio.
![](assets/40.png)<br/> 

Seleccionamos el plan lite y damos clic en “Crear”
![](assets/41.png)<br/> 

En la siguiente ventana damos clic en “Iniciar Watson Assistant”
![](assets/42.png)<br/> 

Ahora en la nueva ventana damos clic en el ícono de lado izquierdo y luego en “Create assistant”
![](assets/43.png)<br/> 

Le asignamos el nombre que queramos y damos clic en “create assistant”
![](assets/44.png)<br/> 

En la siguiente ventana damos clic en “Add dialog skill”
![](assets/45.png)<br/> 

En la siguiente ventana nos vamos a la pestaña de “Create skill”, asignamos un nombre, seleccionamos el idioma en el que entrenaremos a nuestro modelo (“Spanish”) y damos clic en “Create dialog skill”
![](assets/46.png)<br/> 

Damos clic en nuestro dialog skill para poder entrenarlo.
![](assets/47.png)<br/> 

Damos clic en la pestaña de “Entities” 
![](assets/48.png)<br/> 

Creamos una variable llamada “tour” la cual va a tener los distintos destinos con los que cuenta nuestra base de datos.
![](assets/49.png)<br/> 

Posteriormente creamos un valor por cada uno de nuestros destinos de la base de datos y es importante que estén escritos de la misma manera.
<!-- ![](assets/50.png)<br/>  -->

Regresamos a la ventana de “functions” y damos clic en nuestra cuenta.
![](assets/51.png)<br/> 

Entramos a nuestra secuencia “Consulta de proveedores” y damos clic en el icono de “Web Action”.
!<!-- [](assets/52.png)<br/>  -->

Marcamos la casilla de “Enable as Web Action” y damos clic en “Save”
![](assets/53.png)<br/> 

Copiamos la url marcada en la imagen y regresamos a la ventana de Watson Assitant.
![](assets/54.png)<br/> 

En la ventana de Watson Assistant, damos clic en la pestaña de “Options” y en el apartado de “Webhooks” pegamos la URL del paso anterior y al final añadimos “?blocking=true”
![](assets/55.png)<br/> 

Regresamos a la ventana de “Functions” y damos clic en “Valores de espacio de nombres” y copiamos el “username” y el “password”  como se muestra en la imagen.
![](assets/56.png)<br/> 

Regresamos a la ventana de Watson Assitant y damos clic en “Add authorization”.
![](assets/57.png)<br/> 

Agregamos el nombre y la contraseña que copiamos en el nombre anterior
![](assets/58.png)<br/> 

Vamos a la pestaña de Actions y damos clic en “New action” 
![](assets/59.png)<br/> 

Le asignamos el nombre “Cotizar” y al menos 5 formas en la que le pedirías a tu asistente virtual que haga la cotización de un viaje.
![](assets/60.png)<br/> 

Damos clic en el engrane que se encuentra en la parte superior derecha de nuestra “Action”, activamos los “Slots”, en los “Webhooks” y damos clic en “Aplicar”.
![](assets/61.png)<br/> 

Definimos las variables que le darán contexto a nuestro asistente si es que reconoce que le preguntan por la variable “tour” que definimos anteriormente y definimos que le preguntará al usuario cuál es el destino al que desea viajar con la frase “Dame el destino”. 
![](assets/62.png)<br/> 

Después definimos que la llamada al webhook que busque “key” de “tour” en nuestra base de datos. 
![](assets/63.png)<br/> 

Por último, definimos la respuesta que le dará nuestro asistente virtual al usuario sobre la cotización que desea realizar. (El precio por adulto es de <?$webhook_result_1.response.result.rows[0].doc["Precio público Adulto"]?> <br> El precio por menor es de <?$webhook_result_1.response.result.rows[0].doc["Precio público Menor"]?>)
![](assets/64.png)<br/> 

Probamos nuestro Asistente Virtual
<!-- ![](assets/65.png)<br/>  -->

# Conexión con Voice Agent
Ve a la ventana principal de IBM Cloud, escribe en la barra de búsqueda “Voice Agent” y da clic en el servicio
![](assets/66.png)<br/> 

Asigna un nombre, selecciona el plan lite y da clic en “crear”
![](assets/67.png)<br/> 

Accede a [**Twillo**] (https://www.twilio.com/try-twilio) y crea tu cuenta o inicia sesión
![](assets/68.png)<br/> 
**NOTA: Recuerda que debes verificar tu cuenta con tu correo electrónico y un número de teléfono válido

En la ventana principal de Twilio, da clic en los 3 puntos que aparecen en la esquina superior izquierda
![](assets/69.png)<br/> 

En la ventana que aparece da clic en la pestaña que se muestra en la imagen
![](assets/70.png)<br/> 

Da clic en “get started”
![](assets/71.png)<br/> 

Posteriormente da clic en “Create a SIP Trunk”
![](assets/72.png)<br/> 

Asigna el nombre de “Voice Agent” y da clic en “Create”
![](assets/73.png)<br/> 

Regresamos a la ventana de Voice Agent en IBM Cloud y damos clic en la pestaña de “Iniciación” y copiamos el Endpoint que se muestra en la siguiente imagen.
![](assets/74.png)<br/> 

Regresamos a Twilio y en la pestaña de “Origination” damos clic en “Add NEW Origination URL” 
![](assets/75.png)<br/> 

En la siguiente ventana pegamos el valor que copiamos anteriormente y damos clic en “Add”
![](assets/76.png)<br/> 

Damos clic en la pestaña de los tres puntitos y vamos a “# phone numbers”
![](assets/77.png)<br/> 

Damos clic en “Get Started”
![](assets/78.png)<br/> 

Damos clic en “Get your first Twilio phone number”
![](assets/79.png)<br/> 

Damos clic en “Choose this number”
![](assets/80.png)<br/> 

Clic en “Done”
![](assets/81.png)<br/> 

Regresamos a la pestaña “Managed numbers” y damos clic en el número que se generó anteriormente.
![](assets/82.png)<br/> 

En la siguiente ventana nos desplazamos hacía abajo y en la sección de “Configure With” seleccionamos “SIP Trunk”
![](assets/83.png)<br/> 

Posteriormente seleccionamos “Voice agent” en la sección de SIP Trunk y damos clic en “Save”
![](assets/84.png)<br/> 

Regresamos al servicio que creamos en IBM Cloud de Voice Agent y en la pestaña de “Gestionar” dentro de nuestro servicio, damos clic en “Crear un agente”.
![](assets/85.png)<br/> 

Regresamos a la ventana de Twilio y copiamos el número que se nos asigno anteriormente.
![](assets/86.png)<br/> 

En la ventana que se nos abrirá en IBM Cloud, asignamos el nombre de “Voice Agent” y pegamos el numero que obtuvimos de Twilio. Además, checamos que se ligue con nuestro servicio de Watson Assistant y la skill que entrenamos en la sección 3 y damos clic en “Crear un agente”
![](assets/87.png)<br/> 

Por último, llama desde tu celular al número asignado por Twilio y prueba tu Asistente Virtual.
![](assets/88.png)<br/> 
