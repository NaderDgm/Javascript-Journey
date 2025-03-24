function convert(){
    let s=parseFloat(document.getElementById("s").value);
    let R=s/60;
    let H=s/3600;
    alert("La conversion de "+s+" secondes en minutes est : "+R+" minutes et en heures est : "+H+" heures");
}