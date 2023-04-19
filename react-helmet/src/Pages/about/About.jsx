import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

const About = () => {
  const [user, setUser] = useState('maria');

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  // useEffect(() => {
  //   console.log('he is loogged out');
  // }, [user]);

  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="about description" />
        <link
          rel="icon"
          type="image/ico"
          href="https://w7.pngwing.com/pngs/48/511/png-transparent-computer-icons-home-home-angle-text-logo-thumbnail.png"
        />
      </Helmet>
      <h2 style={{ marginBottom: '20px' }}>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        facere obcaecati dolore nihil, repudiandae ipsam, qui quis magni saepe
        perspiciatis eaque esse vel doloribus aliquam accusamus et minus quod?
        Non!
      </p>
      <p>
        Id delectus itaque quae, accusantium, aperiam corporis nulla sint nisi
        tempora saepe, adipisci nam cupiditate ad! Cupiditate eaque voluptate,
        sunt qui inventore repellendus quos veritatis, eveniet mollitia facere
        unde culpa.
      </p>
      <p>
        Minima molestias atque quibusdam voluptatibus commodi consequuntur,
        deserunt optio? Pariatur non eos at quam illum qui soluta alias illo,
        ad, quasi consectetur numquam eligendi veritatis laudantium harum optio
        dolor ex.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;

// export const testLoader = () => {
//   return (document.title = 'About');
// };
