
  function validateForm() {
    var a = document.forms["Form"]["noteName"].value;
    var b = document.forms["Form"]["noteText"].value;

    if (a == null || a == "" || b == null || b == "") {
      alert("Please Fill All Required Field");
      return false;
    }
  }