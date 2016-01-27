/*

Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Large gaps go first, then smaller ones: 'Lorem---ipsum---dolor--sit--amet' (3, 3, 2, 2 spaces).
Last line should not be justified, use only one space between words.
Last line should not contain '\n'
Strings with one word do not need gaps ('somelongword\n').


Example with width=30:

Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.

Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

Have fun :)

*/

/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {  
  str = str.split(' ');
  var curLine = str[0];
  var justified = '';
  function addSpaces(curLine, numSpaces) {
    curLine = curLine.split(' ');
    while(numSpaces > 0) {
      for(var j = 0; j < curLine.length - 1; j++) {
        if(numSpaces <= 0) {
          break;
        } else {
          curLine[j] = curLine[j] + ' ';
          numSpaces--;
        }
      }
    }
    return curLine.join(' ');
  }
  for(var i = 1; i < str.length; i++) {
    if((curLine + ' ' + str[i]).length <= len) {
      curLine += ' ' + str[i];
    } else {
      var spacesToAdd = len - curLine.length;
      justified += spacesToAdd > 0 ? addSpaces(curLine, spacesToAdd) + '\n' : curLine + '\n';
      curLine = str[i];
    }
  }
  return justified + curLine;
};

console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus dui leo, et malesuada nisi molestie ut. Etiam sit amet fermentum ligula, id scelerisque metus. Pellentesque rhoncus orci quis nisi convallis volutpat. Vestibulum a orci commodo, condimentum leo sed, ultricies nunc. Ut eu lobortis leo. Nam a erat ultricies ipsum eleifend imperdiet. Aliquam faucibus rutrum arcu, condimentum ultricies tortor ornare ut. Phasellus placerat eleifend nunc eget luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor urna, iaculis id rutrum vitae, dignissim quis dolor.', 30))


console.log(justify('AB C', 2));







