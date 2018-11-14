$(document).ready(function() {
  var slideIndex = 1
  var emailFormMsg = ''
  var sliderLive = true
  showDivs(slideIndex)

  function plusDivsBack() {
    showDivs((slideIndex -= 1))
  }
  $('#slider-btn-left').click(() => {
    sliderLive = false
    plusDivsBack()
  })

  function plusDivsForward() {
    showDivs((slideIndex += 1))
  }
  $('#slider-btn-right').click(() => {
    sliderLive = false
    plusDivsForward()
  })

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

  // setInterval(() => {
  //   if (sliderLive) {
  //     plusDivsForward()
  //   }
  // }, 5000)

  // Email submission form
  function submitEmailAddress() {
    if ($('#email-input').val() !== '') {
      // Collect the data into an obj
      let newMessage = {}
      newMessage.email = $('#email-input').val()
      newMessage.phone = $('#phone-input').val()
      newMessage.message = $('#message-input').val()

      console.log(newMessage)

      // Make the jquery ajax call i guess
      // $.ajax({
      //   url:
      //     'https://us-central1-norblock-c98d8.cloudfunctions.net/contactForm_cannatrac',
      //   body: newMessage,
      //   type: 'POST',
      //   crossDomain: true,
      //   dataType: 'json',
      //   success: function(res) {
      //     console.log(res)
      //   },
      //   error: function() {
      //     console.log('Failed!')
      //   }
      //   // beforeSend: setHeader
      // })
      $.post(
        'https://us-central1-norblock-c98d8.cloudfunctions.net/contactForm_cannatrac',
        newMessage,
        function(response) {
          console.log(response)
          if (response === 'Success.') {
            showSuccessFailureMsg(true)
          }
        }
      )
    } else {
      showSuccessFailureMsg(false)
    }
  }
  $('#submit-email').click(submitEmailAddress)

  // Post helpers
  function showSuccessFailureMsg(bool) {
    if (bool) {
      $('#emailInputMsg').text("Great, we'll be in touch shortly.")
      $('#emailInputMsg').show()
      cleanUpForm()
    } else {
      $('#emailInputMsg').text('Invalid email address.')
      $('#emailInputMsg').show()
      cleanUpForm()
    }
  }

  function cleanUpForm() {
    $('#email-input').val('')
    $('#phone-input').val('')
    $('#message-input').val('')
  }
})
