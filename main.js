document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-output", {
      strings: ["I'm Nabila Intan Nafisha","Junior Front-End Developer", "Junior Website Developer", "Big Data Data Enthusiast"], 
      typeSpeed: 50,  
      backSpeed: 25,  
      loop: true,     
      showCursor: true, 
      cursorChar: "|",  
    });
});


window.onload = function() { 
  const aboutMe = document.getElementById('about-me');
  const contact = document.getElementById('contact');

  if (aboutMe) {
      aboutMe.classList.remove('opacity-0', 'translate-y-4');
      aboutMe.classList.add('opacity-100', 'translate-y-0');
  }

  if (contact) {
      contact.classList.remove('opacity-0', 'translate-y-4');
      contact.classList.add('opacity-100', 'translate-y-0');
  }
};


document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".profile-img");

    function checkScroll() {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            img.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-item");

    function checkScroll() {
        projects.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll("#artikel .w-full");

    function revealCards() {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.remove("opacity-0", "scale-90");
        }
      });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Untuk mengecek saat pertama kali load
  });








