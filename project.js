AOS.init();

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('active');

  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

    const btn = document.getElementById("readMoreBtn");
    const moreFeatures = document.getElementById("moreFeatures");

    btn.addEventListener("click", () => {
        if (moreFeatures.style.display === "none") {
            moreFeatures.style.display = "block";
            btn.innerText = "Read Less";
        } else {
            moreFeatures.style.display = "none";
            btn.innerText = "Read More";
        }
    });
