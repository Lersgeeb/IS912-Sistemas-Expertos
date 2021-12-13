var localStorage = window.localStorage;
const PLAYLIST = 0;
const ARTIST = 1;
const ALBUMS = 2;
const SONGS = 3;
const USER = 4;
const PLAYLIST_SONGS = 5;
var currentState = ARTIST;
var currentArtista = null;
var currentAlbum = null;
var currentSong = null;
var currentuser = 1;
var currentPlaylist = null;


var usuarios = [
    {
        idUsuario: 1,
        nombre: 'Goku',
        imagen: './img/profile-pics/goku.jpg'
    },
    {
        idUsuario: 2,
        nombre: 'Androide 16',
        imagen: './img/profile-pics/androide_16.jpg'
    },
    {
        idUsuario: 3,
        nombre: 'androide_18',
        imagen: './img/profile-pics/androide_18.jpg'
    },
    {
        idUsuario: 4,
        nombre: 'androide_19',
        imagen: './img/profile-pics/androide_19.jpg'
    },
    {
        idUsuario: 5,
        nombre: 'Baby',
        imagen: './img/profile-pics/baby.jpg'
    },
    {
        idUsuario: 6,
        nombre: 'Cell',
        imagen: './img/profile-pics/cell.jpg'
    },
    {
        idUsuario: 7,
        nombre: 'Chaozu',
        imagen: './img/profile-pics/chaozu.jpg'
    },
    {
        idUsuario: 8,
        nombre: 'Dende',
        imagen: './img/profile-pics/Dende.jpg'
    },
    {
        idUsuario: 9,
        nombre: 'Dodoria',
        imagen: './img/profile-pics/dodoria.jpg'
    },
    {
        idUsuario: 10,
        nombre: 'Freezer',
        imagen: './img/profile-pics/Freezer.jpg'
    },
]

var artistas = [
    {
        idArtista: 1,
        nombre: 'Coldplay',
        imagen: './img/covers/artist.jpg',
        albumes: [
            {
                nombreAlbum: 'Music of the spheres',
                caratula: './img/covers/cover1.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        duracion: '10:00',
                    },
                    {
                        nombre: 'Higher Power',
                        duracion: '3:29',
                    },
                    {
                        nombre: 'Humankind',
                        duracion: '4:26',
                    },
                ]
            },
            {
                nombreAlbum: 'A Head Full of Dreams',
                caratula: './img/covers/cover2.jpg',
                canciones: [
                    {
                        nombre: 'A Head Full of Dreams',
                        duracion: '3:43',
                    },
                    {
                        nombre: 'Birds',
                        duracion: '3:49',
                    },
                    {
                        nombre: 'Hymn for the Weekend',
                        duracion: '4:16',
                    },
                ]
            },
            {
                nombreAlbum: 'Parachutes',
                caratula: './img/covers/cover3.jpg',
                canciones: [
                    {
                        nombre: 'Don\'t Panic',
                        duracion: '2:17',
                    },
                    {
                        nombre: 'Shiver',
                        duracion: '5:00',
                    },
                    {
                        nombre: 'Spies',
                        duracion: '5:19',
                    },
                ]
            },
        ]
    },
    {
        idArtista: 2,
        nombre: 'Coldplay 2',
        imagen: './img/covers/artist.jpg',
        albumes: [
            {
                nombreAlbum: 'Ghost Stories',
                caratula: './img/covers/cover4.jpg',
                canciones: [
                    {
                        nombre: 'Always In My Head',
                        duracion: '3:37',
                    },
                    {
                        nombre: 'Magic',
                        duracion: '4:45',
                    },
                    {
                        nombre: 'Ink',
                        duracion: '3:48',
                    },
                ]
            },
            {
                nombreAlbum: 'A Rush of Blood to the Head',
                caratula: './img/covers/cover6.jpg',
                canciones: [
                    {
                        nombre: 'Politik',
                        duracion: '5:19',
                    },
                    {
                        nombre: 'In My Place',
                        duracion: '3:49',
                    },
                    {
                        nombre: 'God Put a Smile Upon Your Face',
                        duracion: '4:57',
                    },
                ]
            },
        ]
    },
    {
        idArtista: 3,
        nombre: 'Coldplay Ultimate',
        imagen: './img/covers/artist.jpg',
        albumes: [
            {
                nombreAlbum: 'Live Buenos Aires',
                caratula: './img/covers/cover9.jpg',
                canciones: [
                    {
                        nombre: 'Yellow',
                        duracion: '4:59',
                    },
                    {
                        nombre: 'A Head of Dreams',
                        duracion: '5:50',
                    },
                    {
                        nombre: 'Every Teardrop in Waterfall',
                        duracion: '4:04',
                    },
                    {
                        nombre: '42',
                        duracion: '4:52',
                    },
                    {
                        nombre: 'Glass Of Water',
                        duracion: '4:45',
                    },
                    {
                        nombre: 'Clocks',
                        duracion: '4:41',
                    },
                    {
                        nombre: 'Lost',
                        duracion: '3:56',
                    },
                    {
                        nombre: 'Life in Tecnicolor',
                        duracion: '2:29',
                    },
                ]
            },
            {
                nombreAlbum: 'Kaleidoscope EP',
                caratula: './img/covers/cover10.jpg',
                canciones: [
                    {
                        nombre: 'All I Can Think About Is You',
                        duracion: '4:35',
                    },
                    {
                        nombre: 'Miracles',
                        duracion: '4:37',
                    },
                    {
                        nombre: 'ALIENS',
                        duracion: '4:43',
                    },
                ]
            },
        ]
    },
 
]

