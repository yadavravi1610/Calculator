// let string = "";

// let buttons = document.querySelectorAll('.button');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');
//         if (value === '=') {
//             string = eval(string);
//             document.querySelector('#display').innerHTML = string;
//         } else if (value === 'ac') {
//             string = '';
//             document.querySelector('#display').innerHTML = string;
//         } else if (value === '%') {
//             string = parseFloat(string) / 100;
//             document.querySelector('#display').innerHTML = string;
//         } else if (value === 'sign') {
//             string = parseFloat(string) * -1;
//             document.querySelector('#display').innerHTML = string;
//         } else {
//             string += value;
//             document.querySelector('#display').innerHTML = string;
//         }
//     });
// }




var button = document.getElementsByClassName('button');

var display = document.getElementById('display');

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value){
    return value == '+' || value == '-' || value == '*' || value == '/';
}

for(var i = 0; i < button.length; i++)
{
    button[i].addEventListener('click',function(){

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(isOperator(value))
        {
            operator =value;
            operand1 = parseFloat(text);
            display.textContent = '';
        }
        else if(value =='ac')
        {
            operand1 = parseFloat(text);
            display.textContent ='0';
        }
        else if(value =='sign')
        {
            operand2 = -1* parseFloat(text);
            display.textContent = operand2;
        }
        else if(value == '%')
        {
            operand2 = parseFloat(text) / 100;
            display.textContent = operand2;
        }
        else if(value == '.')
        {
            if( text.length == 0)
            {
                display.textContent = '0' + '.';
            }
            else if(text.length && !text.includes('.'))
            {
                display.textContent = text + '.';
            }
        }
        else if(value == '=')
        {
            operand2 = parseFloat(text);
            var result = eval(operand1 + operator + operand2);
            if(result)
            {
                operand1 = result;
                display.textContent = operand1;
                operand2 = null;
                operator = null;
            }
        }
        else{
            display.textContent += value;
        }
    });
}



// //  second logic

// let string = "";

// let buttons = document.querySelectorAll('.button');

// for( var i = 0; i < buttons.length ; i++)
// {
//     buttons[i].addEventListener('click',(e)=>{
        
//         // var value = this.getAttribute('data-value');
//         if(e.target.innerHTML == '=')
//         {
//             string = eval(string);
//             document.querySelector('#display').textContent = string;
//         }
//         else if(e.target.innerHTML == 'ac')
//         {
//             string = '';
//             document.querySelector('#display').textContent = string;
//         }
//         else if(e.target.innerHTML == '%')
//         {
//             string = parseFloat(text) / 100 ;
//             document.querySelector('#display').textContent = string;
//         }
//         else if(e.target.innerHTML == 'sign')
//         {
//             string = parseFloat(text) * -1 ;
//             document.querySelector('#display').textContent = string;
//         }
//         else
//         {
//             string = string + e.target.innerHTML ;
//             document.querySelector('#display').textContent = string;
//         }
        
//     }
//     )

// }

