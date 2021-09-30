define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    });
    var formulario = document.getElementById("formulario");
    var nombreCompleto = document.getElementById('nombre');
    var rutPersona = document.getElementById('rut');
    var correoElectronico = document.getElementById('correo');
    var telefonoMovil = document.getElementById('telefono');
    var comentarioEscuela = document.getElementById('comentarios');
    //telerestriccion
    function teleMax(telefono) {
        var event;
        if (telefono.value === '' || telefono.value.length != 9) {
            window.alert("Formato incorrecto");
            if (event.preventDefault()) {
                event.preventDefault();
            }
            else {
                event.returnValue = false;
            }
        }
    }
    //checkboxes
    var listaLenguajesInteres = document.getElementById("lenguajesInteres");
    formulario.addEventListener("submit", function (event) {
        var i = 0;
        var e;
        var unCheck = false;
        while (i < listaLenguajesInteres.length) {
            if (listaLenguajesInteres[i].tagName === 'INPUT' && listaLenguajesInteres[i].type === 'checkbox') {
                if (listaLenguajesInteres[i].checked) {
                    unCheck = true;
                }
            }
            i++;
        }
        if (!unCheck) {
            window.alert("Selecciona al menos un checkbox");
            if (e.preventDefault()) {
                e.preventDefault();
            }
            else {
                e.returnDefault = false;
            }
        }
    }, false);
    //Mensaje final
    formulario.addEventListener("submit", function (event) {
        if (nombreCompleto.value === '' || rutPersona.value === '' || correoElectronico.value === '' || telefonoMovil === '' || comentarioEscuela === '') {
            window.alert("Ingreso Incompleto");
        }
        else {
            var mensaje = document.getElementById("mensaje");
            formulario.style.display = "none";
            mensaje.style.display = "block";
            mensaje.innerHTML = "Sus datos han sido enviados correctamente, muchas gracias por completar el formulario";
            mensaje.style.color = "black";
            event.preventDefault();
        }
    });
    ;
});
