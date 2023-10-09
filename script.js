var button = document.querySelectorAll('button');

var display = document.getElementById('display');

var operand1 = null;
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
            operand1 = null;
            operand2= null;
            operator= null;
            display.textContent ='0';
        }
        else if(value =='sign')
        {
            if(operator !== null){
                operand2 = -1* parseFloat(text);
                display.textContent = operand2;
            }
            else{
                operand1 = -1* parseFloat(text);
                display.textContent = operand1;
            }
        }
        else if(value == '%')
        {
            if(operator !== null){
                operand2 = parseFloat(text) / 100;
                display.textContent = operand2;
            }
            else{
                operand1 = parseFloat(text) / 100;
                display.textContent = operand1;
            }
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
            var result = eval(operand1 + operator + " "+ operand2);
                operand1 = result;
                display.textContent = operand1;
                operand2 = null;
                operator = null;
        }
        else{
            if(text==0)
            {
                display.textContent = '' +value;
            }
            else{
            display.textContent += value;
            }
        }
    });
}