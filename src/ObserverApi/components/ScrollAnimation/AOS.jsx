import { useEffect } from 'react';
// import './card.scss';

const Card = () => {
  const options = {
    rootMargin: '0px',
    thresHold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // entry.target.classList.remove('show');
          return;
        } else {
          entry.target.classList.add('show');
        }
      }, options);
    });

    const cards = document.querySelectorAll('.card');
    const logos = document.querySelectorAll('.logo');

    cards.forEach(card => {
      observer.observe(card);
    });

    logos.forEach(logo => {
      observer.observe(logo);
    });
  }, []);

  return (
    <section>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="logos">
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
      </div>
    </section>
  );
};

export default Card;
