   function traerEstudiantes(){}
   

   fetch("htm5.json")
   
.then(respuesta => respuesta.json())
.then(datosEst =>{
    console.log("dataEst", datosEst);
    mostrarEstudiantes(datosEst);
}).catch(error =>{
    console.log("Error", error.message);
});

