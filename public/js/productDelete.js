window.addEventListener('load', function(){

    let formDelete = document.querySelector(".deleteForm"); 
    let formDeleteId = document.querySelector("#deleteFormId");   
    console.log(formDelete + 'Se capturó el Delete');

    formDeleteId.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("se envió el form");
        swal("Producto eliminado", "Login!", "success");
        //formDeleteId.submit();
    })

    

    })