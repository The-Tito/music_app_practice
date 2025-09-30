

export default{
    AudioController(playlist){
        this._nextSong = playlist;
        this._actualSong = this._nextSong.pop();
    },
    _lastSong: [],
    _nextSong: [],
    _actualSong: null,
    _controller: document.getElementById("media"),
    nextSong(){
        if(this._nextSong.length !== 0){
            this._lastSong.push(this._actualSong);
            this._actualSong =  this._nextSong.pop();
        }
    },
    prevSong(){
        if (this._lastSong.length !==0) {
            this._nextSong.push(this._actualSong);
            this._actualSong = this._lastSong.pop();
        }
    },
    loadSong(){
        this._controller.src = this._actualSong.song.utl;
    },
    playPause(action){
        if(action == 'play'){
            this._controller.play();
        }else{
            this._controller.pause();
        }
    }
    }

