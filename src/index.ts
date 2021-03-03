import db from './firebase/config';
import {retornaDocumentos} from './helpers/mostrar-documentos';


const usuarioRef = db.collection('usuario');


const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext)



let fistDocument: any = null;
let lastDocument: any = null;
btnNext.addEventListener('click', () => {

const query = usuarioRef
             .orderBy('nombre')
            .startAfter(lastDocument)


  query.limit(2).get().then( snap => {

    fistDocument = snap.docs [0] || null;
    lastDocument = snap.docs [snap.docs.length - 1] || null;
    retornaDocumentos(snap);

  })

});

btnNext.click();

// btn Preview

const btnPreview = document.createElement('button');
btnPreview.innerText = 'Preview Page';
document.body.append(btnPreview)


btnPreview.addEventListener('click', () => {

const query = usuarioRef
             .orderBy('nombre')
            .endBefore(fistDocument)


  query.limit(2).get().then( snap => {
    
    fistDocument = snap.docs [0] || null;
    lastDocument = snap.docs [snap.docs.length - 1] || null;
    retornaDocumentos(snap);

  })

});

















