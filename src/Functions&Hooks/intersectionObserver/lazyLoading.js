import { useEffect } from 'react';

const options = {
  //  rootmargin if we give 100px it means observe it before 100px
  rootMargin: '0px 0px 0px 0px',
  // percetange of visibilty of element trigger observer 0 means any part must be visible to trigger it
  threshold: 0.5,
};

const srcChanger = target => {
  // getting attrbite data-src
  const dataSrc = target.getAttribute('data-src');
  if (!dataSrc) {
    return; // if there is no src don't do anything
  }
  target.src = dataSrc; // change src to data-src
};

// const lazyLoading = allImgEls => {
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return; //if no intersecting to nothing
    } else {
      srcChanger(entry.target); // change source
      self.unobserve(entry.target); // then unobserve
    }
  });
}, options);

const LazyLoader = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-src]');

    elements?.forEach(imgEl => observer.observe(imgEl));
    // each element observer takes as property

    return () => {
      elements?.forEach(imgEl => observer.unobserve(imgEl));
    };
    // unmount component
  }, []);
};

export default LazyLoader;
