$(document).ready(function() {
  console.log('test')
  var slideIndex = 1
  var emailFormMsg = ''
  showDivs(slideIndex)

  function plusDivsBack() {
    console.log('plusDivs Back')
    showDivs((slideIndex -= 1))
  }
  $('#slider-btn-left').click(plusDivsBack)

  function plusDivsForward() {
    console.log('plusDivs Forward')
    showDivs((slideIndex += 1))
  }
  $('#slider-btn-right').click(plusDivsForward)

  function showDivs(n) {
    var i
    var x = document.getElementsByClassName('mySlides')
    if (n > x.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    x[slideIndex - 1].style.display = 'block'
  }

  setInterval(plusDivsForward, 5000)

  // Email submission form
  function submitEmailAddress() {
    let email = $('#email-input').val()
    if (email === '') {
      $('#emailInputMsg').text('Invalid email address.')
      $('#emailInputMsg').show()
    } else {
      $('#emailInputMsg').text(
        "Great, we'll be sending you email updates shortly."
      )
      $('#emailInputMsg').show()
    }
  }
  $('#submit-email').click(submitEmailAddress)
})
