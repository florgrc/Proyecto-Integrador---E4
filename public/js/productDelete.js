window.addEventListener('load', function () {
  let formDelete = document.querySelectorAll(".deleteForm");
  formDelete.forEach(element => {
    element.addEventListener('submit', function (e) {
      e.preventDefault();
      swal({
          title: "Estas seguro?",
          text: "Una vez borrado, no podras recuperarlo!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Poof! El producto fue eliminado!", {
              icon: "success",
            });
            element.submit();
          } else {
            swal("El producto no fue borrado!");
          }
        });
    })
  });
})