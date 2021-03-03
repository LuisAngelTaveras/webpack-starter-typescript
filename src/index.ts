import db from './firebase/config';
import {retornaDocumentos} from './helpers/mostrar-documentos';
const usuario = {
    nombre:'Sintia',
    activo:false,
    fechanac: 0,
    salario: 6000
}


const usuarioRef = db.collection('usuario');

usuarioRef.orderBy('nombre')
.orderBy('salario')
    .get().then(retornaDocumentos)

