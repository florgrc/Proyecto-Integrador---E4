window.addEventListener('load', function(){

  let formDelete = document.querySelectorAll(".deleteForm"); 
  console.log(formDelete + 'Se capturó el Delete');


  formDelete.forEach(element => {
      element.addEventListener('submit', function (e) {
          e.preventDefault();
          console.log("se envió el form");
          swal({
              title: "Vas a eliminar este producto. Estas seguro?",
              text: "Una vez eliminado, no serás capaz de recuperarlo.",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                swal("Hasta la vista Baby! Se eliminó el archivo!", {
                  icon: "success",
                  button: "Ok",
                });
                element.submit();
              } else {
                swal("No se eliminó el archivo!","Pero te llevaste un terrible susto", {
                  button: "Ok",
                });
              }
            });
      })        
  });

  })
