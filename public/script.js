// Dark mode toggle functionality
$(document).ready(function () {
  $('#darkModeToggle').on('click', function() {
    $("body").toggleClass('dark-mode');
  })
});