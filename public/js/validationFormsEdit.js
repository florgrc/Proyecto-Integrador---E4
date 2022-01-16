let formEdit = qs('.editForm')
const regexImageFormat = /\.(jpg|gif|png|jpeg)$/i

/*edicion de producto*/

formEdit.addEventListener('change', function(e){
    e.preventDefault();
    
    let errores = [];

    if (formEdit.name.value == '') {
      errores.push("Este campo debe estar completo");
      nameError.innerText = (errores[errores.length-1]) ? errores[errores.length-1]: '';
    } else if (formEdit.name.value.length < 5) {
      swal('El nombre debe tener al menos 5 caracteres')
    } else if (formEdit.price.value == '') {
      swal('Debes cargar un precio')
    } else if (formEdit.productImage.value == '') {
      swal('Debes cargar una imagen de Producto') 
    } else if (!(regexImageFormat.test(formEdit.productImage.value))) {
      swal('El formato de imagen debe ser ".jpg", ".png", ".gif",".jpeg"')
    } else if (formEdit.description.value == '') {
      errores.push("Este campo debe estar completo");
      descriptionError.innerText = (errores[errores.length-1]) ? errores[errores.length-1]: '';
    } else if (formEdit.description.value.length < 20) {
      swal('La descripcion debe tener al menos 20 caracteres')
    }; 
    if (!errores.length >= 1 ) {
      formEdit.addEventListener('submit', function(){

      console.log ('Se envio el formulario');
      swal("¡ PRODUCTO ACTUALIZADO !");
      
      formEdit.submit();
    })
  }
});
