const multer = require('multer');
const fse = require('fs-extra');
const slugify = require('slugify');

const path = 'candidato/'

async function createDir(nome) {
    fse.ensureDirSync(path + nome, err => console.log);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var nome = slugify(req.body.nome, {
            replacement: '-',
            lower: true
        });
        console.log('criando pasta candidato')
        createDir(nome);
        cb(null, path + nome);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const uploads = multer({ storage: storage });

module.exports = uploads;