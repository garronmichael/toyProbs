/*

The businessmen among you will know that it's often not easy to find an appointment. 
In this kata we want to find such an appointment automatically. 
You will be given the calendars of our businessmen and a duration for the meeting. 
Your task is to find the earliest time, when every businessman is free for at 
least that duration.

Example Schedule:

Person | Meetings
-------+-----------------------------------------------------------
     A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
     B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
     C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00
Rules:

All times in the calendars will be given in 24h format "hh:mm", the result must 
also be in that format

A meeting is represented by its start time (inclusively) and end 
time (exclusively) -> if a meeting takes place from 09:00 - 11:00, the next 
possible start time would be 11:00

The businessmen work from 09:00 (inclusively) - 19:00 (exclusively), the 
appointment must start and end within that range

If the meeting does not fit into the schedules, return null or None as result

The duration of the meeting will be provided as an integer in minutes

Following these rules and looking at the example above the earliest time for 
a 60 minutes meeting would be 12:15.

Data Format:

The schedule will be provided as 3-dimensional array. The schedule above 
would be encoded this way:

*/

function getStartTime(schedules, duration) {

  timeToMinutes = function(timeString) {
    var hours = parseInt(timeString.slice(0, 2)) * 60;
    var minutes = parseInt(timeString.slice(3));
    return hours + minutes;
  }

    // reduce solution
    var masterSchedule = schedules.reduce( function(a, b) {
      b.forEach( function(appointmentB) {
        var startTimeB = appointmentB[0];
        var endTimeB = appointmentB[1];
        a.forEach( function(appointmentA, idxA, scheduleA) {
          var startTimeA = appointmentA[0];
          var endTimeA = appointmentA[1];
          // if there is an appointment that starts within a block and ends later
          if(timeToMinutes(startTimeB) > timeToMinutes(startTimeA) && timeToMinutes(startTimeB) < timeToMinutes(endTimeA) && timeToMinutes(endTimeB) > timeToMinutes(endTimeA)) {
            // change the endTimeA
            scheduleA[idxA][1] = endTimeB;
            return;
          // if there is an appointment that ends within a block and starts earlier
          } else if(timeToMinutes(endTimeB) < timeToMinutes(endTimeA) && timeToMinutes(endTimeB) > timeToMinutes(startTimeA) && timeToMinutes(startTimeB) < timeToMinutes(startTimeA)) {
            // change startTimeA
            scheduleA[idxA][0] = startTimeB;
            return;
          // if there is an appointment that starts earlier and ends later
          } else if(timeToMinutes(startTimeB) < timeToMinutes(startTimeA) && timeToMinutes(endTimeB) > timeToMinutes(endTimeA)) {
            // chnage startTimeA and endTimeA
            scheduleA[idxA][0] = startTimeB;
            scheduleA[idxA][1] = endTimeB;
            return;
          // otherwise create a new block
          // always start with longest schedule
          } else {
            // a.push([startTimeB, endTimeB]);
          }
        });
      });
      return a.sort();
    });
  // iterate over schedule to determine free block times and durations
  // return the first free block of the given duration from 9:00 - 19:00
  return masterSchedule;
}

var schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

console.log(getStartTime(schedules, 60)); // '12:15'
// console.log(getStartTime(schedules, 90)); // null











