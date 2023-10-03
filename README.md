# Prueba para desarrollador Frontend Mobile – Stratesys

## Pre-requisitos
```
- [Node.js](https://nodejs.org/es) v18.17.*
- [Expo CLI](https://docs.expo.dev/)
- Android Studio
- Xcode
``````

## Instalación de Fake API
Instatalar 
```npm i json-servero``` 
o 
```yarn add json-server```

Inicia el ervidor con el siguiente comando  en la terminal dentro de la carpeta principal:

```json-server --watch db.json```

Nota: de ser necesario copie su IP local, vaya al archivo `endpoint.ts` que se encuentra en la ruta: `src/services/endpoint.ts` y reemplazar el valor de la constante 

```const serverUrl = "http://<tu-ip>:3000" cambie ´localhost´por su IP privada.```

## Instruccion de ejecución del proyecto React Native usando Expo

### 1. Clonar el repositorio

`git clone https://github.com/Evercastro1003/testStratesys`


### 2. Instalar dependencias

```npm install```
o

```yarn install```

### 3. Ejecutar el proyecto

```npx expo start```


### 4. Abrir el proyecto para ejecutar en emulador de Android o IOS presionando las teclas indicadas en la terminal
```
› Press a │ open Android
› Press i │ open iOS simulator
```

## Pruebas unitarias

### 1. Ejecutar pruebas unitarias

``pm run test or yarn test``


## Capturas de pantalla de la aplicación en ejecución en IOS

### 1. Pantalla de inicio IOS
![Pantalla de inicio IOS][<img src="/assets/screenshots/ios-homescreen.png" width="280"/>](image.png)

### 2. Pantalla de detalles IOS
![Pantalla de detalles IOS][<img src="/assets/screenshots/ios-detailscreen.png" width="280"/>]

## Capturas de pantalla de la aplicación en ejecución en Android

### 1. Pantalla de inicio Android
![Pantalla de inicio Android][<img src="/assets/screenshots/android-homescreen.png" width="280"/>](image.png)

### 2. Pantalla de detalles Android
![Pantalla de detalles Android][<img src="/assets/screenshots/android-detailscreen.png" width="280"/>]