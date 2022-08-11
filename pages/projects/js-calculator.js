import Head from 'next/head'

export default function Calculator () {
    return (
        <>
            <Head>
            <title>Javascript Calculator(coming soon)</title>
            </Head>
            <h1>Coming Soon</h1>
            {/* <h1>JavaScript Calculator</h1>
            <p>Enter numbers that you wish to be calculated, then simply press on one of the operator buttons to see your calculations!</p>
            <div className="calculator">
                <form action='/api/calc-form' method='POST'> */}
                    {/* first number input */}
                    {/* <input 
                    className='num1'
                    type='number' 
                    name='firstNumber'
                    id='first'
                    /> */}

                    {/* second number input */}
                    {/* <input 
                    className='num2'
                    type='number' 
                    name='secondNumber'
                    id='second'
                    /> */}


                    {/* operator buttons */}
                    {/* <button type='submit' onClick={add}>+</button>
                    <button type='submit'>-</button>
                    <button type='submit'>*</button>
                    <button type='submit'>/</button> */}

                    {/* display */}
                    {/* <p className='output'></p>
                </form>
            </div> */}
        </>
        
    )
}


// function calculator (userFirstNumber, userSecondNumber, operator) {
//     return operator(userFirstNumber, userSecondNumber);
//   }
  
  // function add(userFirstNumber, userSecondNumber) {
  //   let userNumber1 = document.querySelector('.num1').value
  //   let userNumber2 = document.querySelector('.num2').value

  //   let addition = parseInt(userNumber1)+parseInt(userNumber2);
  //   let result = document.querySelector('.output').innerHTML = 'The sum of two numbers: ' + addition;

  //   return result;

  // }
  
//   function subtract(userFirstNumber, userSecondNumber) {
//     let userNumber1 = document.querySelector('.num1').value
//     let userNumber2 = document.querySelector('.num2').value

//     let subtraction = parseInt(user1)-parseInt(user2);
//     let result = document.querySelector('.output').innerHTML = 'The subtraction of two numbers: ' + subtraction;

//     return result;
//   }
  
//   function divide(userFirstNumber, userSecondNumber) {
//     let userNumber1 = document.querySelector('.num1').value
//     let userNumber2 = document.querySelector('.num2').value

//     let multiplication = parseInt(userNumber1)*parseInt(userNumber2);
//     let result = document.querySelector('.output').innerHTML = 'The multiplication of two numbers: ' + multiplication;

//     return result;
//   }
  
//   function multiply(userFirstNumber, userSecondNumber) {
//     let userNumber1 = document.querySelector('.num1').value
//     let userNumber2 = document.querySelector('.num2').value

//     let division = parseInt(userNumber1)/parseInt(userNumber2);
//     let result = document.querySelector('.output').innerHTML = 'The division of two numbers: ' + division;

//     return result;
//   }