status = "";

function preload() {
    img = loadImage('bedroom.png');
}

function setup() {
    canvas = createCanvad(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects!";
}

function modelLoaded() {
    console.log("The model is loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}