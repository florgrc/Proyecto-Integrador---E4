let formCreate = qs('.createForm')
const regexImageFormat = /\.(jpg|gif|png|jpeg)$/i

/*creacion de producto*/

formCreate.addEventListener('submit', function(e){
    e.preventDefault();
    
    if (formCreate.name.value == '') {
      swal('Debes escribir un nombre de Producto')
    } else if (formCreate.name.value.length < 5) {
      swal('El nombre debe tener al menos 5 caracteres')
    } else if (formCreate.productImage.value == '') {
      swal('Debes cargar una imagen de Producto') 
    } else if (!(regexImageFormat.test(formCreate.productImage.value))) {
      swal('El formato de imagen debe ser ".jpg", ".png", ".gif",".jpeg"')
    } else if (formCreate.description.value == '') {
      swal('Debes escribir la descripcion de Producto')
    } else if (formCreate.description.value.length < 20) {
      swal('La descripcion debe tener al menos 20 caracteres')
    } else {
    formCreate.submit()
}

})

