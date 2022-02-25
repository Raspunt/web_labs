

let div = document.createElement('div')
let textNode = document.createTextNode("шутка");
document.body.append(div);
div.append(textNode);


div.classList.add('goose');

let goose = document.querySelector(".goose")
goose.style.margin = "50px";



function milti(){

    let inp1 = document.getElementById('inp_1').value;
    let inp2 = document.getElementById('inp_2').value;

    console.log(inp1*inp2);


}
