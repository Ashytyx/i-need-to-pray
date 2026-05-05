function clearForm() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("myForm").reset();
  console.log("form reset");
  alert("Purchase confirmed, thank you for buying! " + name);
}
