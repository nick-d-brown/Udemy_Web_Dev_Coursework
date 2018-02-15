//Movie DB

/* Create an array of movie IDBObjectStore. Each movie should have a title,
rating, and hasWatched property. Iterate throught the array and print out 
"You have watched (or not watched if you havent seen it) 'movie' - X stars" */

//My Solution

var movies = [
    {
        title : "Tron",
        rating : 4.5,
        hasWatched : true
    },
    {
        title : "Star Wars: Return of the Jedi",
        rating : 5,
        hasWatched : true
    },
    {
        title : "Lion King",
        rating : 5,
        hasWatched : true
    },
    {
        title : "Fozen",
        rating : 4.5,
        hasWatched : false
    }
]

function movieReview () {
    if (movies[i].hasWatched === true) {
        return "You have watched " + movies[i].title + " - " + movies[i].rating.toString() + " stars";
    }
    else if (movies[i].hasWatched !== true) {
        return "You have not watched " + movies[i].title + " - " + movies[i].rating.toString() + " stars";
    }
}

for (i = 0; i < movies.length; i++) {
    console.log(movieReview());
    
}

//Instructor's solution

var movie = [
    {
        title: "In Bruges", 
        hasWatched: true,
        rating: 5
    }
    {
        title: "Froxen", 
        hasWatched: false,
        rating: 4.5
    }
];

movie.forEach(function(movie){
    var results = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " starts";
    console.log(result);
});



//OR.... with a function

function buildString (movie) {
    var results = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " starts";
    return result;
};

movies.forEach(function(movie){
    console.log(buildString(movie));
});