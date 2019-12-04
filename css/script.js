
function myFunction() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var male= document.getElementById("male")
  var female=document.getElementById("female")
  var demo =document.getElementById("demo")
  var dateOfTheWeek = new Date (year + "/" + month + "/" + day)
  var result = dateOfTheWeek.getDay()

  var male= ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
  var female= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
  
  var daysOfTheWeek = ["sunday","Monday", "Teusday", "Wenesday", "Thursday", "Friday", "Satruday", "Sunday"];

  if (month < 1 || month > 12) {
    demo.innerHTML = "Invalid month try again";
  }

  else if (day <=0 || day > 31) {
    demo.innerHTML ="Invalid date try again";
  }

 else if (year < 1900 || year >2020) {
  demo.innerHTML = "Invalid year try again";
 }
    else if (male.checked===true) {
    alert("you were born on " + daysOfTheWeek[result] + " and your Akan name is " + male[result])
  }
else{
  alert("you were born on " + daysOfTheWeek[result] + " and your Akan name is " + female[result])
  }
}