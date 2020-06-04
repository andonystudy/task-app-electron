# Desktop App with Electron
> Aplicación de Escritorio de tareas creado con ElectronJS. Descargar ejecutable [click aquí](https://drive.google.com/file/d/1lfj136G65RdhyPEx2fSYlAuYWVZcf1cE/view).
### Estructura inicial del proyecto
```
├─ src
│  ├─ app
│  │   ├─ css
│  │   │  ├─ normalize.css
│  │   │  └─ style.css
│  │   ├─ img
│  │   │  ├─ checked.png
│  │   │  ├─ pencil.png
│  │   │  ├─ trash.png
│  │   │  └─ unchecked.png
│  │   ├─ js
│  │   │  └─ app.js
│  │   └─ index.html
│  └─ index.js
├─ gitignore
├─ package-lock.json
└─ package.json
```
## Pasos para ejecutar proyecto
### Clonamos el proyecto
```git
git clone https://github.com/aimarandony/task-app-electron.git
```
### Descargamos las dependencias
```npm
npm install
```
### Ejecutamos el proyecto
```npm
npm start
```
## Crear ejecutable
### Instalamos electron-builder 
```npm
npm install -g electron-builder --save-dev
```
### Agregamos las siguiente carpetas al proyecto
```json
dist - build
```
### La esctrutura del proyecto estaría quedando de esta manera
```
├─ build
├─ dist
├─ node_modules
├─ src
│  ├─ app
│  │   ├─ css
│  │   │  ├─ normalize.css
│  │   │  └─ style.css
│  │   ├─ img
│  │   │  ├─ checked.png
│  │   │  ├─ pencil.png
│  │   │  ├─ trash.png
│  │   │  └─ unchecked.png
│  │   ├─ js
│  │   │  └─ app.js
│  │   └─ index.html
│  └─ index.js
├─ gitignore
├─ package-lock.json
└─ package.json
```
### Agregamos un icono
> Dentro de la carpeta `build`, agregamos el icono de nuestra app con el nombre `favicon.ico`, recordar que la imagen debe ser de tipo `.ico` y de un tamaño mínimo de `256 x 256`. Si deseas puedes usar el icono usado para este proyecto, [click aquí](https://drive.google.com/file/d/1ChEiKvFKDtodLXbqV8MYJOA_Y2PlZV22/view?usp=sharing).
### Agregamos lo siguiente en nuestro archivo package.json
```json
{
  "name": "task-aa",
  "version": "1.0.0",
  "description": "App Desktop of Tasks from Electron",
  "main": "src/index.js",
  "scripts": {
    "start": "electron .",    
    "pack": "electron-builder --dir",
    "dist": "electron-builder"
  },
  "author": "Andony",
  "license": "ISC",
  "build": {
    "appId": "enupal-electronv1",
    "asar": true,
    "dmg": {
      "contents": [
        {
          "x": 110,
          "y": 150
        },
        {
          "x": 240,
          "y": 150,
          "type": "link",
          "path": "/Applications"
        }
      ]
    },
    "linux": {
      "target": [
        "AppImage",
        "deb"
      ]
    },
    "win": {
      "target": "NSIS",
      "icon": "build/favicon.ico"
    }
  },
  "devDependencies": {
    "electron": "^9.0.2",
    "electron-build": "0.0.3"
  }
}

```
### Ahora ejecutamos el comando para el build del proyecto
```npm
npm run dist
```
> Y listo, nuestra app de escritorio estará creada, ahora solo queda dirigirse a la carpeta `dist` de nuestro proyecto y ejecutar el archivo `.exe`.
