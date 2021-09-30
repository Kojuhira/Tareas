import jquery=require('jquery');
const $:JQueryStatic=jquery;
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
   
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })


    let formulario:any=document.getElementById("formulario");
    const nombreCompleto:any=document.getElementById('nombre');
    const rutPersona:any=document.getElementById('rut');
    const correoElectronico:any=document.getElementById('correo');
    const telefonoMovil:any=document.getElementById('telefono');
    const comentarioEscuela:any=document.getElementById('comentarios');

//telerestriccion
    function teleMax(telefono:any) {
        let event:any;
        if (telefono.value === '' || telefono.value.length != 9) {
            window.alert("Formato incorrecto");
            if (event.preventDefault()) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        }
    }
    //checkboxes
    let listaLenguajesInteres:any=document.getElementById("lenguajesInteres");
    formulario.addEventListener("submit", function(event:any){
        let i=0;
        let e:any;
        let unCheck = false;
        while(i<listaLenguajesInteres.length){
        if(listaLenguajesInteres[i].tagName === 'INPUT' && listaLenguajesInteres[i].type === 'checkbox'){
            if (listaLenguajesInteres[i].checked){
                unCheck= true;
            }
        }
        i++;
        }
        if(!unCheck){
        window.alert("Selecciona al menos un checkbox");
        if(e.preventDefault()){
            e.preventDefault();
        } else {
            e.returnDefault = false;
        }
        }
    } ,false);

  //Mensaje final
    formulario.addEventListener("submit", function(event:any){
        if(nombreCompleto.value ==='' || rutPersona.value==='' || correoElectronico.value==='' || telefonoMovil==='' || comentarioEscuela===''){
            window.alert("Ingreso Incompleto")
        }else{
        let mensaje:any=document.getElementById("mensaje");
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="Sus datos han sido enviados correctamente, muchas gracias por completar el formulario";
        mensaje.style.color="black";

        event.preventDefault();
        }
    });
;


