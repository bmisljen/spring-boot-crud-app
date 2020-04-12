
  function validateForm() {
    var a = document.forms["noteForm"]["noteName"].value;
    var b = document.forms["noteForm"]["noteText"].value;

    if (a == null || a == "" || b == null || b == "") {
      alert("Note name and note text cannot be empty");
      return false;
    }
    return true;
  }