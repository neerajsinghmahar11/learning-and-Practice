function firstOneFun(){
    let name = document.getElementById('Name').value;
    let temp = document.getElementById('inp').value;
    let out = document.getElementById('ot');
    let num = Number(temp);

    if(num%2==0){
        out.innerHTML = 'Number: '+num;
    }else{
        num = num+1;
        out.innerHTML = 'Number: '+num;
    }

}

function firstOddFun(){
    let name = document.getElementById('Name').value;
    let temp = document.getElementById('inp').value;
    let out = document.getElementById('ot');
    let num = Number(temp);
    let x;

   num%2!=0 ? x = num : x = num+1;
    out.innerHTML = x;
}

function secondOneFun(){
    let a;
    let age = document.getElementById('age').value;
    let name = document.getElementById('Name').value;
    let out = document.getElementById('ot');
    let cr;

    a = parseInt(Math.floor((Math.random()*100) + 1));
    if(age < 18)  
        {
            if(a >= 0) cr = 'Pdhai kar'; 
            else if (a >= 10) cr = 'Singing';
            else if (a >= 20) cr = 'Engineering karo';
            else if (a >= 30) cr = 'CA' ;
            else if (a >= 40) cr = 'CS' ;
            else if (a >= 50) cr = 'Shadi' ;
            else if (a >= 60) cr = 'Dance' ;
            else if (a >= 70) cr = 'Cricket' ;
            else if (a >= 80) cr = 'Football' ;
            else if (a >= 90) cr = 'Chess' ;
            else if (a >= 100) cr = 'Kabbadi';
        }
        else
         {   
            if (a >= 0) cr = 'Chai wala' ;
            else if (a >= 10) cr = 'Dhai Wala' ;
            else if (a >= 20) cr = 'B Tech Chai Wala' ;
            else if (a >= 30) cr = 'MCA Chole Bhature Wala' ;
            else if (a >= 40) cr = 'DU Momos Wala' ;
            else if (a >= 50) cr = 'IGNOU Chawmin Wala' ;
            else if (a >= 60) cr = 'BCom Burgers' ;
            else if (a >= 70) cr = 'MTech Rikshawala' ;
            else if (a >= 80) cr = 'MBBS Nukkad' ;
            else if (a >= 90) cr = 'Chai-suta Bar' ;
            else if (a >= 100)  cr = 'MCom Barbar' ; 
         }
         
         out.innerHTML = typeof a;
    

}