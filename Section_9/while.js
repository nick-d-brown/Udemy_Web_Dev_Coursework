// while loop ex 1

var num = 1;

while (num <= 10) {
    console.log(num);
    num+=2; 
}

// will print 1,3,5,9 in console. also doesnt allow for an infinite loop due to incrimenting variable

// while loop ex 2

var num = 1;
while (num <= 20) {
    if (num % 4 === 0) {
        console.log(num);
    }
    num++;
 }

//  will only print multipes of 4 from 1-20

// while loop ex 3

var num = 100;
while(num < 150) {
    console.log(num+1);
    num--; 
}

// infinite loop. will always be less than 150 as the console log always moves up

