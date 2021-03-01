import db from './firebase/config';

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

usuarioRef
.doc('BdS7f346XkMsGPVWFJbc')
.set({
   activo: true,
   edad: 15,
   id: 566,
})



