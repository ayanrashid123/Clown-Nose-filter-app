noseX = 0
noseY = 0
function preload() {
    imagenose =loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();
    poseNet = ml5.poseNet(img, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized')
}
function draw() {
    image(img,0,0,300,300)
   /* fill("crimson")
    stroke("crimson")*/
    image( imagenose ,noseX -250, noseY -150, 20,20)

}
function take_snapshot() {
    save('MySelfie.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
    }
}
