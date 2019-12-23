function eventCheck(e) {
 var date = new Date();
 var endDate = new Date(Date.parse(date) + (1000 * 60 * 60 * 24 *1));
  Logger.log("e:"+e);
 Logger.log("now:"+date);
 Logger.log("endDate:"+endDate);
   var events = CalendarApp.getDefaultCalendar().getEvents(date, endDate);
   for (var i in events) {
    var title = events[i].getTitle();
    var StartTime = events[i].getStartTime();
       Logger.log(title);
     Logger.log(StartTime);
  }
}


function hoge (){
 var date = new Date();
 var now = Moment.moment().format("YY-MM-DD HH:mm:ss").toString();
 var moment = Moment.moment().add(1, 'days').format("YY-MM-DD HH:mm:ss").toString();
 Logger.log("typeof:"+ date.setMonth(date.getDate() + 1));
}