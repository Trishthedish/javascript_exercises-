// JAVASCRIPT EXERCISES

//https://github.com/Ada-Developers-Academy/daily-curriculum/blob/master/topic_resources/javascript/javascript-101.md

// Exercise #1: Create a ToDo object, with the following properties:
// a task (string) - a description of the thing to do
// assignee (string) - the name of a person to do it
// done (boolean) - is the task done or not?
// getDone (function) - get the value of done, use "this" in the body of the function.
// setDone (function) - set the value of done, use "this" in the body of the function.

var ToDo = {
	aTask: "this is task.",
	assignee: "Trish",
	done: false, // hasn't been completed yet.

	getDone: function() {
		return this.done;
	},

	setDone: function(done) {
		this.done = true;
		},
	unDone: function(done) {
		this.done = false;
	}
};


console.log("########################################");

ToDo.getDone();
// calling getDone function should simply reveal what state the done attribute is right now. Thus, I predict it will be false.
console.log("ToDo.getDone() Should be false: Should see false here >>> " + ToDo.getDone() + " <<<<");

console.log("--------------------------");

ToDo.setDone(); // complete task.
ToDo.getDone(); // view the done atrribute @ this
console.log("ToDo.setDone is now set true. Should see true here >>> " + ToDo.getDone() + " <<<< ");
// realized the above doesn't work without both statements. This seems like a key difference from Ruby though I can't exactly name it.

console.log("--------------------------");

// Experiment If I can reassign boolean, maybe I can also reassign it again!
ToDo.unDone(); // un-complete task...
ToDo.getDone();
console.log("ToDo.unDone should make done: false. See false here >>> " + ToDo.getDone() + " <<<");

console.log("--------------------------");


// take aways:
// 1. concatenation is key to printing what you want and its what we got when console.log()

// 2. getDone() function is just another type of attr_reader or it servers as our  the eyes: 👀 into whats happening.
