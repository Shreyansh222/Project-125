noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup()
{
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
}
}

function draw()
{
background('#00FFFF');
textSize(difference);
fill('#30D5C8');
text('Shreyansh',50,400);
}