var playlists = [
    {
        idUsuario: 1,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones relax',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 2,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones Deportivas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 3,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones Epicas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 4,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones para dormir',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 5,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones para la Cocina',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 6,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones para fiestas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 7,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones para Estudiar',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 8,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
            {
                titulo: 'Canciones para la Playa',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 9,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
    {
        idUsuario: 10,
        playlists: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'imagen.jpg',
                canciones: [
                    {
                        nombre: 'Coloratura',
                        artista: 'Coldplay',
                        album: 'Music of the spheres',
                        duracion: '10:00',
                    }   
                ]    
            },
        ]
    },
]

function useLocalStorage(item, defaultItem){
    if( localStorage.getItem(item)==null ){
        localStorage.setItem(item,JSON.stringify(defaultItem))
        return defaultItem
    }
    else{
        return JSON.parse(localStorage.getItem(item))
    }
}
(()=>{
    usuarios = useLocalStorage('usuarios', usuarios);
    artistas = useLocalStorage('artistas', artistas);
    playlists = useLocalStorage('playlists', playlists);
})()



/*--------------------Data getter or setter---------------*/
function saveItem(item, itemName){
    localStorage.setItem(itemName,JSON.stringify(item))
}

function getAlbumsArtist(id){
    artistaFiltrado = artistas.filter( artist => artist.idArtista == id)
    return [artistaFiltrado[0].albumes, artistaFiltrado[0].nombre ]
}

function getAlbumDetails(){
    const [albumes, nombreArtista] = getAlbumsArtist(currentArtista);
    return [albumes[currentAlbum], nombreArtista]
}

function getSongDetails(){
    const {idArtista, albumIndex, songIndex} = currentSong
    const [albumes, nombreArtista] = getAlbumsArtist(idArtista);
    return [albumes[albumIndex].canciones[songIndex], nombreArtista, albumes[albumIndex].caratula]
}

function getPlaylistsOfUser(){
    playlistsFiltrado = playlists.filter( playlist => playlist.idUsuario == currentuser)
    return playlistsFiltrado[0].playlists;
}

function getCurrentUserInfo(){
    usuariosFiltrado = usuarios.filter( usuarios => usuarios.idUsuario == currentuser)
    return usuariosFiltrado[0];
}

function getCurrentPlaylistSongs(){
    currentPlaylists = getPlaylistsOfUser()
    return currentPlaylists[currentPlaylist].canciones;
}

function saveSongToPlaylist(playlistIndex){
    const {idArtista, albumIndex, songIndex} = currentSong
    const [albumes, nombreArtista] = getAlbumsArtist(idArtista);
    let userPlaylists = getPlaylistsOfUser();
    let newSong = {
        nombre: albumes[albumIndex].canciones[songIndex].nombre,
        artista: nombreArtista,
        album: albumes[albumIndex].nombreAlbum,
        duracion: albumes[albumIndex].canciones[songIndex].duracion
    }
    userPlaylists[playlistIndex].canciones.push(newSong);
    saveItem(playlists, 'playlists');
}

