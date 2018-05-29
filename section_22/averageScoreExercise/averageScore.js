var scores = [90, 98, 89, 100, 100, 86, 94];
 
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

average(scores); //should return 94
average(scores2); //should return 68

console.log(average2(scores));
 //should return 94
console.log(average2(scores2));
  //should return 68

// ======================== My Solution ==========================

function average(array) {
    var totalScore = 0;
    var averageScore;
    for (let i = 0; i < array.length; i++) {
        totalScore+=array[i];
    }
    averageScore = totalScore/array.length;
    averageScore = Math.round(averageScore);

    console.log(averageScore);
     
};

// ======================== Instructor Solution ==========================

function average2(scores) {
    var total = 0;
    // add all scores together
    scores.forEach(function(score) {
        total+=score;
    });

    // divide by total number of scores
    var avg = total/scores.length;
    // round
    return Math.round(avg);
}