import playerObj from "./app/player.js";
import createPlaylist from "./utils/playlist.js";


const song_img = document.getElementById("song-img");


const songs = [
        {
            song_name : "cancion CHIDA",
            artist_name: "artista 1",
            song_url: "./media/song.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 2",
            artist_name: "artista 1",
            song_url: "./media/song_2.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 3",
            artist_name: "artista 3",
            song_url: "./media/song_3.mp3",
            caratula: "https://picsum.photos/200"
        },
    ];



const playlist = createPlaylist(songs.length);


const player = playerObj;

window.addEventListener('DOMContentLoaded', () => {
    player.player();
})





