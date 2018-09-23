var i = 1;
var star = "*";
while (i <= 5) {
  console.log(star);
  star += "*";
  i++;
}

for (var i = 0; i < 5; i++) {
  var txt = "";
  for (var j = 0; j < 5; j++) {
    var sum = i + j;
    if (sum % 2 === 0) {
      txt += "+";
    } else {
      txt += "-";
    }
  }
  console.log(txt);
}