/*--------------Render functions-------------------*/
function render(){
    renderNav();
    switch(currentState){
        case PLAYLIST:
            console.log('play')
            renderPlaylists();
            break;
        case ARTIST:
            console.log('art')
            renderArtists();
            break;
        case ALBUMS:
            renderAlbums();
            break;
        case SONGS:
            renderSongs();
            break;
        case USER:
            renderUserList();
            break;
        case PLAYLIST_SONGS:
            renderPlaylistSongs();
            break;
       
        default:
            console.log('Evento Inesperado')

    }
}

function renderArtists(){
    contentListComponent = document.getElementById('content-list-component');
    contentListComponent.innerHTML = '';
    for(artista of artistas){
        contentListComponent.innerHTML += `
            <div class="content-item" onclick="showArtistAlbum(${artista.idArtista})">
                <div class="content-info">
                    <div class="img-content-item">
                        <img src="${artista.imagen}" alt="">
                    </div>
                    <div class="desc-content-item">
                        <div class="main-name-content-item">
                            ${artista.nombre}
                        </div>
                        <div class="secundary-name-content-item">
                            Artista
                        </div>
                    </div>
                </div>
                <div class="timer-song">
                    
                </div>
            </div>
        `;
    }
}


function renderAlbums(){
    contentListComponent = document.getElementById('content-list-component');
    const [albumes, nombre] = getAlbumsArtist(currentArtista);
    contentListComponent.innerHTML = '';
    for(albumIndex in albumes){
        album = albumes[albumIndex];
        contentListComponent.innerHTML += `
            <div class="content-item" onclick="showAlbumSongs(${albumIndex})">
                <div class="content-info">
                    <div class="img-content-item">
                        <img src="${album.caratula}" alt="">
                    </div>
                    <div class="desc-content-item">
                        <div class="main-name-content-item">
                            ${album.nombreAlbum}
                        </div>
                        <div class="secundary-name-content-item">
                            ${nombre}
                        </div>
                    </div>
                </div>
                <div class="timer-song">
                    
                </div>
            </div>

        
        `;
    }
}

function renderSongs(){
    contentListComponent = document.getElementById('content-list-component');
    const [album, nombreArtista] = getAlbumDetails();
    contentListComponent.innerHTML = '';
    for(songIndex in album.canciones){
        song = album.canciones[songIndex];
        contentListComponent.innerHTML += `
            <div class="content-item" onclick="selectSong(${songIndex})">
                <div class="content-info">
                    <div class="img-content-item music">
                        <i class="fas fa-music"></i>
                    </div>
                    <div class="desc-content-item">
                        <div class="main-name-content-item">
                            ${song.nombre}
                        </div>
                        <div class="secundary-name-content-item">
                            ${nombreArtista}
                        </div>
                    </div>
                </div>
                <div class="timer-song">
                    ${song.duracion}
                </div>
            </div>
        `;
    }
}

function renderCurrentSong(){
    curentSongContainer = document.getElementById('curent-song-container');
    curentSongContainer.innerHTML = '';
    if(currentSong != null){
        const [song, nombreArtista, caratula] = getSongDetails();
        curentSongContainer.innerHTML = `
            <div class="current-song-visual">
                <div class="current-song-info">
                    <div class="album-currrent-song">
                        <img src="${caratula}" alt="">
                    </div>
                    <div class="desc-current-song">
                        <div class="name-current-song">
                            ${song.nombre}
                        </div>
                        <div class="name-current-artist">
                            ${nombreArtista}
                        </div>
                    </div>
                </div>
                <div class="options-current-song">
                    <i class="fas fa-plus-square" onclick="showModal()"></i>
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `;
    }
}

