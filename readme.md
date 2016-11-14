## JavaScript Exercises 1 - 2

- JS info & hw Assignment found: [here]("https://github.com/Ada-Developers-Academy/daily-curriculum/blob/master/topic_resources/javascript/javascript-101.md)[//https://github.com/Ada-Developers-Academy/daily-curriculum/blob/master/topic_resources/javascript/javascript-101.md")  

# Switching from Ruby to JavaScript
## Takeaways from this assignment:
 1. ``` puts``` equivalent is ```console.log()```
 2. When trying to figure out what's happening in function in Ruby you might use a simple puts or print statement. In JavaScript you will use: console.log("typically needs concatenation to be useful" + function(call))
 3. ```ToDo.setDone(); // complete task.
ToDo.getDone(); // view the done attribute. ```. getDone() is simply the 👀 eyes for us. Which means the two expressions are both needed to setDone to true && then to view what is now in it.


# EXERCISES:

### Exercise #1: Create a ToDo object, with the following properties:

- a task (a string) - a description of the thing to do
- assignee (a string) - the name of a person to do it
- done (a boolean) - is the task done or not?
- getDone (a method) - get the value of done, use "this" in the body of the method.
- setDone (a method) - set the value of done, use "this" in the body of the method.

### Exercise #2: Find the biggest number in the array

- Utilize the stub code below to complete the problem:
 - `getBiggest`should accept an array as a parameter and return a numeric value which corresponds to the largest value
