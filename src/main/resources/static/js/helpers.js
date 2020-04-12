
  function validateForm() {
    // ensure that a note is not submitted with an empty name or text input
    var a = document.forms["noteForm"]["noteName"].value;
    var b = document.forms["noteForm"]["noteText"].value;

    if (a == null || a == "" || b == null || b == "") {
      alert("Note name and note text cannot be empty.");
      return false;
    }
    return true;
  }

 function convertDate(d) {
   // convert the date for comparison
   var p = d.split("/");
   return +(p[0]+p[1]+p[2]);
 }

 function sortByDate() {
   var tbody = document.querySelector("#notes tbody");
   // get rows as array for ease of use
   var rows = [].slice.call(tbody.querySelectorAll("tr"));

   rows.sort(function(a,b) {
   // sort the rows in date order
     return convertDate(b.cells[2].innerHTML) - convertDate(a.cells[2].innerHTML);
   });

   rows.forEach(function(v) {
    // move rows so they appear in the correct, sorted order in the table
     tbody.appendChild(v);
   });
 }
