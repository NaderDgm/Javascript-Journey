function add(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    alert(n1+n2); 
}
function soustraction(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    alert( n1-n2); 
}
function multiplication(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    alert("Resultat :"+ n1*n2); 
}
function division(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    if(n2!=0){
        alert("Resultat :"+ n1/n2); 
    }
}