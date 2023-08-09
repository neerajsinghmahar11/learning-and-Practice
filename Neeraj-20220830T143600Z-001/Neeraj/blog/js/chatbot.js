function getTime(){
    let dt = new Date();
    let hh = dt.getHours();
    let mm = dt.getMinutes();
    let ss = dt.getSeconds();

    if(hh<10){
        hh = "0" + hh;
    }
    if(mm<10){
        mm = "0" + mm;
    }
    if(ss<10){
        ss = "0" + ss;
    }

    let time = hh + ":" + mm + ":" + ss;
    return time;
}

function getFirstMessage(){
    let cmpMsg = "Welcome! How may i help You?";
    document.getElementById("usrID").innerHTML = '<p class="usrText"><span>' + cmpMsg + '</span></p>';
    let time = getTime();
    document.getElementById("chat-time").innerHTML = time;
}

getFirstMessage();


function getCmpResponse(usrText){
    let cmpMsg = getResponseBackFromCmp(usrText);
    let cmpHTML  = '<p class="usrText"><span>' + cmpMsg + '</span></p>';
    document.getElementById("chatBox").innerHTML += cmpHTML;
}

function getRes(){
    let usrText = document.getElementById("msgBox").value;
    let usrHTML  = '<p class="iusrText"><span>' + usrText + '</span></p>';
    document.getElementById("chatBox").innerHTML += usrHTML;
    document.getElementById("msgBox").value = "";

    setTimeout(() => {
        getCmpResponse(usrText);
    }, 1000);
}

function getResponseBackFromCmp(usrText){
    if(usrText == "hi" || usrText == "hello"){
        return "hello there";
    }else if(usrText == "heart send"){
        return "<3 <3 <3";
    }
    else if(usrText == "what is you name" || usrText == "name please"){
        return "my name is iitce";
    }
    else if(usrText == "i need a job" || usrText == "need job"){
        return "go to abhimanyu sir he will help you for sure";
    }

    else if(usrText == "how are you" || usrText == "sup" || usrText == "whatsapp"){
        return "i am doing good , what about you";
    }
    else{
        return "Try Again";
    }
   
}


    function msgSendBtn(text){
    let usrHTML  = '<p class="iusrText"><span>' + text + '</span></p>';
    document.getElementById("chatBox").innerHTML += usrHTML;
    document.getElementById("msgBox").value = "";

    setTimeout(() => {
        getCmpResponse(text);
    }, 1000);
}

function heartSend(){
    msgSendBtn("heart send");
}

function sendMessage(){
    getRes();
}


var input = document.getElementById("msgBox");

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    
    document.getElementById("click").click();
  }
});