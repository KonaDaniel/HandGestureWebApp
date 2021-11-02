//Webcam Settings
Webcam.set({
    width: 360 ,
    height: 310 ,
    image_format: 'png' ,
    png_quality: 90  
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

//Vars
prediction_1 = "";
prediction_2 = "";


//Functions
function take_pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speachSynthesis;
    speak_data_1 = "The first Prediction is" + prediction_1;
    speak_data_2 = "The second Prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

//Others
console.log('ml5 version:' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json', modelLoaded);