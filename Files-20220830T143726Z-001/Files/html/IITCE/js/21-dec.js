function srfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.search(s);
}

function indexfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.indexOf(s);
}

function lindexfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.lastIndexOf(s);
}

function stwfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.startsWith(s);
}

function ewfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.endsWith(s);
}

function cafun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.charAt(s);
}

function ccafun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.charCodeAt(s);
}

function matchfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.match(s);
}
function includesfun(){
    let d = document.getElementById('usrin').value;
    let s = document.getElementById('sr').value;
    document.getElementById('ot').innerHTML = "Text Found at Position : " + d.includes(s);
}