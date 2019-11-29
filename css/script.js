('#submit').click(function(){
  var date = parseInt($('#date').val());
  var month = parseInt($('#month').val());
  var year = parseInt($('#year').val());
  if (isNaN(date) || isNaN(month) || isNaN(year)) {
    alert('wrong format');
    return false;
  } else {
    if (date > 31 || date < 1) {
      alert('wrong date');
      return false;
    } else if ((month==4 || month==6 || month==9 || month==11) && date ==31) {
      alert('wrong date');
      return false;
    } else if (month==2) {
     var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
      if (date> 29 || (date ==29 && !isleap))
      	alert('wrong date');
        return false;
    }
    if (month > 12 || month < 1) {
      alert('wrong month');
      return false;
    } 
    if (year > 2050 || year < 1900) {
      alert('wrong year');
      return false;
    } 
  }
  ('#myform').submit();
});
