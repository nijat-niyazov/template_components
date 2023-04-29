import { useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const location = useLocation();

  const router = location.pathname;
  // const router = '/market/amino-asitler/arginine';
  // e.g

  const array = router.split('/').filter(chart => chart !== '');

  let currentlink = '';

  const content = array.map((l, i) => {
    currentlink += '/' + l;
    return (
      <a href={`https://begreensports.com${currentlink}`} target="_blank">
        {l}
      </a>
    );
  });

  return content;
};

export default BreadCrumbs;
