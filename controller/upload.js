const multer = require('multer');
const fse = require('fs-extra');
const slugify = require('slugify');

const path = 'public/images/'

function createDir (nome){
    fse.ensureDir(path+nome, err => console.log);
}

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        var nome = slugify(req.body.produto, {
            replacement: '-',
            lower: true
        })
        createDir(nome);
        cb(null, path+nome);
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
})

const uploads = multer({storage:storage});

module.exports = uploads;