function runloop(){
    let num = document.getElementById('usrinp').value; 
    let text = "";
    let n = Number(num);
    let temp = "";

    for(let a=1;a<=10;a++){
        text = n*a;
        temp += num + " x " + a + " = " + text + "<br>";
    } 
    
    document.getElementById('ans').innerHTML = temp;
}