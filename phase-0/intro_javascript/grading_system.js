/*
    GRADING SYSTEM,
    By Israel Mafabi Emmanuel
*/

/*
    GRADES
    A  => 85 - 100
    A- => 75 - 85
    B  => 70 - 75
    B- => 65 - 70
    C  => 60 - 65
*/

let marks = 99;

if(marks >= 85 && marks <= 100) {
    console.log(" You got an A");
} else if(marks >= 75 && marks < 85) {
    console.log(" You got an A-");
} else if(marks >= 70 && marks < 75) {
    console.log(" You got a B");
} else if(marks >= 65 && marks < 70) {
    console.log(" You got a B-");
} else if(marks >= 60 && marks < 65) {
    console.log(" You got a C");
} else {
    console.log(" That's a fail!");
}