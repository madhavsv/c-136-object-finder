function setup() {
    canvas = createCanvas(390,350);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}
function draw() {
    image(VIDEO, 0, 0, 480, 380);
}
function start() {
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:Detection objects";
    document.getElementById("item").value;
}
function modelLoaded() {
    console.log("Model loaded!")
    status = true;
}