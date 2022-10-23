// export const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// });

const section = document.querySelector('.hero');
const path = document.querySelector('.hero__figure__left path');
const path2 = document.querySelector('.hero__figure__right path');
const length = path.getTotalLength();
const length2 = path2.getTotalLength();
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;
path2.style.strokeDasharray = length2;
path2.style.strokeDashoffset = length2;

const endAt = 0.6;
const endAt2 = 0.8;

document.addEventListener('scroll', () => {
  const domRect = section.getBoundingClientRect();
  const percentageScrolled = Math.abs(domRect.top / (domRect.height - window.innerHeight));

  if (percentageScrolled <= endAt) {
    path.style.strokeDashoffset = length + length * percentageScrolled / endAt;
    path2.style.strokeDashoffset = length2 + length2 * percentageScrolled / endAt;
  } else if (percentageScrolled <= endAt2) {
    const rate = 100;
    path.style.transform = `translateY(${-rate * (percentageScrolled - endAt) / (endAt2 - endAt)}px)`;
    path2.style.transform = `translateY(${rate * (percentageScrolled - endAt) / (endAt2 - endAt)}px)`;
  } else {
    const rate = 100;
    path.style.transform = `translate(${-rate * (percentageScrolled - endAt2) / (1.0 - endAt2)}px, -100px)`;
    path2.style.transform = `translate(${rate * (percentageScrolled - endAt2) / (1.0 - endAt)}px, 100px)`;
  }
});