function setup() {
  canvas = createCanvas(250, 250);
  canvas.position(530,320);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",model_loaded);
}
function draw(){
  image(video,0,0,250,250);
  classifier.classify(video,got_results);
}
function model_loaded(){
  console.log("Model is loaded");
}
function got_results(error,results){
  if(error){
    console.error("error");
  }
  else{
    console.log(results);
    document.getElementById("result_object").innerHTML = results[0].label;
    document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}