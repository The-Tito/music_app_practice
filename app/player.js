import audioController from "../domain/audioController";
import interface_data from "../domain/interface_data";
import createPlaylist from "../utils/playlist";

const player = {
    _progressBar: document.getElementById("progress"),
    _playBtn: document.getElementById("play"),
    _lastBtn: document.getElementById("lastest"),
    _forwardBtn: document.getElementById("forward"),
    _audioController: audioController,
    _interface: interface_data,

    Player(songs){
        this._progressBar.max = 100;
        this.progress_value.value = 0;
        const media_controller =  document.getElementById("media");
        const playlist = createPlaylist(songs, null)
        this._audioController.AudioController(playlist, media_controller);
        this._interface
    },
    eventListeners(){
        this._audioController._controller.addEventListener('timeupdate', function(){
            progress_value = (player._audioController.currentTime / player._audioController.duration) * 100;
            player._progressBar.value = progress_value;
        });
        this._progressBar.addEventListener('input', function(){
            player._audioController._controller.currentTime = (this.value / 100) * player._audioController._controller.duration;
        });
        this._forwardBtn.addEventListener('click', function(){
            audioController.nextSong();
        })
        this._lastBtn.addEventListener('click', function(){
            audioController.prevSong();
        });
        this._playBtn.addEventListener('click', function(event){
            player._audioController.playPause(event.target.classList[0]);
        });
        this._audioController._controller.addEventListener('loadedmetadata', function(){
            player._progressBar.value = 0;
        })
    }
};

export default player;

