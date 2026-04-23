function clearForm()
{
    let name = document.getElementById("nameInput").value;
    document.getElementById("myForm").reset();
    console.log("form reset");
    alert("Pruchase confirmed, thank you for buying! " + name)
}

var body = document.body,
    html = document.documentElement;

    
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var width = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth );


let yPos = 0;
let xPos = width / 2;

let yV = 0;
let xV = 0;

let containerForm = document.getElementById("myForm")



