function eventCheck1() {
  var date = new Date();
  var endDate = new Date(Date.parse(date) + 1000 * 60 * 60 * 24 * 1);
  Logger.log("now:" + date);
  Logger.log("endDate:" + endDate);
  var events = CalendarApp.getDefaultCalendar().getEventsForDay(date);
  for (var i in events) {
    var title = events[i].getTitle();
    var startTime = events[i].getStartTime();
    var getEndTime = events[i].getEndTime();
    var getCreators = events[i].getCreators();
    var getGuestList = events[i].getGuestList();
    var getDescription = events[i].getDescription();
    Logger.log("events:" + events.length);
    Logger.log("events:" + JSON.stringify(events[i].getTitle()));
  }

  data =
    title +
    ":" +
    startTime +
    ":" +
    getEndTime +
    ":" +
    getCreators +
    ":" +
    getGuestList +
    ":" +
    getDescription;

  var options = {
    method: "post",
    payload: JSON.stringify(data),
    muteHttpExceptions: true,
    contentType: "application/json"
  };
  var SlackToken = PropertiesService.getScriptProperties().getProperty(
    "SlackToken"
  );
  var response = UrlFetchApp.fetch(SlackToken, options);
  var responseCode = response.getResponseCode();
  var responseBody = response.getContentText();

  if (responseCode === 200) {
    var responseJson = JSON.parse(responseBody);
    // ...
  } else {
    Logger.log(
      Utilities.formatString(
        "Request failed. Expected 200, got %d: %s",
        responseCode,
        responseBody
      )
    );
    // ...
  }
}
