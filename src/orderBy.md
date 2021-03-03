


const usuarioRef = db.collection('usuario');

usuarioRef
.orderBy('nombre')
.orderBy('salario')
.get().then(retornaDocumentos)