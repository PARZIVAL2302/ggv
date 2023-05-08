status="";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();

    video =  createCapture(VIDEO);
    video.hide();
}

function start(){
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value();
}

function modelLoaded(){
    console.log("modeLoaded");
    status=true;
}

function draw(){
    image(video, 0, 0, 380, 380);
}