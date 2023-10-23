$(document).ready( () => {
  // hide all answers
  $('.answer').hide();

  // when a question is clicked
  $('.qna').click( (e) => {
    // if the question is already active
    if ($(e.currentTarget).find('.icon-container').hasClass('active')) {
      // remove active class from icon-container
      $(e.currentTarget).find('.icon-container').removeClass('active');

      // slide up answer (child of e)
      $(e.currentTarget).find('.answer').slideUp('slow');

      return;
    }

    // remove active class from all questions
    $('.icon-container').removeClass('active');

    // toggle active class to icon-container
    $(e.currentTarget).find('.icon-container').toggleClass('active');

    // hide all answers
    $('.answer').slideUp();
    
    // slide down answer (child of e)
    $(e.currentTarget).find('.answer').slideToggle('slow');
  });
});