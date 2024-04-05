
window.addEventListener("load", () => {
    let index = 0;
    startWebcam();
    const snapshotButton = document.getElementById("snapshot-button");

    snapshotButton.addEventListener("click", () => {
        index++;
        snapshot();
        document.body.style.backgroundColor = "#FFB6C1";
        
        if (index === 5 ) {
            window.location="question9.html";
        }

    });

    // force exit
    document.addEventListener('keyup', (event) => {
        if (event.keyCode === 27) {
            window.location="question9.html";
        }
    });
});


navigator.getUserMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
);

let video;
let webcamStream;

function startWebcam() {
    if (navigator.getUserMedia) {
        navigator.getUserMedia (
            {
            video: true,
            audio: false
            },

            function(localMediaStream) {
                video = document.querySelector('video');
                video.srcObject=localMediaStream;
                webcamStream = localMediaStream;
            },

            function(err) {
                console.log("The following error occured: " + err);
            }
        );
    } else {
        console.log("getUserMedia not supported");
    }  
}

function stopWebcam() {
    webcamStream.stop();
}

let canvas, ctx;
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
}

function snapshot() {
    document.getElementById("message").style.display = "block";
    ctx.drawImage(video, 0,0, canvas.width, canvas.height);
}
