var element = document.getElementById('logo');
var darkColor = document.getElementById('dark');
var darkColor1 = document.getElementById('dark1');
var darkColor2 = document.getElementById('dark2');
var bg = document.getElementById('bg-nav');
var nav = document.getElementById('full-nav');
var insta1 = document.getElementById('social');
var face1 = document.getElementById('social2');
var insta2 = document.getElementById('social1');
var face2 = document.getElementById('social3');




window.addEventListener('scroll', function() {
    if (window.scrollY > 2) {
      element.classList.add('logo-view');
      darkColor.classList.add('dark-color');
      darkColor1.classList.add('dark-color');
      darkColor2.classList.add('dark-color');
      bg.classList.add('dark-bg');
      nav.classList.add('tra-nav');
      insta1.classList.add('display-none');
      face1.classList.add('display-none');
      insta2.classList.remove('display-none');
      face2.classList.remove('display-none');
    } else {
      element.classList.remove('logo-view');
      darkColor.classList.remove('dark-color');
      darkColor1.classList.remove('dark-color');
      darkColor2.classList.remove('dark-color');
      bg.classList.remove('dark-bg');
      nav.classList.remove('tra-nav');
      insta1.classList.remove('display-none');
      face1.classList.remove('display-none');
      insta2.classList.add('display-none');
      face2.classList.add('display-none');
    }
});


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, options);

const elements = document.querySelectorAll('.view');
elements.forEach(element => {
  observer.observe(element);
});















