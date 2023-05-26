// Sliders and Carousel
const slider = function (options) {
  const defaultOptions = {
    autoplay: false,
    time: this.autoplay && 3000,
  };

  if (!options) options = defaultOptions;
  const slides = document.querySelectorAll(`.slide`);

  const sliderNext = document.querySelector(`.arrow__right`);
  const sliderPrev = document.querySelector(`.arrow__left`);
  let currSlide = 0;
  const maxSlide = slides.length - 1;

  const gotoSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translate(${(i - slide) * 100 - 50}%,-50%)`;
    });
  };

  gotoSlide(currSlide);

  const nextSlide = function () {
    currSlide === maxSlide ? (currSlide = 0) : currSlide++;
    gotoSlide(currSlide);
  };

  const prevSlide = function(){
    currSlide === 0 ? currSlide = maxSlide : currSlide --;
    gotoSlide(currSlide);
  }

  sliderNext.addEventListener(`click`, nextSlide);
  sliderPrev.addEventListener(`click`, prevSlide);

  options.autoplay && setInterval(() => {
    nextSlide();
  }, options.time);


};

slider({autoplay:true,time:3000,});
