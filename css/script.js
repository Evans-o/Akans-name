
var century, year, month, day
function myWork(){
  century=parseInt(document.getElementById("century").value)
  year=parseInt(document.getElementById("year").value)
  month=parseInt(document.getElementById("month").value)
  day=parseInt(document.getElementById("day").value)
  male = document.getElementById("male").value;
  female = document.getElementById("female")
  var dateOftheweek = new Date ( year + "/" + month + "/" day);
  var result =dateOftheweek.getDay();

  var day = ["monday","Tuesday", "Wednesday", "thursday","friday", "saturday", "sunday"];
  var male  = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kof", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];}