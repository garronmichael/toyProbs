/*

We need a HTML menu.... but writing HTML over and-over-again is boooring... Let's just generate it instead!

Task:

Write a function generateMenu() with the following inputs/output:

Inputs:

menuItems: An array of objects (with url and text properties), which represents our menu items

Output:

A string of HTML containing an anchor tag for each element of menuItems (with the appropriate href attribute and text content)

*/

function generateMenu (menuItems) {
  var output = '';
  menuItems.forEach( item => {
    output += `<a href="${item.url}">${item.text}</a>`;
  });
  return output;
}


var inputs = [
    {
        url:"http://www.google.com",
        text:"10^100"
    },
    {
        url:"#codewars",
        text:"codewars"
    },
    {
        url:"#q",
        text:"query"
    },
    {
        url:"#a",
        text:"ans"
    },
    {
        url:"#123",
        text:123
    }
]

console.log( generateMenu([]) ); // ''
console.log( generateMenu(inputs.slice(0,1)) ); // '<a href=\"http://www.google.com\">10^100</a>'
console.log( generateMenu( inputs.slice(1,2) ) ); // '<a href=\"#codewars\">codewars</a>'
console.log(generateMenu( inputs.slice(2,4) ) ); // '<a href=\"#q\">query</a><a href=\"#a\">ans</a>'
console.log( generateMenu( inputs.slice(4) ) ); // '<a href=\"#123\">123</a>'