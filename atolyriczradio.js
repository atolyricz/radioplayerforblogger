var audio = document.getElementById("audio");
audio.controls = false;
audio.addEventListener('play', function() {
                var playpause = document.getElementById("playpause");
                playpause.title = "pause";
                playpause.innerHTML = "pause";
            }, false);
            audio.addEventListener('pause', function() {
                var playpause = document.getElementById("playpause");
                playpause.title = "play";
                playpause.innerHTML = "play";
            }, false);
            audio.addEventListener("ended", function() { this.pause(); }, false);           


            function togglePlayPause() {

                var playpause = document.getElementById("playpause");

                if (audio.paused || audio.ended) {
                    // Change the title and the text of the button to "pause"
                    playpause.title = "pause";
                    playpause.innerHTML = "pause";

                    audio.play();
                }

                else {

                    playpause.title = "play";
                    playpause.innerHTML = "play";

                    audio.pause();
                }
            }


            function setVolume() {

                var volume = document.getElementById("volume");
                audio.volume = volume.value;
            }


            function toggleMute() {
                audio.muted = !audio.muted;

                if (audio.muted) {
                    mute.title="muted"
                } else {
                    mute.title="notmuted"
                }
            }
