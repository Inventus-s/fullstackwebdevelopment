// When the modal is clicked, open it
document.getElementById("myModalButton").onclick = function() {
    document.getElementById("myModal").style.display = "block";
  };
  
  // When the close button is clicked, close the modal
  document.getElementById("close").onclick = function(event) {
    if (event.target == this) {
      event.preventDefault();
      document.getElementById("myModal").style.display = "none";
    }
  };
  
  // When the user clicks outside the modal, close it
  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };