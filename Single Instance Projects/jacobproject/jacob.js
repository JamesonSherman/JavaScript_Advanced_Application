document.getElementById("btn").addEventListener("click",
processFormData = () => {


    let number = document.getElementById('subscribe_frm')[2].value;
    let name = document.getElementById('subscribe_frm')[0].value;
    let email = document.getElementById('subscribe_frm')[1].value;

    if(number.length !== 9){
        alert("nigga this dont work");
    }else{
    let name_Swap_Text = swapcase(name);
    let email_Swap_Text = swapcase(email);

    console.log(name_Swap_Text);
    console.log(email_Swap_Text);

    document.getElementById("list_name").innerHTML = name_Swap_Text;
    document.getElementById("list_email").innerHTML = email_Swap_Text;


    let hex_color = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(hex_color);

    let square = document.getElementById("box");
    square.style.backgroundColor = hex_color;
    }
}, false);


let swapcase = (letters) => {
let newLetters = "";
for(var i = 0; i<letters.length; i++){
    if(letters[i] === letters[i].toLowerCase()){
        newLetters += letters[i].toUpperCase();
    }else {
        newLetters += letters[i].toLowerCase();
    }
}
console.log(newLetters);
return newLetters;
}
//  onclick="processFormData();"