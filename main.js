var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 Content = event.results[0][0].transcript.toLowerCase();
   console.log(Content);
   if (Content == "") {
    speak();
    }

}


function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function()
    { 
        img_id = "selfie1";
        take_snapshot(); 
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

      }, );

    setTimeout(function()
    { 
        img_id = "";
        take_snapshot(); 
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, );

    setTimeout(function()
    { 
        img_id = "";
        take_snapshot(); 

    }, );

}

 
camera = document.getElementById("camera");
Webcam.set({

});

function take_snapshot()
{
    console.log(img_id);
    //mention div id and selfie ids 
    Webcam.snap(function(data_uri) {
        if(img_id==""){
        document.getElementById("").innerHTML = '<img id="" src="'+data_uri+'"/>';
        }
        if(img_id==""){
            document.getElementById("").innerHTML = '<img id="" src="'+data_uri+'"/>';
        }
        if(img_id==""){
            document.getElementById("").innerHTML = '<img id="" src="'+data_uri+'"/>';
        }
    });
}
