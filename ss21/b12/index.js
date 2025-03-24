let n = 5;
for (let i = 1; i <= n; i++) {
  document.writeln("*".repeat(i) + "<br>");
}
document.writeln("<br>");
let a = 5;
for (let i = a; i>0; i--) {
  document.writeln("*".repeat(i) + "<br>");
}
document.writeln("<br>");
let c = 5;
for (let i = 1; i <= c; i++) {
  document.writeln("&nbsp;&nbsp;".repeat(c - i) + "*".repeat(i) + "<br>");
}
document.writeln("<br>");
let z = 5;
for (let i = z; i > 0; i--) {
  document.writeln("&nbsp;&nbsp;".repeat(z - i) + "*".repeat(i) + "<br>");
}

