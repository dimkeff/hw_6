****//// TASK_1 ////****

function printTimeout(str, n) {

    let numberTimer = n * 1000;

    setTimeout(() => {

 

      console.log(str);

    }, numberTimer);

    }

printTimeout('HELOO', 2);

 

 

 

****//// TASK_2 ////****

function sumAll(n) {

      if ( n <= 1 ) {

          return 1;

  }

  return n + sumAll ( n - 1 );

}

  console.log(sumAll(2));

  console.log(sumAll(4));

 

 

****//// TASK_3 ////****

function bombTime(str, time) {

                       let score = time;

                       let start = setInterval(() => {

                              if (score > 0) {

                                  console.log(score);

         score--;

      } 

else 

{

          console.log(str)

          clearInterval(start);

                                               }

                               }, 3000);

                               setTimeout(start, time * 3000);

                }

 

                               console.log('Timer for Bomb');

 

 

****//// TASK_4 ////****

  function fact(n) {

    return n ? n * fact( n - 1 ) : 1;

  }

      console.log(fact(3));

      console.log(fact(5));

                 

                  

****//// TASK_6 ////****

  function numberFilt(arr, maxNumber) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] < maxNumber)

        newArr.push(arr[i]);

    }

    return newArr;

  }

console.log(numberFilt([1, 4, 8, 1, 20], 5));            
