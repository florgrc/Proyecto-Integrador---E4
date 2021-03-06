window.addEventListener('load', function () {

    let form = document.querySelector(".form-style");
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    // let avatar = document.querySelector("#file-upload");
    let password = document.querySelector("#password");
    let repassword = document.querySelector("#repassword");
    let button = document.querySelector("#buttonRegister");

    let firstNameError = document.querySelector("#firstNameError");
    let lastNameError = document.querySelector("#lastNameError");
    let emailError = document.querySelector("#emailError");
    let passwordError = document.querySelector("#passwordError");
    let repasswordError = document.querySelector("#repasswordError");

    // Poner en escucha al formulario para detectar cuando el usuario quiere enviar el formulario.
    form.addEventListener('change', function (event) {

        // Prevenir el comportamiento por default.
        event.preventDefault();
        //Crear un array vacío para poder almacenar los errores.
        let errores = [];
        // El campo no puede estar vacio y debe tener al menos dos caracteres.  En caso de cumplirse la condición, agregar el error a nuestro array de  errores, que creamos previamente.

        // Firstname
        if (validator.isEmpty(firstname.value)) {
            errores.push("El campo no puede estar vacio");
            firstNameError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';

        } else if (firstname.value.length < 2) {
            errores.push("El campo debe contener por lo menos dos caracteres");
            firstNameError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
        } else {
            firstNameError.innerText = 'Genial!';
            firstNameError.style.color = "Green";
            firstNameError.style.fontWeight = "900";
        }

        // Lastname
        if (validator.isEmpty(lastname.value)) {
            errores.push("El campo no puede estar vacio");
            lastNameError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';

        } else if (lastname.value.length < 2) {
            errores.push("El campo debe contener por lo menos dos caracteres");
            lastNameError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
        } else {
            lastNameError.innerText = 'Que lindo apellido. Qué origen tiene?';
            lastNameError.style.color = "Green";
            lastNameError.style.fontWeight = "900";
        }

        // Email
        if (!validator.isEmail(email.value) || validator.isEmpty(email.value)) {
            errores.push("Este campo debe estar completo con un email válido");
            // OPCIONAL: Falta verificar que no sea un mail repetido 
            emailError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
        } else {
            emailError.innerText = 'Ok! Dale que falta menos';
            emailError.style.color = "Green";
            emailError.style.fontWeight = "900";
        }

        //Password
        if (validator.isEmpty(password.value)) {
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
            passwordError.style.color = "Green";
            passwordError.style.fontWeight = "900";
        }
        //Re-Password
        if (validator.isEmpty(repassword.value)) {
            errores.push("Este campo no puede estar vacío");
            repasswordError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
        } else if (password.value != repassword.value) {
            errores.push("Debe coincidir con la contraseña");
            repasswordError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
        } else {
            repasswordError.innerText = 'Coninciden! Te acordaste de guardarla!';
            repasswordError.style.color = "Green";
            repasswordError.style.fontWeight = "900";
        }
        // Si el largo de nuestra variable de errores no contiene errores, enviamos el formulario  

        if (!errores.length >= 1) {
            form.addEventListener('submit', function () {
                swal("Buen trabajo!", "Ya estas registrado!", "success");
                form.submit();
            })
        }

    });
})