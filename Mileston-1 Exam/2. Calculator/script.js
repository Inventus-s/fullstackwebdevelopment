let calculate = document.getElementById('calculate');
calculate.addEventListener("click",() => {
    const num1  = Number(document.getElementById('num1').value);
    const operator  = document.getElementById('operator').value;
    const num2  = Number(document.getElementById('num2').value);

    let result ;

        switch (operator) {
            case '+':
                result = num1 + num2 ;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;    
            default:
                alert("Invalid operator");
                return;
        }
        document.getElementById('result').innerText = `${num1} ${operator} ${num2} = ${result}`;
} )
