globalVariable = "Welcome";

function outer() {
  alert(globalVariable); // alerts "Welcome"
  var course = "Holberton";

  function inner() {
    alert(globalVariable + " " + course); // alerts "Welcome Holberton"
    var exclamation = "!";

    function inception() {
      alert(globalVariable + " " + course + exclamation); // alerts "Welcome Holberton!"
    }
    inception();
  }
  inner();
}
outer();
