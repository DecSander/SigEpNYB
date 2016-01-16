$(document).ready(function() {
  $(".eventInput").keyup(function(event){
    if (event.keyCode == 13){
      addEvent();
    }
  });

  $('#startTimeButton').datepicker({orientation: "top"})
    .on('changeDate', function(clickEvent) {
      $('#startTime').val(dateToPaddedString(clickEvent.date));
      $(this).datepicker('hide');
    });
  $('#endTimeButton').datepicker({orientation: "top"})
    .on('changeDate', function(clickEvent) {
      $('#endTime').val(dateToPaddedString(clickEvent.date));
      $(this).datepicker('hide');
    });
});

/**
 * Sends a new event to the server
 */
function addEvent() {
  var data = buildObj(['title', 'description', 'startTime', 'endTime']);
  var startTime = new Date(data['startTime']);
  var endTime = new Date(data['endTime']);
  var offset = (new Date()).getTimezoneOffset() / 60;
  startTime.setHours(startTime.getHours() + offset);
  endTime.setHours(endTime.getHours() + offset);
  data.startTime = startTime.getTime();
  data.endTime = endTime.getTime();

  sendRequest('POST', 'Events', data, 'json', true, null, function() {
    swal({
      title: 'Event Created!',
      text: 'Check your dashboard to see it on the calendar', 
      type: 'success', 
      closeOnConfirm: true
    }, function() {
      clearIds(['title', 'description', 'startTime', 'endTime']);
    });
  }, function() {
    swal({
      title: 'Event Creation Failed :(',
      text: 'Please make sure all of the fields are filled out',
      type: 'error',
      closeOnConfirm: true
    });
  });
}