function separer(){
    let name=(document.getElementById("name").value);
    let e=name.indexOf(" ")
    let table=name.slice(0,5)
    let lastname=name.slice(5,20)
    console.log(table)
    console.log(lastname)

}