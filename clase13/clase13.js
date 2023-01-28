


let btn_sweet = document.getElementById("sweetalert");
btn_sweet.addEventListener("click", function(){
    Swal.fire({
        title: 'Excelente!!!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cerrar',
        showClass: {
            popup: 'animate__animated animate__fadeInLeft' 
             
          },
        hideClass: {
            popup: 'animate__animated animate__fadeOutRight'
        }
      })

});

let btn = document.getElementById("compra");

btn.addEventListener("click", function(){
    Toastify({
        text: "Producto Agregado",    
        duration: 5000,
        destination: "https://www.google.com",
        style:{
            fontSize: "30px"
        }

    }).showToast();
})

let dt = luxon.DateTime;
console.log(dt);

let hoy = dt.now();
console.log(hoy);
console.log(hoy.month);
console.log(hoy.year);

let fecha_x = dt.local(2021,7,13,00);
console.log(fecha_x);


// jquery
$("#btn_esconder").click(function(){console.log("hola")});
