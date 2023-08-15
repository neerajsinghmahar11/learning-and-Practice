function textRepeater(){
    var t = document.getElementById('txt').value;
    var nt = document.getElementById('nt').value;
    let n = Number(nt);
    var temp = "";
    for(let a = 1;a<=n;a++){
        temp += t + '\n';
    }
    document.getElementById("rs").value = temp;
}   

function copydata(){
    var copyText = document.getElementById("rs");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Copied");
}