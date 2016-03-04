var i;

var colour = prompt('A colour (orange, indigo, etc.)');

var aCreature = prompt('A creature (dragon, moth, etc.)');

var anAdjective = prompt('An adjective (beautiful, super, etc.)');

var aVerb = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like? a) Snacking b) Escaping c) Winning Enter the letter below:');

switch (story) {

case 'a':
var a = function () {
  document.write('a');
};

break;

case 'b':
var a = function () {
  document.write('b');
};

break;

case 'c':
var a = function () {
  document.write('c');
};
break;
};
