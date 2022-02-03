window.addEventListener('load', function () {

  let formCreate = document.querySelector(".createForm");
  // let name = document.querySelector("#nameProduct");
  let classification = document.querySelector("#classification");
  let variety = document.querySelector("#variety");
  let price = document.querySelector("#price");
  //let image = document.querySelector("#file-upload");
  let subject = document.querySelector("#subject");

  let nameError = document.querySelector("#nameProductError");
  let classificationError = document.querySelector("#classificationError");
  let varietyError = document.querySelector("#varietyError");
  let priceError = document.querySelector("#priceError");
  let imageError = document.querySelector("#imageError");
  let subjectError = document.querySelector("#subjectError");

  const regexImageFormat = /\.(jpg|gif|png|jpeg)$/i

  /*creacion de producto*/

  formCreate.addEventListener('change', function (e) {
    e.preventDefault();

    let errores = [];

    if (formCreate.name.value == '') {
      errores.push("Este campo debe estar completo");
      nameError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else if (formCreate.name.value.length < 5) {
      errores.push("El nombre debe tener al menos 5 caracteres");
      nameError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else {
      nameError.innerText = 'ok';
      nameError.style.color = "Green";
      nameError.style.fontWeight = "900";
    };

    if (classification.value == '') {
      errores.push("Debe elegir un tipo de Clasificación");
      classificationError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else {
      classificationError.innerText = 'ok';
      classificationError.style.color = "Green";
      classificationError.style.fontWeight = "900";
    };

    if (variety.value == '') {
      errores.push("Debe elegir un tipo de Variedad");
      varietyError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else {
      varietyError.innerText = 'ok';
      varietyError.style.color = "Green";
      varietyError.style.fontWeight = "900";
    };

    if (validator.isEmpty(price.value)) {
      errores.push("Debes cargar un precio");
      priceError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else if (!validator.isCurrency(price.value)) {
      errores.push("Precio solo admite números, caracteres ',' y '$'");
      priceError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else {
      priceError.innerText = 'ok';
      priceError.style.color = "Green";
      priceError.style.fontWeight = "900";
    };

    if (formCreate.productImage.value == '') {
      errores.push("Debes cargar una imagen de Producto.");
      imageError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else if (!(regexImageFormat.test(formCreate.productImage.value))) {

      errores.push('El formato de imagen debe ser ".jpg", ".png", ".gif",".jpeg"');
      imageError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else {
      imageError.innerText = 'ok';
      imageError.style.color = "Green";
      imageError.style.fontWeight = "900";
    };

    if (validator.isEmpty(subject.value)) {
      errores.push("Debes cargar una descripción.");
      subjectError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else if (subject.value.length < 20) {
      errores.push("La descripcion debe tener al menos 20 caracteres.");
      subjectError.innerText = (errores[errores.length - 1]) ? errores[errores.length - 1] : '';
    } else {
      subjectError.innerText = 'ok';
      subjectError.style.color = "Green";
      subjectError.style.fontWeight = "900";
    };


    if (!errores.length >= 1) {
      formCreate.addEventListener('submit', function () {

        swal("¡ PRODUCTO CREADO !", "", "success");

        formCreate.submit();
      })
    }
  });

})