import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

export default function Careers() {
  const careers = useLoaderData();
  // this is name is as you wish

  console.log(careers);

  return (
    <div className="careers">
      {careers?.map(career => {
        // console.log(career.id);
        return (
          <Link key={career.id} to={career.id.toString()}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        );
      })}
    </div>
  );
}

// Loader function
export const careersLoader = async () => {
  const { data } = await axios.get('http://localhost:4000/careers');

  return data;
};
// it must be exported because it will be imported in router as loader and we don't need useeffect in first render call this function
