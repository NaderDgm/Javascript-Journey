function distance(){
   let x1= parseFloat(document.getElementById("x1").value);
   let y1= parseFloat(document.getElementById("y1").value);
   let x2=parseFloat(document.getElementById("x2").value);
   let y2=parseFloat(document.getElementById("y2").value);
   let d=Math.sqrt((x2-x1)**2+(y2-y1)**2);
   alert("La distance entre les deux points est :"+d+"Km");

}