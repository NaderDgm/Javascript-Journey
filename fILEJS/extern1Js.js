function egal(){
    let n1 =document.getElementById("N1").value;
    let n2=document.getElementById("N2").value;
    let res=document.getElementById("Resultat");
    let somme=document.getElementById("som").value;
    let soutractiono=document.getElementById("sous").value;
    let division=document.getElementById("div").value;
    if(somme.checked){
        res.innerHTML=parseFloat(n1)+parseFloat(n2);
    }else if(soustraction.checked){
        res.innerHTML=parseFloat(n1)-parseFloat(n2);
    }else (division.checked){
    res.innerHTML=parseFloat(n1)/parseFloat(n2);
}}