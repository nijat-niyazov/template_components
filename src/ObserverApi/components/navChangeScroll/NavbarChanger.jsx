import React, { useEffect, useRef } from 'react';
// import './style.scss';

const NavbarChanger = () => {
  const header = useRef(null);
  const sectionOne = useRef(null);

  useEffect(() => {
    console.log(header?.current, sectionOne?.current);

    const sectionOneOptions = {
      rootMargin: '-200px 0px 0px 0px',
    };

    const sectionOneObserver = new IntersectionObserver(function (
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        console.log(entry.isIntersecting);
        if (!entry.isIntersecting) {
          header?.current?.classList.add('nav-scrolled');
        } else {
          header?.current?.classList.remove('nav-scrolled');
        }
      });
    },
    sectionOneOptions);

    sectionOneObserver.observe(sectionOne?.current);
  }, []);

  return (
    <>
      <header ref={header}>
        <a href="#" className="site-logo" aria-label="homepage">
          IntObs
        </a>
        <nav className="main-nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Another page
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Pricing
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <nav className="account">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__link nav__link--btn" href="#">
                Login
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__link nav__link--btn nav__link--btn--highlight"
                href="#"
              >
                Join
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="home-intro" ref={sectionOne}>
          <h1>Intersection Observer is pretty useful</h1>
        </section>

        <div className="home-about">
          <h2>About us</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="columns">
            <div className="col fade-in">
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                maiores fuga eos provident voluptas perferendis.
              </p>
            </div>
            <div className="col fade-in">
              <h3>A, illo!</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus minima quo beatae eius blanditiis officiis.
              </p>
            </div>
            <div className="col fade-in">
              <h3>Repudiandae, error?</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum quasi quis doloribus quia illum laudantium.
              </p>
            </div>
          </div>
        </div>

        <div className="home-more-stuff">
          <div className="more-stuff-grid">
            <img
              src="https://unsplash.it/400"
              alt=""
              className="slide-in from-left"
            />
            <p className="slide-in from-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
          </div>
          <div className="more-stuff-grid">
            <p className="slide-in from-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
            <img
              src="https://unsplash.it/401"
              alt=""
              className="slide-in from-right"
            />
          </div>
          <div className="more-stuff-grid">
            <img
              src="//unsplash.it/400"
              alt=""
              className="slide-in from-left"
            />
            <p className="slide-in from-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
          </div>
          <div className="more-stuff-grid">
            <p className="slide-in from-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
            <img
              src="https://unsplash.it/401"
              alt=""
              className="slide-in from-right"
            />
          </div>
          <div className="more-stuff-grid">
            <img
              src="//unsplash.it/400"
              alt=""
              className="slide-in from-left"
            />
            <p className="slide-in from-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
          </div>
          <div className="more-stuff-grid">
            <p className="slide-in from-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit, quae beatae vero sit magni quaerat id ratione. Dolor optio
              unde amet omnis sapiente neque cumque consequuntur reiciendis
              deserunt. Dolorem vero exercitationem consequuntur, eligendi
              cupiditate debitis facilis quibusdam magni. Eveniet.
            </p>
            <img
              src="https://unsplash.it/401"
              alt=""
              className="slide-in from-right"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default NavbarChanger;
