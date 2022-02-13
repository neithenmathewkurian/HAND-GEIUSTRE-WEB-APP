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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/moCUWui1R/model.json",modelLoaded);
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
function predictEmotion() {
    img = document.getElementById("image1");
    classifier.classify(img, gotResult);

}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        prediction1=results[0].label;
        prediction2=results[1].label;




        

        document.getElementById("result_emotion_name").innerHTML=prediction;
        speak();
        if(prediction=="good"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(prediction=="super"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(prediction=="deer"){
            document.getElementById("update_emoji").innerHTML="&#129304;";
        }
        if(prediction=="hai"){
            document.getElementById("update_emoji").innerHTML="&#128400;";
        }
        if(prediction=="twice"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
    }
}
    
    
