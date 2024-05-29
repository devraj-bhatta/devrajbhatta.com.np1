// This is for loader of webpage
window.addEventListener("load", () => {
  const loader = document.querySelector('.loader');
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  })
})

const phrases = ["Website Developer", "Software Developer", "Software Enginner", "Programmer", "UI/UX Designer"];
const textElement = document.getElementById("text");

function typeWriter(text, i, cb) {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    setTimeout(function () {
      typeWriter(text, i + 1, cb)
    }, 100);
  } else {
    setTimeout(cb, 250);
  }
}

function eraseText() {
  let text = textElement.innerHTML;
  return new Promise(resolve => {
    const eraseInterval = setInterval(function () {
      if (text.length > 0) {
        text = text.substring(0, text.length - 1);
        textElement.innerHTML = text;
      } else {
        clearInterval(eraseInterval);
        resolve();
      }
    }, 50);
  });
}

function startTyping() {
  let currentIndex = 0;

  function loop() {
    typeWriter(phrases[currentIndex], 0, function () {
      eraseText().then(function () {
        currentIndex = (currentIndex + 1) % phrases.length;
        loop();
      });
    });
  }

  loop();
}

startTyping();



//This is for google recaptcha -form
window.onload = function () {
  var $recaptcha = document.querySelector('#g-recaptcha-response');

  if ($recaptcha) {
    $recaptcha.setAttribute("required", "required");
  }
};


// This is for active navbar
const navLinkEls = document.querySelectorAll('.nav-item');

navLinkEls.forEach(navLinkEls => {
  navLinkEls.addEventListener('click', () => {
    document.querySelector('.activee')?.classList.remove('activee');
    navLinkEls.classList.add('activee');
  });
});

//   This is for SCROLLING active navbar

// const linkEls = document.querySelectorAll('.nav-item');
// const sectionEls = document.querySelectorAll('.section');

// let currentSection = 'home';
// window.addEventListener('scroll', () => {
//     sectionEls.forEach(sectionEl => {
//         if (window.scrollY >= sectionEl.offsetTop) {
//             currentSection = sectionEl.id;
//         }
//     });

//     navLinkEls.forEach(navLinkEl => {
//         if (navLinkEl.href.includes(currentSection)) {
//             document.querySelector('.scrolling').classList.remove('scrolling');
//             navLinkEl.classList.add('scrolling');
//         }
//     });
// });






$(document).ready(function () {
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 550) {
      $('.navbar').addClass('solid');
      $('.back-to-top').addClass('visible');
    } else {
      $('.navbar').removeClass('solid');
      $('.back-to-top').removeClass('visible');
    }

  });
});


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




// This is for responsive navbar
function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}


// This is for animation >=============================== animation.js