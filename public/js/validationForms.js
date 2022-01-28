let formCreate = qs('.createForm')
const regexImageFormat = /\.(jpg|gif|png|jpeg)$/i

/*creacion de producto*/

formCreate.addEventListener('change', function (e) {
  e.preventDefault();

  let errores = [];

  if (formCreate.name.value == '') {
    errores.push("Este campo debe estar completo");
    nameError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
  } else if (formCreate.name.value.length < 5) {
    swal('El nombre debe tener al menos 5 caracteres')
  } else if (formCreate.price.value == '') {
    swal('Debes cargar un precio')
  } else if (formCreate.productImage.value == '') {
    swal('Debes cargar una imagen de Producto')
  } else if (!(regexImageFormat.test(formCreate.productImage.value))) {
    swal('El formato de imagen debe ser ".jpg", ".png", ".gif",".jpeg"')
  } else if (formCreate.description.value == '') {
    errores.push("Este campo debe estar completo");
    descrptionError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
  } else if (formCreate.description.value.length < 20) {
    swal('La descripcion debe tener al menos 20 caracteres')
  };
  if (!errores.length >= 1) {
    formCreate.addEventListener('submit', function () {

      console.log('Se envio el formulario');
      swal("¡ PRODUCTO CREADO !");

      formCreate.submit();
    })
  }
});