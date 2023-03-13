Webcam.set({
    width:350,
    height:350,
    image_format:'png' , 
    png_quality:90
})

var CAMERA = document.getElementById('camera');
Webcam.attach('#camera');
function capture(){
    Webcam.snap(function(LOL){
document.getElementById('result').innerHTML = "<img id='capture_LOL' src='"+LOL+"'/>"
})
}

classfier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4TK8sLuhA/model.json', modeloaded);
function modeloaded(){console.log('MODEL IS LOADED LOLLLLL THATS VERY gooooooodood')}

function checkLOL(){ 
    img = document.getElementById("capture_LOL")
    classfier.classify(img , gotresult)
}
function gotresult(error, result){
 if(error){
    console.error(error);
 }
 
else {
    console.log(result)
    document.getElementById("object").innerHTML = result[0].label
    document.getElementById('accuracy').innerHTML = result[0].confidence.toFixed(3);
}

}