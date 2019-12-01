<script>
  
<input id="numb" name="name" type="DD" place holder="DD">

<button type="button" onclick="myWork()">Submit</button>

<p id="demo"></p>

<script>
function myWork() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x <= 0 || x > 31) {
     alert("date not valid");
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}