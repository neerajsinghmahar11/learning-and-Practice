function samplefun(){
    let a = 10;
    let b = 20;
    document.getElementById('ot').innerHTML = `Value of A is ${a} and B is ${b} and their sum is ${a+b}`;
    document.getElementById('ot1').innerHTML = 'Value of A is ' + a + 'and B is ' + b + ' and their sum is '+ (a+b);
} 

function numberfun(){
    document.getElementById('ot').innerHTML = 1/'a';
}