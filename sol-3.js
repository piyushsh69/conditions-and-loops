/*
Loops are control flow structures that allow you to repeatedly execute a block of code as long as a specified condition is true.Loops are crucial for automating repetitive tasks, iterating over data structures, and making your code more concise and efficient.
*/

// Types of Loop:

/*
1). for loop:
The for loop is used when the number of iterations is known beforehand.
    
    
    for(initialization; condition; iteration) {
        code to be executed in each iteration
    }
    
    Eg.
*/
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

/*
Output -
            0
            1
            2
            3
            4
*/

/*
2). while loop:
The while loop is used when the number of iterations is not known beforehand, and the loop continues as long as the specified condition is true.
    
    
    while (condition) {
        code to be executed as long as the condition is true
    }

    Eg.
*/

    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

/*
Output -
            0
            1
            2
            3
            4
*/

/*
3). do...while loop:
The do...while loop is similar to the while loop, but it guarantees that the block of code is executed at least once, even if the condition is initially false.
    
    
    do {
        code to be executed
    } while (condition);

    Eg.
*/

    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 5);

/*
Output -
        0
        1
        2
        3
        4
*/