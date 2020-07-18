function calcule(n) {
  var k = n;
  n = n - 1;
  var s = n.toString();
  var cn = 0;
  for (var i = 0; i < s.length - 1; i++) {
    if (s[i] < s[i + 1]) cn++;
  }
  return cn == s.length - 1 ? n : calcule(k - 1);
}

console.log(calcule(255));
