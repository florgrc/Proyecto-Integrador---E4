window.addEventListener('load', function(){

    let formDelete = document.querySelectorAll(".deleteForm"); 
    console.log(formDelete + 'Se capturó el Delete');


    formDelete.forEach(element => {
        element.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log("se envió el form");
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                  element.submit();
                } else {
                  swal("Your imaginary file is safe!");
                }
              });
        })        
    });

    })