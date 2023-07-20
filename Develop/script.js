$(function () {
  var currentDayEL = $("#currentDay");
  var currentDayTime = dayjs().format("dddd, MMMM D");

  // Get all save buttons
  var saveBtn = $(".saveBtn");
  currentDayEL.text(currentDayTime);

  // Function to update classes (past, present, future)
  function updateClasses() {
    var currentHour = dayjs().hour();

    // Loop through each time block
    $(".time-block").each(function () {
      var timeBlock = $(this);

      // Take the hour from the time block id
      var hour = parseInt(timeBlock.attr("id").split("-")[1]);

      // Remove classes (past, present, future)
      timeBlock.removeClass("past present future");

      if (hour === currentHour) {
        timeBlock.addClass("present");
      } else if (currentHour > hour) {
        timeBlock.addClass("past");
      } else {
        timeBlock.addClass("future");
      }
    });
  }

  // Function to load saved events from localStorage
  function loadSavedEvents() {
    // Loop through each time block
    $(".time-block").each(function () {
      var timeBlock = $(this);

      // Get the saved event from localStorage
      var event = localStorage.getItem(timeBlock.attr("id"));

      if (event) {
        timeBlock.find("textarea").val(event);
      }
    });
  }

  // Function to handle the click event on the save buttons and save the content to localStorage
  function saveEvent(event) {
    var currentButton = $(event.target);
    var textArea = currentButton.siblings("textarea");
    var parentId = currentButton.parent().attr("id");

    localStorage.setItem(parentId, textArea.val());
  }

  // Bind the click event to the save buttons and call the saveEvent function when clicked
  saveBtn.on("click", saveEvent);

  // Load saved events and update classes when on page refresh
  loadSavedEvents();
  updateClasses();
});
