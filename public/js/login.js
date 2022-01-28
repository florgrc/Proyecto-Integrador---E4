window.addEventListener('load', function () {

    let form = document.querySelector(".form-style");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let button = document.querySelector("#buttonRegister");
    let emailError = document.querySelector("#emailError");
    let passwordError = document.querySelector("#passwordError");


    console.log(form);
    console.log(email);
    console.log(password);
    console.log(button);
    console.log(emailError);
    console.log(passwordError);

    // Poner en escucha al formulario para detectar cuando el usuario quiere enviar el formulario.
    form.addEventListener('change', function (event) {

        // Prevenir el comportamiento por default.
        event.preventDefault();
        //Crear un array vacío para poder almacenar los errores.
        let errores = [];
        // El campo no puede estar vacio y debe tener al menos dos caracteres.  En caso de cumplirse la condición, agregar el error a nuestro array de  errores, que creamos previamente.

        // Email
        if (!validator.isEmail(email.value) || validator.isEmpty(email.value)) {
            console.log('El isEmail es verdadero ' + email.value)
            console.log('El isEmail esta vaci? ' + validator.isEmpty(email.value));
            errores.push("Este campo debe estar completo con un email válido");
            // OPCIONAL: Falta verificar que no sea un mail repetido 
            emailError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
        } else {
            emailError.innerText = 'Ok! Dale que falta menos';
        }

        //Password
        if (validator.isEmpty(password.value)) {
            console.log("password está vacio? " + validator.isEmpty(password.value))
            errores.push("Este campo no puede estar vacío");
            passwordError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
            // OPCIONAL :  → Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.

        } else if (!validator.isStrongPassword(password.value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            })) {
            errores.push("Requerido: 8 caracteres | 1 Mayuscula | 1 Minuscula | Un número | Un carácter especial");
            passwordError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
        } else {
            passwordError.innerText = 'Pass nivel HULK!! Guardala en un lugar seguro';
        }

        // Si el largo de nuestra variable de errores no contiene errores, enviamos el formulario  

        if (!errores.length >= 1) {
            console.log("entró en el if");
            form.addEventListener('submit', function () {

                console.log("se envió el form");
                swal("Login ok", "Login!", "success");
                form.submit();
            })
        }

    });
})