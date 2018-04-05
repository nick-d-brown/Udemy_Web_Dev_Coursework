//  This lesson is a coppy of the code from the chrome console that is used
//  to manipulate the google homepage

// NTE: to change the source on the homepage of google need to use 'srcset' not 
    // 'src'

var links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
    links[i].style.border = "2px solid purple";
    links[i].style.background = "pink";

}


var img = document.getElementById("hplogo");

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('href', 'http://www.bing.com');
}
