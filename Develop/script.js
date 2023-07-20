$(function () {

  var currentDayEL = $("#currentDay")
  var currentDayTime = dayjs().format("dddd, MMMM D")
  var saveBtn = $(".saveBtn")
  console.log(currentDayTime)

  currentDayEL.text(currentDayTime)

  var currentHour = dayjs().hour()

  console.log(currentHour)


  for (let i = 9; i < 18; i++) {
    var timeBlock = $("hour-" + i)
    var event = localStorage.getItem("hour-" + i)

    console.log(event)
    timeBlock.children()


    if (event) {
      
      timeBlock.find("textarea").val(event);
    }

    if (i === currentHour) {
      timeBlock.addClass("present")
    }
    else if (currentHour > i) {
      timeBlock.addClass("past")
    }
    else {
      timeBlock.addClass("future")
    }
  }


  function saveEvent(event) {
    var currentButton = $(event.target)
    var textArea = currentButton.siblings("textarea")
    var parentId = currentButton.parent().attr("id")

    alert(textArea.val() + " " + parentId)

    localStorage.setItem(parentId, textArea.val())


  }


  saveBtn.on("click", saveEvent)
var value = $(this).siblings(".description").val()
var time = $(this).parent().attr("id")
localStorage.setItem(parentId, textArea.val)

});
