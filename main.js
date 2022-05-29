song1= "";
song2 = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("shark.mp3");
}

function setup() 
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 160);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 550, 550);
}

