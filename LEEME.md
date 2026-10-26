# Registro de Cajas — cómo obtener el APK

Este proyecto genera la app para Android. Funciona **sin internet**, incluida la lectura
del código y del nombre del destinatario desde la foto. Los datos se guardan en el teléfono.

El APK se compila gratis en GitHub (no necesitas instalar nada en tu computadora).

## Paso 1: crear el repositorio
1. Entra a https://github.com y crea una cuenta (o inicia sesión).
2. Arriba a la derecha toca **+ → New repository**. Nombre: `registro-cajas`. Déjalo **Private**. Toca **Create repository**.

## Paso 2: subir los archivos
Descomprime este ZIP. En la página del repositorio toca **uploading an existing file**
y arrastra **todo el contenido** de la carpeta `registro-cajas` (incluida la carpeta oculta `.github`).
Toca **Commit changes**.

> Si la carpeta `.github` no se sube (por ser oculta): toca **Add file → Create new file**,
> escribe el nombre `.github/workflows/build-apk.yml`, pega el contenido de ese archivo y haz Commit.

## Paso 3: compilar
1. Entra a la pestaña **Actions**. Si pide habilitarlas, acepta.
2. Elige **Compilar APK → Run workflow**. (Si subiste los archivos a la rama principal, ya empieza solo.)
3. Espera unos 5–10 minutos hasta que aparezca la marca verde ✔.

## Paso 4: descargar el APK
1. Abre la ejecución terminada y baja hasta **Artifacts**.
2. Descarga **RegistroCajas-APK** (es un ZIP que contiene `app-debug.apk`).
3. Pásale `app-debug.apk` a tu papá por WhatsApp, Telegram o cable.

## Paso 5: instalar en el teléfono
1. Toca el archivo `app-debug.apk`.
2. Si Android lo pide, permite **instalar apps de esta fuente** y vuelve a tocar el archivo.
3. Al abrir la app por primera vez, acepta el permiso de **cámara**.

## Uso
- **Tomar foto** o **Elegir de la galería**: la app rellena el número (ej. `CMT261590053`) y el destinatario. Siempre se pueden corregir antes de **Guardar**.
- La **fecha y hora** de la foto se guarda sola.
- **Exportar a Excel / CSV**: abre el menú de compartir; se puede enviar por WhatsApp o correo, o guardarlo en el teléfono. Se abre en Excel o Google Sheets.

## Importante
- Si se **desinstala** la app o se borran sus datos, se pierden los registros. Conviene **exportar** de vez en cuando.
- La lectura automática puede fallar con fotos borrosas o con poca luz; en ese caso se escribe a mano.
- Es un APK de prueba (firmado con clave de depuración): sirve perfectamente para uso personal.
