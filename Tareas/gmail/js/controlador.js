var localStorage = window.localStorage;
const RECEIVED = 0;
const SEND = 1;
const STARRED = 2;
const SPAM = 3;
const RECYCLE_BIN = 4;
var currentState = RECEIVED

var recibidos = [
    {
        emisor: 'Juan Perez',
        correoEmisor: 'jperez@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    },
    {
        emisor: 'José Perez',
        correoEmisor: 'joseperez@gmail.com',
        asunto: 'Examen primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '12:00am',
        leido: false,
        destacado: true,
        spam: false
    },
    {
        emisor: 'José Perez',
        correoEmisor: 'joseperez@gmail.com',
        asunto: 'Examen primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing.',
        hora: '12:00am',
        leido: false,
        destacado: false,
        spam: false
    },
    {
        emisor: 'José Perez',
        correoEmisor: 'joseperez@gmail.com',
        asunto: 'Examen primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '12:00pm',
        leido: false,
        destacado: true,
        spam: false
    },
    {
        emisor: 'Juan Perez',
        correoEmisor: 'jperez@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: false,
        spam: false
    },
    {
        emisor: 'Diunsa',
        correoEmisor: 'diunsa@gmail.com',
        asunto: 'Promociones',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '09:00pm',
        leido: false,
        destacado: false,
        spam: true
    },
];

var enviados = [
    {
        receptor: 'Pedro Martinez',
        emailReceptor: 'pmartinez@gmail.com',
        asunto: 'Saludos desde Intibucá',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '11:00am'
    },
    {
        receptor: 'Karla Sanchez',
        emailReceptor: 'ksanchez@gmail.com',
        asunto: 'Saludos desde Tegus',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '12:00pm'
    },
];

var papelera = [
    {
        emisor: 'Juan Perez',
        correoEmisor: 'jperez@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    },
    {
        emisor: 'Carlos Castillo',
        correoEmisor: 'cCastillo@gmail.com',
        asunto: 'fotos viaje',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '04:00pm',
        leido: true,
        destacado: false,
        spam: false
    },
    {
        emisor: 'Alejandra Martinez',
        correoEmisor: 'amarti@gmail.com',
        asunto: 'trabajo pendiente',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00pm',
        leido: false,
        destacado: false,
        spam: false
    },
];

(()=>{
    recibidos = useLocalStorage('recibidos', recibidos)
    enviados = useLocalStorage('enviados', enviados)
    papelera = useLocalStorage('papelera', papelera)
    
})()
console.log(recibidos)

function useLocalStorage(item, defaultItem){
    if( localStorage.getItem(item)==null ){
        localStorage.setItem(item,JSON.stringify(defaultItem))
        return defaultItem
    }
    else{
        return JSON.parse(localStorage.getItem(item))
    }
}

function saveItem(item, itemName){
    localStorage.setItem(itemName,JSON.stringify(item))
}

function renderViewSelector(state){
    viewSelector = document.getElementById('view-selector')
    viewSelector.innerHTML = `
        <div class="section-view${state==RECEIVED? '-active': ''}" onclick="changeViewSection(${RECEIVED})">
            <i class="far fa-envelope mr-2"></i>
            Recibidos (${ recibidos.filter( email => email.spam == false).length})
        </div>

        <div class="section-view${state==SEND? '-active': ''}" onclick="changeViewSection(${SEND})" >
            <i class="far fa-paper-plane mr-2"></i>
            Enviados
        </div>

        <div class="section-view${state==STARRED? '-active': ''}" onclick="changeViewSection(${STARRED})">
            <i class="far fa-star mr-2"></i>
            Destacados
        </div>

        <div class="section-view${state==SPAM? '-active': ''}" onclick="changeViewSection(${SPAM})">
            <i class="fas fa-exclamation-triangle mr-2"></i>
            Spam
        </div>

        <div class="section-view${state==RECYCLE_BIN? '-active': ''}" onclick="changeViewSection(${RECYCLE_BIN})">
            <i class="far fa-trash-alt mr-2"></i>
            Papelera
        </div>
    `
}

function emailFilter(filter){
    switch(filter){
        case RECEIVED:
            return emailFilteredList =  recibidos.map( email => email.spam ? null : email );
        case STARRED:
            return emailFilteredList = recibidos.map( email => email.destacado ? email : null);
        case SPAM:
            return emailFilteredList = recibidos.map( email => email.spam ? email : null);
        default:
            return []
    }
}

function renderReceivedEmails(){
    emailsDiv = document.getElementById('emails-div');
    emailsDiv.innerHTML = '';
    emailFilteredList = emailFilter(currentState);

    for (emailIndex in emailFilteredList){
        const email = emailFilteredList[emailIndex];
        if(email){
            emailsDiv.innerHTML +=  `
                <div class="email ${email.leido ? '' : 'no-read'} ">
                    <div class="d-flex align-items-center pl-4">
                        <i class="far fa-star mr-2 ${email.destacado ? 'star-active' : ''} email-icon" onclick="togglefavorite(${emailIndex})"></i>
                        <i class="fas fa-exclamation-triangle mr-2 email-icon  ${email.spam ? 'spam-active' : ''}" onclick="toggleSpam(${emailIndex})"></i>
                        <div >${email.emisor}</div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div>${email.asunto} -&nbsp</div>
                        <div class="email-content">${email.mensaje.substring(1, 21)}...</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-end pr-5">
                        <i class="far fa-eye mr-3 email-icon" onclick="toggleSeenMessage(${emailIndex})"></i>
                        <div class="email-time">${email.hora}</div>
                        <i class="far fa-trash-alt ml-3 email-trash email-icon" onclick="sendToRecycleBin(${emailIndex})"></i>
                    </div>
                </div>
            `
        }
    }
}


function renderSendEmails(){
    emailsDiv = document.getElementById('emails-div');
    emailsDiv.innerHTML = '';
    for (emailIndex in enviados){
        const email = enviados[emailIndex];
        emailsDiv.innerHTML +=  `
            <div class="email ${email.leido ? '' : 'no-read'} " >
                <div class="d-flex align-items-center pl-4">
                    <div >${email.receptor}</div>
                </div>
                <div class="d-flex align-items-center">
                    <div>${email.asunto} -&nbsp</div>
                    <div class="email-content">${email.mensaje.substring(1, 21)}...</div>
                </div>
                <div class="d-flex align-items-center justify-content-end pr-5">
                    <div class="email-time">${email.hora}</div>
                    <i class="far fa-trash-alt ml-3 email-trash email-icon" onclick="removeSendEmail(${emailIndex})"></i>
                </div>
            </div>
        `
    }
}

function renderRecycleBinEmail(){
    emailsDiv = document.getElementById('emails-div');
    emailsDiv.innerHTML = '';
    for (emailIndex in papelera){
        const email = papelera[emailIndex];
        emailsDiv.innerHTML +=  `
            <div class="email ${email.leido ? '' : 'no-read'} ">
                <div class="d-flex align-items-center pl-4">
                    <div >${email.emisor}</div>
                </div>
                <div class="d-flex align-items-center">
                    <div>${email.asunto} -&nbsp</div>
                    <div class="email-content">${email.mensaje.substring(1, 21)}...</div>
                </div>
                <div class="d-flex align-items-center justify-content-end pr-5">
                    <div class="email-time">${email.hora}</div>
                </div>
            </div>
        `  
    }
}


function render(state){
    console.log(state)
    renderViewSelector(state)
    switch(state){
        case RECEIVED:
            renderReceivedEmails();
            break;
        case SEND:
            renderSendEmails();
            break;
        case STARRED:
            renderReceivedEmails();
            break;
        case SPAM:
            renderReceivedEmails()
            break;
        case RECYCLE_BIN:
            renderRecycleBinEmail();
            break;

        default:
            console.log('Evento Inesperado')

    }
}


function changeViewSection(state){
    currentState = state;
    render(currentState)
}


function showNewEmailWindow(){
    newEmailWindow = document.getElementById('new-email-window');
    newEmailWindow.classList.add('active');
}

function closeNewEmailWindow(){
    newEmailWindow = document.getElementById('new-email-window');
    newEmailWindow.classList.remove('active');
}

render(currentState);

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

function sendEmail(){
    nameInput = document.getElementById('name-input').value;
    fromInput = document.getElementById('from-input').value;
    toInput = document.getElementById('to-input').value;
    matterInput = document.getElementById('matter-input').value;
    contentInput = document.getElementById('content-input').value;

    if(
        nameInput != '' ||
        fromInput != '' ||
        toInput != '' ||
        matterInput != ''||
        contentInput != ''
    ){
        enviados.push({
            receptor: nameInput, 
            emailReceptor: fromInput, 
            asunto: matterInput, 
            mensaje: contentInput, 
            hora: formatAMPM(new Date()), 
        })

        saveItem(enviados, 'enviados');
        closeNewEmailWindow();
        render(currentState);

    }
}

function removeSendEmail(index){
    enviados.splice(index, 1);
    saveItem(enviados, 'enviados');
    render(currentState);
}

function togglefavorite(index){
    recibidos[index].destacado = !recibidos[index].destacado;
    saveItem(recibidos, 'recibidos');
    render(currentState);
}

function toggleSpam(index){
    recibidos[index].spam = !recibidos[index].spam;
    saveItem(recibidos, 'recibidos');
    render(currentState);
}

function toggleSeenMessage(index){
    recibidos[index].leido = !recibidos[index].leido;
    saveItem(recibidos, 'recibidos');
    render(currentState);
}

function sendToRecycleBin(index){
    emailRemoved = recibidos[index];
    recibidos.splice(index, 1);
    papelera.push(emailRemoved)
    
    saveItem(recibidos, 'recibidos');
    saveItem(papelera, 'papelera');

    render(currentState);
}