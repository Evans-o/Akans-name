
function myFunction() {
  
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var male= document.getElementById("male")
  var female=document.getElementById("female")
  var done=document.getElementById("done")
  var dateOfTheWeek = new Date (year + "/" + month + "/" + day)
  var result = dateOfTheWeek.getDay()

  var male= ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
  var female= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
  
  var daysOfTheWeek = ["sunday","Monday", "Teusday", "Wenesday", "Thursday", "Friday", "Satruday", "Sunday"];

  if (month < 1 || month > 12) {
    done.innerHTML = "Invalid month try again";
  }

  else if (day <=0 || day > 31) {
    done.innerHTML ="Invalid date try again";
  }

 else if (year < 1900) {
  done.innerHTML = "Invalid year try again";
 }
  else if (male.checked) {
    done.innerHTML = alert("you were born on " + daysOfTheWeek[result] + " and your Akan name is " + male[result])
  }
  else {
    done.innerHTML= alert("you were born on " + daysOfTheWeek[result] + " and your Akan name is " + female[result])
  }
}