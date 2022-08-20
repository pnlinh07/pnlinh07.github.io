if(! navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    const musics = [];

    window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    window.source = audioCtx.createBufferSource();

    function getAudio() {
        //let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../audio/anh_nang_cua_anh.mp3');
        xhr.responseType = 'arraybuffer';
        xhr.addEventListener('load', () => {
            let playGround = (audioBuffer) => {
                //document.querySelector('body').click();
                //let source = audioCtx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(audioCtx.destination);
                source.volume = 0.8;
                source.loop = true;
                source.addEventListener('ended', function() {
                    getAudio();
                });
                source.start();
            };
            audioCtx.decodeAudioData(xhr.response).then(playGround);
        });
        xhr.send();
    }
    //---------------------------------------------
    window.addEventListener('load', getAudio);

    Object.keys(window).forEach(key => {
        if (/^on/.test(key)) {
            window.addEventListener(key.slice(2), event => {
                if (audioCtx.state !== "running") {
                    audioCtx.resume();
                }
            });
        }
    });
}
