let formEdit = qs('.editForm')
const regexImageFormat = /\.(jpg|gif|png|jpeg)$/i

/*edicion de producto*/

formEdit.addEventListener('submit', function(e){
    e.preventDefault();
    
    if (formEdit.name.value == '') {
      swal('Debes escribir un nombre de Producto')
    } else if (formEdit.name.value.length < 5) {
      swal('El nombre debe tener al menos 5 caracteres')
    } else if (formEdit.productImage.value == '') {
      swal('Debes cargar una imagen de Producto') 
    }else if (!(regexImageFormat.test(formEdit.productImage.value))) {
      swal('El formato de imagen debe ser ".jpg", ".png", ".gif",".jpeg"')
    } else if (formEdit.description.value == '') {
      swal('Debes escribir la descripcion de Producto')
    } else if (formEdit.description.value.length < 20) {
      swal('La descripcion debe tener al menos 20 caracteres')
    } else {
    formEdit.submit()
}

})

