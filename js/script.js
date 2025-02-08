let input = document.querySelector("#input");

function appendbutton(str){
    if(str === '+' || str === '-' || str === '*' || str === '/' || str === '%' || str === '**')
        input.value += " " + str + " ";
    else
    input.value += str;
}

function clearone(){ 
    if(input.value[input.value.length - 1] === ' ')
    {
        input.value = input.value.slice(0,-3);
        // input.value = input.value.slice(0,-1);
        // input.value = input.value.slice(0,-1);
        if(input.value[input.value.length - 1] === ' ')
            input.value = input.value.slice(0, -1);
    }
    else
    input.value = input.value.slice(0, -1);
}

function clearinput(){
    input.value = "";
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(error)
    {
        input.value = "Error";
    }
}