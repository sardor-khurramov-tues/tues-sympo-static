function showTopic(topicId, clickedButton) {

  // 1. Hide all topic content blocks
  var contents = document.querySelectorAll('.topic-content');
  contents.forEach(function (content) {
    content.classList.remove('active');
  });

  // 2. Remove 'active' class from all topic buttons
  var buttons = document.querySelectorAll('.topic-button');
  buttons.forEach(function (button) {
    button.classList.remove('active');
  });

  // 3. Show the selected topic content
  var selectedContent = document.getElementById(topicId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }

  // 4. Set the clicked button as 'active' (to highlight it)
  clickedButton.classList.add('active');
}
