const expressions = [
    {
        operator: "+", 
        result: function(firstOperand, secondOperand)
        {
            console.log('a = ', firstOperand);
            console.log('b = ', secondOperand);
            return firstOperand+secondOperand;
        }
    },
    {
        operator: "-", 
        result: function(firstOperand, secondOperand)
        {
            console.log('a = ', firstOperand);
            console.log('b = ', secondOperand);
            return firstOperand-secondOperand;
        }
    },
    { 
        operator: "*", 
        result: function(firstOperand, secondOperand)
        {
            console.log('a = ', firstOperand);
            console.log('b = ', secondOperand);
            return firstOperand*secondOperand;
        }
    },
    {
        operator: "/", 
        result: function(firstOperand, secondOperand)
        {
            while(secondOperand == 0)
            {
                secondOperand = Math.round(Math.random() * 10);
            }    
            console.log('a = ', firstOperand);
            console.log('b = ', secondOperand);
            return firstOperand/secondOperand;
        }
    }
];

function mainFunction()
{   
    while(true) 
    {
        const randomOperator      = Math.round(Math.random() * 3);  
        const firstRandomOperand  = Math.round(Math.random() * 20 - 10);
        const secondRandomOperand = Math.round(Math.random() * 20 - 10);
        
        const secondRandomOperandString = (secondRandomOperand < 0) ? `(${secondRandomOperand})` : `${secondRandomOperand}`;

        const expectedResult = (expressions[randomOperator].result(firstRandomOperand, secondRandomOperand)).toFixed(1);

        const inputtedResult = prompt(`Enter the number ${firstRandomOperand}${expressions[randomOperator].operator}${secondRandomOperandString}: `);
        
        if(+inputtedResult == +expectedResult) 
        {
            alert('Drink one more :)');
        } 
        else 
        {   
            alert('I think you gotta go sleep now :)');
            break;
        }
    }

}

mainFunction();
