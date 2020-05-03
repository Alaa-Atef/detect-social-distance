const {execFile} = require('child_process');
const open = require('open')
const config = require('../config');
const path =require('path')
const chooseFileBtn = document.querySelector('.choose-file');


chooseFileBtn.addEventListener('click', callJupyterCell);

async function callJupyterCell(e) {
<<<<<<< HEAD
    /** First Approach */
    /*
    const response = await fetch(`${config.jupyterURL}/${config.jupyterRoute}?${config.jupyterQuery}=true`);
    console.log({response})
    if(response.status !== 200) {
        alert('Check the JupyterURL link, the jupyter kernel gateway is running')
    } */
    execFile('../backend/webcam.pyc',['--version'],(error,stdout)=>{
        if(error) throw error;
    })
    
=======
   try {
    await open(path.join(__dirname ,'..' ,'..', 'backend\\', 'webcam.pyc'),{wait:true})
   }catch(e) {
       console.error(e)
   }

>>>>>>> origin
}