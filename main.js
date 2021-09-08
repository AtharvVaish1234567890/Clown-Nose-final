var nosex=0;
var nosey=0;

function preload()
{
clown_nose=loadImage("https://i.postimg.cc/FsJfj1sY/red-nose.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet Is Initialized");
}

function gotPoses(results)
{
 if(results.length>0){
     console.log(results);
     nosex = results[0].pose.nose.x-10;
     nosey = results[0].pose.nose.y-10;
     console.log("nosex = "+results[0].pose.nose.x);
     console.log("nosey = "+results[0].pose.nose.y);
 }
}

function draw()
{
image(video, 0, 0, 300, 300);
image(clown_nose, nosex, nosey, 25, 25);
}

function take_snapshot()
{
    save('MY FILTER IMAGE.png');
}