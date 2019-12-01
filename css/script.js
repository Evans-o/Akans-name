<label for="gender">Gender </label>
<select name="gender:required" id="gender">
  <option>[[+gender]]</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
</select>

<label for="gender">Gender </label>
<select name="gender:required" id="gender">
  <option>[[+gender]]</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
</select>
<p>Enter your date of birth.</p>
<input type="button" value="submmit" onclick="myDate()" />
    
    <input id="date" type="text" name="input" placeholder="YYYY-MM-DD" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" title="Enter a date in this format YYYY-MM-DD" required />

    <p id="myId"></p>
<script>
    function myDate() {
    var a = new Date("11/23/2019");
    var days = new Array(7);
    days[0] = "Name: kwasi, Born:Sunday";
    days[1] = "Name: Kwado, Born:Monday";
    days[2] = "Name: Kwabena, Born:Teusday";
    days[3] = "Name: Kwaku, Born:Wenesday";
    days[4] = "Name: Yaw, Born:Thursday";
    days[5] = "Name: Kofi, Born:Friday";
    days[6] = "Name: Kwamo, Born:Saturday";
    var r = alert(days[a.getDay()]);
    ocument.getElementById("date").innerHTML = r;
  }

</script>