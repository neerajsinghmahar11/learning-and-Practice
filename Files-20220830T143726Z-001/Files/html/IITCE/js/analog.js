function rotateNeedle(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hr = 30*h + m/2;
    mr = 6*m;
    sr = 6*s;
    
    
    hrs.style.transform = `rotate(${hr}deg)`;
    mns.style.transform = `rotate(${mr}deg)`;
    scs.style.transform = `rotate(${sr}deg)`;
    
}

setInterval(() => {
    rotateNeedle();
}, 1000);