function sumData(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = Number(a) + Number(b);
    document.getElementById('ans').innerHTML = c;
    // window.alert('Sum of ' + a + ' and ' + b + ' is '+ c);
    console.log('Sum of ' + a + ' and ' + b + ' is '+ c);
    document.getElementById('symbol').innerHTML = '+';
}

function subData(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = a - b;
    document.getElementById('ans').innerHTML = c;
    document.getElementById('symbol').innerHTML = '-';
}

function multiData(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = a * b;
    document.getElementById('ans').innerHTML = c;
    document.getElementById('symbol').innerHTML = 'x';
}

function divData(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = a / b;
    document.getElementById('ans').innerHTML = c;
    document.getElementById('symbol').innerHTML = '/';
}

function powData(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = a ** b;
    document.getElementById('ans').innerHTML = c;
    document.getElementById('symbol').innerHTML = '^';
}

function testfun(){
    document.getElementById('test1').innerHTML='i\'m abcd xyz';
}