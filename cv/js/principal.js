

// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
        buttonPdf.style.bottom = "35px";
        buttonUp.style.transform = "scale(0)";
    }
}


///

buttonUp = document.getElementById("button-up");
buttonPdf = document.getElementById("button-pdf");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonPdf.style.bottom = "120px";
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonPdf.style.bottom = "35px";
        buttonUp.style.transform = "scale(0)";
    }

}

document.querySelector('#btnjson').addEventListener("click", traerDatos());
function traerDatos(){
 const xhttp = new XMLHttpRequest();
 xhttp.open('GET', './doc/codigofacilito.json', true);
 xhttp.send();
 xhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
     // console.log(this.responseText);
     let data = JSON.parse(this.responseText);
     // console.log(data);
     let certificates= data['data'].certificates;

     let res = document.querySelector('#res');
     res.innerHTML = '';

     for (let cod of certificates){
       // console.log(cod);
        res.innerHTML +=`
          <div class="col mb-4">
             <div class="card " >
                <img style="width: 100px; height: 100px" src="${cod.icon}" class="imgCard card-img-top mx-auto d-block mt-5 mb-2" alt="...">
                 <div class=" mask blue-gradient-rgba " style="height: 100%">
                   <div class="card-body">
                   <h4 class="card-title" style="text-align: center;font-size:20px;font-family: 'Lora', serif;color: #fff; margin-top: 5px"><strong>${cod.title}</strong></h4>
                   </div>
                  <div class="card-footer text-center mt-10" >
                    <p style="color: rgb(18, 19, 41);font-size: 20px">Calificación:  ${cod.score}</p>
                  </div>
               </div>
             </div>
           </div>
        `
     }
   }
 }
}

document.querySelector('#btnjsonCursos').addEventListener("click", traerDatosCursos());
function traerDatosCursos(){
 const xhttp = new XMLHttpRequest();
 xhttp.open('GET', './doc/codigofacilito.json', true);
 xhttp.send();
 xhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
     // console.log(this.responseText);
     let data1 = JSON.parse(this.responseText);
     // console.log(data);
     let cursos= data1['data'].courses;

     let resCursos = document.querySelector('#resCursos');
     resCursos.innerHTML = '';

     for (let course of cursos){
       // console.log(cod);
       if (parseInt(course.progress) >= 50) {
        resCursos.innerHTML +=`
        <div class="mb-4">
          <div class="card   gradient-card mb-4" style="height: 200px;width: 200px;margin: 0 20px" >
            <div class="card-images " style="height: 100%;background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <div class="text-white d-flex  mask blue-gradient-rgba" style="height: 100%">
                 <div class="first-content align-self-end p-2">
                   <h3 class="card-title" style=" text-align:center;font-size:22px" ><a href="${course.url}"  style="color: #fff"  target="_blank">${course.title}</a></h3>
                   <p class="card-footer   mt-10" style=" font-size:18px;color: rgb(18, 19, 41)" >Progreso : ${parseInt(course.progress)} %</p>
                 </div>
              </div>
            </div>
          </div>
       </div>
        `}
     }
   }
 }
}
