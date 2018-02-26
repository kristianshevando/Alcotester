var expressions = [
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
        operator: "+", 
        result: function(firstOperand, secondOperand)
        {
            console.log('a = ', firstOperand);
            console.log('b = ', secondOperand);
            return firstOperand+secondOperand;
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

function numberOfDots(inputtedResult)
{
    let dotCounter = 0;
    for(let i = 0; i < inputtedResult.length; i++) 
    {
        if(inputtedResult[i] == ".")
        {
            dotCounter++;
        }
    }
    return dotCounter;
}

function mainFunction()
{   
    let randomOperator;
    let firstRandomOperand;
    let secondRandomOperand;
    
    let secondRandomOperandString;
    let expectedResult;
    let inputtedResult;

    while(true) {
        randomOperator      = Math.round(Math.random() * 3);  
        firstRandomOperand  = Math.round(Math.random() * 20 - 10);
        secondRandomOperand = Math.round(Math.random() * 20 - 10);
        
        if(secondRandomOperand < 0)
            secondRandomOperandString = `(${secondRandomOperand})`; 
        else
            secondRandomOperandString = `${secondRandomOperand}`;
    
        expectedResult = (expressions[randomOperator].result(firstRandomOperand, secondRandomOperand)).toFixed(1);
        console.log('Expected result: ', expectedResult);
        console.log(firstRandomOperand);
        console.log(secondRandomOperand);

        inputtedResult = prompt(`Enter the number ${firstRandomOperand}${expressions[randomOperator].operator}${secondRandomOperandString}: `,);
        console.log(inputtedResult);
        inputtedResult = inputtedResult.replace(",",".");
    
        console.log('Inputted result: ', inputtedResult);
        if(+inputtedResult == +expectedResult) 
        {
            alert('Drink one more :)');
        } 
        else 
        {   
            if(numberOfDots(inputtedResult) > 1)
            {
                alert('Easy up man. There is too many dots :)');
            }
            alert('I think you gotta go sleep now :)');
            break;
        }
    }

}

mainFunction();
