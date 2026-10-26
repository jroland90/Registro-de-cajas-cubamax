// Arma la carpeta www/ con la app y todo el OCR incluido (funciona sin internet).
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const www = path.join(root, 'www');
const nm = p => path.join(root, 'node_modules', p);

function copy(from, to) {
  if (!fs.existsSync(from)) throw new Error('No se encontro: ' + from);
  fs.copyFileSync(from, to);
  console.log('  +', path.relative(root, to), Math.round(fs.statSync(to).size / 1024) + ' KB');
}

fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, 'ocr', 'core'), { recursive: true });
fs.mkdirSync(path.join(www, 'ocr', 'lang'), { recursive: true });

copy(path.join(root, 'src', 'index.html'), path.join(www, 'index.html'));
copy(nm('tesseract.js/dist/tesseract.min.js'), path.join(www, 'ocr', 'tesseract.min.js'));
copy(nm('tesseract.js/dist/worker.min.js'), path.join(www, 'ocr', 'worker.min.js'));

// Motores del OCR (se elige el correcto segun el telefono)
const coreDir = nm('tesseract.js-core');
const cores = fs.readdirSync(coreDir).filter(f => /^tesseract-core.*\.(js|wasm)$/.test(f));
if (!cores.length) throw new Error('No se encontraron archivos tesseract-core*');
cores.forEach(f => copy(path.join(coreDir, f), path.join(www, 'ocr', 'core', f)));

// Datos de idioma (ingles: suficiente para letras y numeros de la etiqueta)
const langBase = nm('@tesseract.js-data/eng');
const langDir = ['4.0.0_best_int', '4.0.0_fast', '4.0.0']
  .map(d => path.join(langBase, d))
  .find(d => fs.existsSync(path.join(d, 'eng.traineddata.gz')));
if (!langDir) throw new Error('No se encontro eng.traineddata.gz');
copy(path.join(langDir, 'eng.traineddata.gz'), path.join(www, 'ocr', 'lang', 'eng.traineddata.gz'));

// Lector de codigo de barras (opcional: si falta, se usa solo el OCR)
const zx = ['umd/index.min.js', 'umd/index.js']
  .map(p => nm('@zxing/library/' + p))
  .find(p => fs.existsSync(p));
if (zx) copy(zx, path.join(www, 'ocr', 'zxing.min.js'));
else console.warn('  ! ZXing no encontrado; se usara solo OCR para el codigo');

console.log('Listo: www/ preparado');
