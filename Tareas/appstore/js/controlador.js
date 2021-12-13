//Codigo para generar información de categorias y almacenarlas en un arreglo.
var categorias = [];
(()=>{
  //Este arreglo es para generar textos de prueba
  let textosDePrueba=[
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
      "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
      "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
      "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
      "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
  ]
  
  //Genera dinamicamente los JSON de prueba para esta evaluacion,
  //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria

  
  let contador = 1;
  for (let i=0;i<5;i++){//Generar 5 categorias
      let categoria = {
          nombreCategoria:"Categoria "+i,
          descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
          aplicaciones:[]
      };
      for (let j=0;j<10;j++){//Generar 10 apps por categoria
          let aplicacion = {
              codigo:contador,
              nombre:"App "+contador,
              descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
              icono:`img/app-icons/${contador}.webp`,
              instalada:contador%3==0?true:false,
              app:"app/demo.apk",
              calificacion:Math.floor(Math.random() * (5 - 1)) + 1,
              descargas:1000,
              desarrollador:`Desarrollador ${(i+1)*(j+1)}`,
              imagenes:["img/app-screenshots/1.webp","img/app-screenshots/2.webp","img/app-screenshots/3.webp"],
              comentarios:[
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Juan"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Pedro"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Maria"},
              ]
          };
          contador++;
          categoria.aplicaciones.push(aplicacion);
      }
      categorias.push(categoria);
  }
  
  console.log(categorias);
})();


//Setup Localstorage
const localStorage = window.localStorage;
(() => {
    if(localStorage.getItem("categorias") == null){
        localStorage.setItem("categorias",JSON.stringify(categorias));
    }
    else{
        categorias = JSON.parse(localStorage.getItem("categorias"));
    }
})();


//render of categories dropdown
var currentCat = 0;

function renderSelectionCategories() {
    const categoriesOptions = document.getElementById("categories-select");
    categoriesOptions.innerHTML = `${categorias[currentCat].nombreCategoria}`;
}

function renderOptionsCategories() {
    const categoriesOptions = document.getElementById("categories-options");
    categoriesOptions.innerHTML = '';
    for (cat_index in categorias){
        const cat = categorias[cat_index]
        categoriesOptions.innerHTML += `
            <a  class="dropdown-item" 
                onclick="handleCategorieChange(${cat_index})" 
                href="#"
            >
                ${cat.nombreCategoria}
            </a>
        `
    }
}

function handleCategorieChange(index){
    currentCat = index
    renderSelectionCategories()
    renderApps();
}

renderOptionsCategories();
renderSelectionCategories()

//render of apps

function renderApps(){
    const cardsDiv = document.getElementById("cards-div");
    cardsDiv.innerHTML = '';
    const apps =  categorias[currentCat].aplicaciones
    for(appIndex in apps){
        app = apps[appIndex]
        
        cardsDiv.innerHTML += `
            <div class="card mb-3" style="width: 10rem;" onclick="openAppDescModal(${appIndex})">
                <div class="card-img px-2 pt-2">
                    <img src="${app.icono}" class="card-img-top" alt="...">
                </div>
                <div class="card-body p-2">
                <h5 class="card-title mb-0">${app.nombre}</h5>
                <p class="card-dev mb-2">${app.desarrollador}</p>

                <div class="stars-seg">
                    ${renderAppStars(app.calificacion)}
                </div>
                <h5 class="card-price">$3.12</h5>
                
                </div>
            </div>
        `
    }
}

function renderAppStars(rate){
    starsHTML = `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`;
    return starsHTML;
}

renderApps();

/*MODAL */
function openAppDescModal(appIndex){
    const app =  categorias[currentCat].aplicaciones[appIndex];

    const commentModalSeg = document.getElementById('comment-modal-seg');
    const headerModalSeg = document.getElementById('header-modal-seg');
    const modalButtonSeg = document.getElementById('modal-button-seg');
    
    headerModalSeg.innerHTML = `
        <img src="${app.icono}" alt="">
        <div>
            <div class="card-body p-2">
                <h5 class="title-app-modal">${app.nombre}</h5>
                <p class="dev-app-modal mb-0">${app.desarrollador}</p>
                <p class="desc-app-modal mb-1">${app.descripcion}</p>
                <h5 class="price-app-modal mb-4">$3.12</h5>

                <div class="stars-app-modal ${app.calificacion<3 ? 'bad' : ''} mb-2">
                    ${renderAppStars(app.calificacion)}
                    <strong> &nbsp ${app.calificacion}.0</strong>
                </div>
            </div>
        </div>
    `;
    commentModalSeg.innerHTML = "";
    for(comment of app.comentarios){
        commentModalSeg.innerHTML += `
            <div class="comment-user">
                <div class="mx-3 my-auto">
                    <img src="./img/user.webp" alt="">
                </div>
                <div class="comment-segment">
                    <strong>${comment.usuario}</strong>
                    <p class="mb-0">${comment.comentario}</p>
                </div>
            </div>
        `;
    }

    modalButtonSeg.innerHTML = `
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger ml-2" data-dismiss="modal" onclick="removeApp(${appIndex})">Eliminar</button>
        ${app.instalada ? '' : '<button type="button" class="btn btn-primary ml-2 install-button">Instalar</button>'}    
    `;

    $('#appDescModal').modal('show');
}



function createNewApp(){
    urlNewApp = document.getElementById('url-new-app').value;
    nameNewApp = document.getElementById('name-new-app').value;
    devNewApp = document.getElementById('dev-new-app').value;
    priceNewApp = document.getElementById('price-new-app').value;
    descNewApp = document.getElementById('desc-new-app').value;

    if(
        urlNewApp != '' ||
        nameNewApp != '' ||
        devNewApp != '' ||
        priceNewApp != '' ||
        descNewApp != '' 
    ){
        newApp = {
            app: "app/demo.apk",
            calificacion: 0,
            codigo: 1,
            comentarios:[],
            desarrollador: devNewApp,
            descargas: 0,
            descripcion: descNewApp,
            icono: urlNewApp,
            imagenes: [],
            instalada: false,
            nombre: nameNewApp
        }
        categorias[currentCat].aplicaciones.push(newApp)
        localStorage.setItem("categorias",JSON.stringify(categorias));
        renderApps();
    }
}


function removeApp(index){    
    categorias[currentCat].aplicaciones.splice(index, 1);
    localStorage.setItem("categorias",JSON.stringify(categorias));
    renderApps();
}