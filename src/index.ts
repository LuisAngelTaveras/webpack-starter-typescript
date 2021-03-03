import db from './firebase/config';
import {retornaDocumentos} from './helpers/mostrar-documentos';
const usuario = {
    nombre:'Marbelis',
    activo:true,
    fechanac: 0
}

const usuarioRef = db.collection('usuario');

// insert into usuarios ....

// db.collection('usuario')
// .add(usuario)

//update

//usuarioRef
// .doc('BdS7f346XkMsGPVWFJbc')
// .update({
 //  activo: true
//})

//destructivo
// usuarioRef
 // .doc('BdS7f346XkMsGPVWFJbc')
// .set({
 //  activo: true,
  // edad: 15,
  // id: 566,
// })


//delete

// usuarioRef
// .doc('ko1PSYaoQVXSoIxpHUMW')
// .delete()
//.then( () => console.log('borrado') )
// .catch(e => console.log('error', e) );

// select * from usuario;
//usuarioRef
//.onSnapshot(retornaDocumentos)

usuarioRef.where('salario','>=',1500)

.where('activo', '==',true)

.get().then(retornaDocumentos);






