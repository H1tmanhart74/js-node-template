//Write a for loop that counts from 1 to 10 and outputs each number to the console. Then, write a while loop that does the same thing. Include comments explaining the differences between these two approaches.

//A for loop that prints the numbers 1 to 10 to the console
for (let i = 1; i <= 10; i++) {
	/* /\       /\       /\
       |        |        |
       |        |        |_____ increments i by 1
       |        |____ checks if i is less than or equal to 10
       |____ assigns 1 to i
    */
	console.log(i); //prints i to the console
}
/*
What is the code doing?
This is a for loop that will count from 1 to 10 and print each number in the console. The loop starts with let i = 1 which instead of const allows it to be modified and continues as long as i is less than or equal to 10. Then i  increments by 1 until it reaches 10.
*/

//A while loop that prints the numbers 1 to 10 to the console
let i = 1; //<-- i is assigned to 1
while (i <= 10) {
	// /\ while i is less than or equal to 10 run code below
	console.log(i); //prints i to the console
	i++; //increments i by 1
}

/*
What is the code doing?
This is a while loop that counts from 1 to 10 and prints each number in the console. The loop starts with let i = 1 and continues as long as i is less than or equal to 10. Then i increments by 1 until it reaches 10.

Why I did it this way?
All I did was instead of doing let i = 0, I did let i = 1 so that it starts counting from 1 instead of 0 and instead of doing i < 10 I did i <= 10 so that it counts up to 10 instead ending at 9. I personally don't think I changed much from the examples shown.

Differences between the for loop and the while loop:
There are some differences to both of these approaches. 

The for loop allows for control over the iteration process. Meaning it can be set up to iterate as many times as you want it to. The for loops process is in one line making it compact and easy to read. This means the for loop has Initialization, condition, and iteration all in one line.

The while loop will always loop when the condition is true. This means that a while loop will continue to iterate until it is false. The while loops process is done differently, a while loop initializes outside the loop while the condition is inside the loop, and the increments outside the loop.
*/
