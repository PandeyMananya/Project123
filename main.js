var nosex = 0;
var nosey = 0;
var LeftWristX = 0;
var RightWristX = 0;
var difference = 0;


function setup(){
    video=createCapture(VIDEO);
video.size(550, 400);
canvas=createCanvas(550, 400);
canvas.position(650, 200);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
    background("pink");
    fill("black");
    stroke("#380839");
    text("Mananya", nosex, nosey);
    textSize(difference);
}
function modelLoaded(){
    console.log("Posenet loaded");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nosex = "+nosex+" nosey = "+nosey);
LeftWristX = results[0].pose.leftWrist.x;
RightWristX = results[0].pose.rightWrist.x;
console.log("Left Wrist X = "+LeftWristX+" Right Wrist X"+RightWristX);
difference = Math.round(LeftWristX - RightWristX);
console.log(difference);
document.getElementById("result").innerHTML = "Width and Height of the square is "+difference+"px";

}
}