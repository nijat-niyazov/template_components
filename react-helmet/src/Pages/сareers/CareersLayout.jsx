import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <Helmet>
        <title>Careers</title>
        <meta name="description" content="careers description" />
      </Helmet>
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

      <Outlet />
    </div>
  );
}
