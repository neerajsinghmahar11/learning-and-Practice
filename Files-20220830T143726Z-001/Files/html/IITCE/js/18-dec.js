function findlen(){
    let txt = document.getElementById('usrin').value;
    document.getElementById('usrot').innerHTML = "<hr> Length of Data is " + txt.length;
}

function slicefun(){
    let s = document.getElementById('startnum').value;
    let e = document.getElementById('endnum').value;
    let usr = document.getElementById('usrin').value;
    let temp = usr.slice(Number(s),Number(e));
    document.getElementById('usrot').innerHTML = temp;
}

function substringfun(){
    let s = document.getElementById('startnum').value;
    let e = document.getElementById('endnum').value;
    let usr = document.getElementById('usrin').value;
    let temp = usr.substring(Number(s),Number(e));
    document.getElementById('usrot').innerHTML = temp;
}

function substrfun(){
    let s = document.getElementById('startnum').value;
    let e = document.getElementById('endnum').value;
    let usr = document.getElementById('usrin').value;
    let temp = usr.substr(Number(s),Number(e));
    document.getElementById('usrot').innerHTML = temp;
}

function replaceData(){
    let o = document.getElementById('odata').value; 
    let n = document.getElementById('ndata').value; 
    let usr = document.getElementById('usrin').value;
    let newTxt = usr.replace(o,n);
    document.getElementById('usrot').innerHTML = newTxt;
}


function upperfun(){
    let d = document.getElementById('usrin').value;
    document.getElementById('usrot').innerHTML = d.toUpperCase();
}

function lowerfun(){
    let d = document.getElementById('usrin').value;
    document.getElementById('usrot').innerHTML = d.toLowerCase();
}

function trimfun(){
    let d = document.getElementById('usrin').value;
    document.getElementById('usrot').innerHTML = d.trim();
}

function searchfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    let o = d.search(s)
    document.getElementById('usrin').innerHTML = o;
}