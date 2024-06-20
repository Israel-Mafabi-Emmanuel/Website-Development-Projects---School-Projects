// scopes
// global scope
//let _name = "EMMANUEL";

//let is_name_found = (_name == "EMMANUEL" && role == "STUDENT") ? "Name Found!" : "Name is not Found!";
//console.log(is_name_found);

//let _name = "BRENDA";
//let role = "STUDENT";

//let is_student = (_name == "BRENDA" && role == "STUDENT") ? "Is Student, Name is found." : "Not Student, Name is not found.";
let steps = 20;

// Loops
// for loop
for(x = 0; x < steps; x++ ) {
    console.log(" Step iteration: " + x);

    if(x === 17) {
        console.log("Reached the destination!");
        break;
    }
}

let step = 0;

// while loop
while(step < steps) {
    // increase step by 1
    step++;
    console.log(" iterations: " + step);
    if(step == steps) {
        console.log(" Step iteration final: " + step);
        break;
    }
}

// do while loop
do {
    step++;
    console.log(" iterations: " + step);
} while(step < steps);