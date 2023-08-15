function firstConditionfun(){
    let a = document.getElementById('inp').value;
    if(a==100){
        document.getElementById('ot').innerHTML = 'You Win';
    }
}

function nestifFun(){
    let a = document.getElementById('inp1').value;
    let b = document.getElementById('name').value;
    if(a>18){
        document.getElementById('ot1').innerHTML = 'Hey ' + b + ', Your age is Above 18, Please Next Line for Eligibality';
        if(a<50){
            document.getElementById('ot2').innerHTML = 'Hey ' + b + ', Congrats you are Eligibal';
        }
    }
}

function oddEvenFun(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('name').value;

    if(a%2==0){
        document.getElementById('ot3').innerHTML = 'Even Number';
        document.getElementById('ot3').style.backgroundColor = 'green';
        document.getElementById('ot3').style.color = 'white';
    }else{
        document.getElementById('ot3').innerHTML = 'Odd Number';
        document.getElementById('ot3').style.backgroundColor = 'red';
        document.getElementById('ot3').style.color = 'white';
    }

}


function weekdayFun(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('name').value;
    let c;

    if(a==1){
        c = 'Sunday';
    }
    else if(a==2){
        c = 'Monday';
    }
    else if(a==3){
        c = 'Tuesday';
    }
    else if(a==4){
        c = 'Wednesday';
    }
    else if(a==5){
        c = 'Thursday';
    }
    else if(a==6){
        c = 'Friday';
    }
    else if(a==7){
        c = 'Saturday';
    }
    else{
        c = 'Wrong Input';
    }

    document.getElementById('ot3').innerHTML = 'Hey ' + b + ' You enter ' + c;

}


function darklightmode(){
    let e = document.body;
    e.classList.toggle('dark-theme');
}

