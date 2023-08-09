function loopfun(){
    let num = document.getElementById('usrin').value;
    let n = Number(num);
    let temp = "";
    let res = "";

    for(let a = 1; a <= 10; a++){
        res = n*a;
        temp += n + " x " + a + " = " + res + "<br>";
    }

    document.getElementById('ans').innerHTML = temp;
}