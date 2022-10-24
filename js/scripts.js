window.addEventListener("load", function() {
  this.window.addEventListener("submit", handleSubmission)
});


function handleSubmission(event) {
  event.preventDefault();

  const pick1 = this.document.getElementById("flavor1").value;
  const pick2 = this.document.getElementById("flavor2").value;
  const pick3 = this.document.getElementById("flavor3").value;
  let pickArray = [pick1, pick2, pick3];

  const list = document.querySelector("ul#output");
  pickArray.forEach(function(flavor) {
  const item = document.createElement("li");
  item.append(flavor);
  list.append(item);    
  });

}