 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( "#camera" );
function takepicture(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById("result").innerHTML = 
         '<img id="image1" src="'+data_uri+'"/>';
    } );
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XhkGdYWsd/model.json",modelLoaded);
function modelLoaded(){
    console.log("succcessfuly loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak1="first prediction is "+prediction1;
    speak2="second prediction is "+prediction2;
    var speakthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(speakthis);
}