function renderPlaylists(){
    contentListComponent = document.getElementById('content-list-component');
    contentListComponent.innerHTML = '';
    
    const playlists = getPlaylistsOfUser();
    const user = getCurrentUserInfo();

    console.log(user);
    for(playlistIndex in playlists){
        playlist = playlists[playlistIndex];
        contentListComponent.innerHTML += `
            <div class="content-item" onclick="showPlaylistSongs(${playlistIndex})">
                <div class="content-info">
                    <div class="img-content-item">
                        
                    </div>
                    <div class="desc-content-item">
                        <div class="main-name-content-item">
                            ${playlist.titulo}
                        </div>
                        <div class="secundary-name-content-item">
                            Playlist - ${user.nombre}
                        </div>
                    </div>
                </div>
                <div class="timer-song">
                    
                </div>
            </div>
        `;

    }
}

function renderNav(){
    navContainer = document.getElementById('nav-container');
    navContainer.innerHTML = `
        <div class="nav-item ${(currentState==PLAYLIST || currentState==PLAYLIST_SONGS)?'active':''}" onclick="showPlaylists()">
            <i class="fas fa-icons"></i>
            <div class="text-nav-item">Playlisyts</div>
        </div>
        <div class="nav-item ${
            (currentState==ARTIST || currentState== ALBUMS || currentState == SONGS)?
            'active':''
        }" onclick="showArtists()">
            <i class="fas fa-headphones-alt"></i>
            <div  class="text-nav-item">Artistas</div>
        </div>
        <div class="nav-item ${currentState==USER?'active':''}" onclick="showUsers()">
            <i class="far fa-user"></i>
            <div class="text-nav-item">Usuario</div>
        </div>
    `
}

function renderUserList(){
    contentListComponent = document.getElementById('content-list-component');
    contentListComponent.innerHTML = `
        <div class="userlist" id="userlist-component">
            
        </div>
    `;

    userlistComponent = document.getElementById('userlist-component');
    userlistComponent.innerHTML = ''

    
    for(user of usuarios){
        userlistComponent.innerHTML += `
            <div class="user ${user.idUsuario==currentuser?'active':''}" onclick = "changueUser(${user.idUsuario})">
                <div class="userImg">
                    <img src="${user.imagen}" alt="">
                </div>
                <div class="nameUser">
                    ${user.nombre}
                </div>
            </div>
        `;
    }
}

function renderPlaylistSongs(){
    contentListComponent = document.getElementById('content-list-component');
    contentListComponent.innerHTML = '';
    songs = getCurrentPlaylistSongs(); 
    console.log(songs)
    for(song of songs){
        contentListComponent.innerHTML += `
            <div class="content-item" >
                <div class="content-info">
                    <div class="img-content-item music">
                        <i class="fas fa-music"></i>
                    </div>
                    <div class="desc-content-item">
                        <div class="main-name-content-item">
                            ${song.nombre}
                        </div>
                        <div class="secundary-name-content-item">
                            ${song.artista}
                        </div>
                    </div>
                </div>
                <div class="timer-song">
                    ${song.duracion}
                </div>
            </div>
        `;
    }
}

function showModal(){
    playlistSelect = document.getElementById('playlist-select');
    playlistSelect.innerHTML = '';

    const playlists = getPlaylistsOfUser();
    for(playlistIndex in playlists){
        playlist = playlists[playlistIndex];
        playlistSelect.innerHTML += `<option value="${playlistIndex}">${playlist.titulo}</option>`;
    }

    $("#addSongPlaylist").modal('show');
}

/*-----------------------State Managment-------------------------*/

function showArtistAlbum(idArtista){
    currentArtista = idArtista;
    currentState = ALBUMS;
    render();
}

function showArtists(){
    currentArtista = null;
    currentState = ARTIST;
    render();
}

function showAlbumSongs(index){
    currentAlbum = index;
    currentState = SONGS;
    render();
}

function showPlaylists(){
    currentState = PLAYLIST;
    render();
}

function showUsers(){
    currentState = USER;
    render();
}

function showPlaylistSongs(index){
    currentPlaylist = index;
    currentState = PLAYLIST_SONGS;
    render();
}

function selectSong(index){
    currentSong = {
        idArtista: currentArtista,
        albumIndex: currentAlbum,
        songIndex: index,
    };
    renderCurrentSong();
}

function changueUser(id){
    currentuser = id;
    render();
}

function addSong(){
    playlistSelect = document.getElementById('playlist-select')
    saveSongToPlaylist(parseInt(playlistSelect.value));
    $("#addSongPlaylist").modal('hide');
}

renderCurrentSong();
render();