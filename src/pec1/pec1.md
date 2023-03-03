# Respuestas a las preguntas teóricas / Respostes a les preguntes teòriques


## Ejercicio T1 / Exercici T1

La siguiente imagen muestra un escenario de desarrollo colaborativo en GitHub:

![ej1](/public/ej1.png)

El repositorio en GitHub tiene los ficheros indicados en la imagen (parte central), que cada desarrollador tiene en su ordenador después de haberlo clonado (cada una de las cajas representa a un desarrollador). Además, cada desarrollador ha editado el fichero indicado en negrita.

Responde y razona las siguientes preguntas (máximo 300 palabras):

> (2p) Indica los comandos que debería realizar cada desarrollador para sincronizar sus cambios con el repositorio en GitHub.

En primer lugar los usuarios deberán haber clonado el repositorio en su máquina local con el comando `clone` de la siguiente forma: 

```console
usuario@maquina:~$ git clone https://github.com/usuario/repo.git    
````
Una vez clonado el repositorio en su máquina local los usuarios podrán modificar los ficheros y, una vez modificados, si quieren añadirlos a la zona de *stage* deberán utilizar el comando `add` para añadir un fichero determinado: 

```console
usuario@maquina:~$ git add <nombreFichero>
````

Si se desea añadir todos los ficheros modificados de un directorio se hará añadiendo un . al comando anterior de la siguiente forma: 

```console
usuario@maquina:~$ git add .
```
Los ficheros modificados pueden verse con el siguiente comando:

```console
usuario@maquina:~$ git status
```

Una vez añadidos los cambios a la zona de *stage* deberá realizar un `commit` para añadir los cambios a la zona de *head* con el siguiente comando: 

```console
usuario@maquina:~$ git commit -m "Cambios realizados"
````

Con el argumento -m se añade un mensaje al `commit` realizado.

Los cambios todavía se encuentran en local, por lo que el último paso a realizar sería incluir estos cambios en un repositorio remoto con el comando `push` de la siguiente forma: 

```console
usuario@maquina:~$ git push origin master
````

>(1p) ¿Puede darse alguna situación de conflicto en este escenario? 

Si el desarrollador DEV2 intenta editar el código que el desarrollador DEV3 está editando, puede producir un conflicto. Para disminuir la aparición de conflictos, los desarrolladores trabajarán en ramas separadas y aisladas . El comando *git merge* tiene como responsabilidad principal combinar ramas separadas y resolver cualquier edición en conflicto.


## Ejercicio T2 / Exercici T2

La siguiente figura muestra el estado de un repositorio con ramas:

![ej2](/public/ej2.png)

Un desarrollador está trabajando en la rama `feature/extra`. En el instante _t_ sus compañeros le notifican que debe alinear su rama con la principal. 

Responde y razona la siguiente pregunta (máximo 300 palabras):

>(1p) ¿Qué commits están considerados en la rama `feature/extra`? ¿Qué commits están considerados en la rama `main`?

En la rama `feature/extra` en el instante t estarán considerados los *commits* c5, c6 y c7. 
En la rama main estarán considerados los *commits* c1, c2 y c3.

>(2p) Describe con tus propias palabras qué debería hacer el desarrollador para realizar la tarea que le han pedido. Debes indicar los comandos que debería ejecutar y el estado de la rama `feature/extra` después de realizar la tarea.

Tal y como se describe el problema, existen dos ramas: la principal `main` y la secundaria `feature/extra`. 
La rama secundaria ha sido creada de la siguiente forma: 

```console
usuario@maquina:~$ git checkout -b feature/extra main
``` 

Una vez creada esa rama, podrán modificarse los archivos necesarios para implementar dicha funcionalidad extra, tal como: 

```console
# Editar ficheros y añadirlos
git add <fichero>
git commit -m "Nueva funcionalidad"
# Editar otros ficheros y añadirlos
git add <fichero>
git commit -m "Otra funcionalidad"
```

Para finalizar, realizados los cambios en la nueva funcionalidad del proyecto, el usuario deberá cambiar a la rama principal con el comando `checkout` y posteriormente unificar las ramas con el comando `merge` unificar las ramas de la siguiente forma: 

```console
git checkout main
git merge featura/extra
git branch -d feature/extra
````

## Ejercicio T3 / Exercici T3

La siguiente captura de pantalla muestra un repositorio de un proyecto web:

![ej3](/public/ej3.png)

>(0.5p) Este repositorio tiene un problema, ¿cuál es? ¿qué deberían haber hecho los desarrolladores para evitarlo?

En mi opinión la carpeta `node_modules` y el fichero `package-lock.json` no deberían haberse subido al repositorio.
Para evitar esto, deberían incluirse en el fichero .gitignore.

La carpeta node_modules incluye todas las dependencias del proyecto y es demasiado pesada para ser subida al repositorio. 
Cuando clonamos un repositorio la instalación de estas dependencias se realiza en la carpeta `node_modules` con `npm install`, que realiza la instalación en base a la especificación del fichero `package.json`.

>(0.5p) ¿Qué otras comprobaciones deberían tenerse en cuenta antes de enviar el código a GitHub?

Debería comprobarse la visibilidad de los proyectos, verificar el estado de los proyectos en local con el comando `git status` y comprobar el fichero .gitignore.

## Ejercicio T4 / Exercici T4

>Describe los pasos que seguirías para hacer una aportación basada en el desarrollo basado en pull requests.

Para poder realizar aportaciones a un proyecto existente, deberá, en primer lugar crearse una bifucarción del proyecto con el comando `fork`.
Por defecto la bifurcación se realiza sobre la rama principal de dicho proyecto en la web de Github.

Una vez realizada la bifurcación, se clona el proyecto con el comando `clone`

Tras realizar las modificaciones que se desee aportar al proyecto, deberán añadirse los cambios y subirlos con los comandos `add`, `commit` y `push`.

Por último, deberá marcarse la opción *Contribute* en el proyecto y posteriormente abrir una incorporación de cambios con *Create pull request*. 
Allí se añaden el título y la descripción de la aportación realizada y el autor/a principal del proyecto determinará si los cambios son útiles para fusionarlos con el proyecto principal.