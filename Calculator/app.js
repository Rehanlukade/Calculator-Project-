function display_reset(){
    let output = document.querySelector('.output-child');
    output.value = 0;
}

function display_del(){
    let output = document.querySelector('.output-child');
    let updated_value = output.value.slice(0, -1);
    output.value = updated_value;
}

function display_answer(){
    let equation = document.querySelector('.output-child');
    let stringg = '';
    for(let i=0; i<equation.value.length; i++){
        if(equation.value[i] === '×'){
            stringg += '*';
        }
        else{
            stringg += equation.value[i];
        }
    }
    let result = eval(stringg);
    equation.value = result;
}

function display_7(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 7;
        return;
    }
    output.value += 7;
}

function display_8(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 8;
        return;
    }
    output.value += 8;
}

function display_9(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 9;
        return;
    }
    output.value += 9;
}

function display_4(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 4;
        return;
    }
    output.value += 4;
}

function display_5(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 5;
        return;
    }
    output.value += 5;
}

function display_6(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 6;
        return;
    }
    output.value += 6;
}

function display_plus(){
    let output = document.querySelector('.output-child');
    let last_value = output.value[output.value.length-1];

    if(last_value == '/' || last_value == '-' || last_value == '×' || last_value == '.'){
        let updated_value = output.value.slice(0,-1);
        updated_value += '+';
        output.value = updated_value;
        return;
    }
    if(output.value[output.value.length-1] == '+'){
        return;
    }
    output.value += '+';
    
    console.log(output.value.length)
}

function display_1(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 1;
        return;
    }
    output.value += 1;
}

function display_2(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 2;
        return;
    }
    output.value += 2;
}

function display_3(){
    let output = document.querySelector('.output-child');
    if(output.value.length == 1 && output.value == 0){
        output.value = 3;
        return;
    }
    output.value += 3;
}

function display_minus(){
    let output = document.querySelector('.output-child');
    let last_value = output.value[output.value.length-1];

    if(last_value == '+' || last_value == '/' || last_value == '×' || last_value == '.'){
        let updated_value = output.value.slice(0,-1);
        updated_value += '-';
        output.value = updated_value;
        return;
    }
    if(output.value[output.value.length-1] == '-'){
        return;
    }
    output.value += '-';
}

function display_dot(){
    let output = document.querySelector('.output-child');
    if(output.value[output.value.length-1] == '.'){
        return;
    }
    output.value += '.';
}

function display_0(){
    let output = document.querySelector('.output-child');
    output.value += 0;
}

function display_divide(){
    let output = document.querySelector('.output-child');
    let last_value = output.value[output.value.length-1];

    if(last_value == '+' || last_value == '-' || last_value == '×' || last_value == '.'){
        let updated_value = output.value.slice(0,-1);
        updated_value += '/';
        output.value = updated_value;
        return;
    }

    if(last_value == '/'){
        return;
    }

    output.value += '/';
}

function display_multiply(){
    let output = document.querySelector('.output-child');
    let last_value = output.value[output.value.length-1];

    if(last_value == '+' || last_value == '-' || last_value == '/' || last_value == '.'){
        let updated_value = output.value.slice(0,-1);
        updated_value += '×';
        output.value = updated_value;
        return;
    }
    if(last_value == '×'){
        return;
    }
    output.value += '×';
}