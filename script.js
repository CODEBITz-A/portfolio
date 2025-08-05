
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  function animateCountUp(el, target, duration = 1500) {
    let start = 0;
    let startTime = null;
    function updateCount(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (target - start) + start);
      el.textContent = value + "+";
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target + "+";
      }
    }
    requestAnimationFrame(updateCount);
  }

  // Animate all .count-up elements when page loads
  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    animateCountUp(el, target);
  });
});

 // Duplicate content for seamless scroll

    const marquee1 = document.getElementById('marquee-content-1');
    const clone1 = marquee1.cloneNode(true);
    document.getElementById('marquee-container-1').appendChild(clone1);

    const marquee2 = document.getElementById('marquee-content-2');
    const clone2 = marquee2.cloneNode(true);
    document.getElementById('marquee-container-2').appendChild(clone2);
    

document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.progress-bar');
    const percents = document.querySelectorAll('.skill-header .percent');

    bars.forEach((bar, index) => {
        const target = +bar.getAttribute('data-width');
        let width = 0;
        const interval = setInterval(() => {
            if (width >= target) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + "%";
                percents[index].textContent = width + "%";
            }
        }, 20); // speed
    });
});
