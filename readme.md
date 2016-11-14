## JavaScript Exercises 1 - 2

# Switching from Ruby to JavaScript
## Trish Griego's Takeaways from this assignment:
 1. ``` puts``` equivalent is ```console.log()```

 2. When trying to figure out what's happening in function in Ruby you might use a simple puts or print statement. In JavaScript you will use: console.log("typically needs concatenation to be useful" + function(call))

 3. ```ToDo.setDone(); // complete task.
ToDo.getDone(); // view the done attribute.``` ```getDone()``` is simply the ```👀``` eyes into whats happening in the function. Which means the two expressions are both needed to setDone to true & then to view what is now stored in done attribute.

4. ```node javascript_ex_2.js``` equivalent to ``` ruby fake_ruby_ex_to_be_run_in_terminal.rb```

5. In **"javascript_ex2.js"** Created two potential solutions and found that my terminal didn't throw an error when I attempted to run them both at same time.


## EXERCISES: JS Lesson && Assignment found [here](https://github.com/Ada-Developers-Academy/daily-curriculum/blob/master/topic_resources/javascript/javascript-101.md)

### Exercise #1: Create a ToDo object, with the following properties:

- a task (a string) - a description of the thing to do
- assignee (a string) - the name of a person to do it
- done (a boolean) - is the task done or not?
- getDone (a method) - get the value of done, use "this" in the body of the method.
- setDone (a method) - set the value of done, use "this" in the body of the method.

### Exercise #2: Find the biggest number in the array

- Utilize the stub code below to complete the problem:
 - `getBiggest`should accept an array as a parameter and return a numeric value which corresponds to the largest value
