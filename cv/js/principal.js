
// Scroll view
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
        buttonPdf.style.bottom = "35px";
         buttonUp.style.transform = "scale(0)";
    }
}



buttonUp = document.getElementById("button-up");
buttonPdf = document.getElementById("button-pdf");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll >= 500){
    buttonPdf.style.bottom = "120px";
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
       buttonPdf.style.bottom = "35px";
        buttonUp.style.transform = "scale(0)";

    }
}



// Formulario
var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(e){
      e.preventDefault();
      console.log('me diste un click')

      var datos = new FormData(formulario);
      console.log(datos)
      console.log(datos.get('nombre'))
      console.log(datos.get('email'))
      console.log(datos.get('phone'))
      console.log(datos.get('message'))
      console.log(datos.get('affair'))

      fetch('post.php',{
        method: 'POST',
        body: datos
      })
        .then( res => res.json())
        .then( data => {
          console.log(data);
              if(data === 'error'){
                toastr.error("Algo esta mal, inténtalo de nuevo.","Error",{
                "progressBar":true});
              }else{
                var nombre = JSON.stringify(data);
                toastr.success("Gracias "+nombre+" por contactarme, espera la respuesta muy pronto!","Enviado",{
                "progressBar":true});
                formulario.reset();
              }
          } )
    })
