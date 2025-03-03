# Loops Reflection

## What was the most challenging concept about loops for you to understand? How did you overcome this challenge?

The most challenging concept about loops was trying to work with objects in arrays. I had to use your examples that you provided in order to make sure everything was right. AI was a benefit to making sure the code was right to as I used it for syntax to write some code too.

## The videos in the lesson demonstrated working with arrays of objects and calculating statistics like K/D ratios. What did you learn from these examples that wasn't immediately clear from the text portion of the lesson?

For me it was the calculations of the k/d ratios as at first I didn’t understand what `Math` was so when I saw `Math.floor` or `Math.random` I was immediately confused. After you explained in the videos I understood what they were and what they did.

## How do you think loops will be useful in building web applications? Can you think of a specific example from a website you use where loops might be used?

I can’t think of a specific example where a website might have used loops as I don’t really notice it or go on websites that might have it. But I do know that loops are useful for running code that needs to be repetitive without having to write it multiple times making the coding process easier. It also makes the code easier to understand and read as you don’t have to write as much.

## If you had to explain the difference between for loops and while loops to a classmate, what would you say?

The difference between a for loop and a while loop is simple, for loops iterate as many times as it needs until it meets its condition, while loops will keep iterating until its condition is false.

# Bonus Questions

### Looping Through Arrays

### Why `i + 1`?

In that example the reason for i + 1 is so that the list doesn’t start with 0 when it iterates. Instead it starts a 1 for the first gun instead of zero.

### This loop accesses each element in the weapons array by its index (`i`). The condition `i < weapons.length` ensures we stop after processing the last item. What happens if we don't stop at `weapons.length`?

Most likely it would start labeling anything after the last iteration as undefined. But what if we replace `weapons.length` with a number like 5? A typeError occurs in the code as it cannot read the properties of undefined.
