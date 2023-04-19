import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

export default function Careers() {
  const careers = useLoaderData();
  // this is name is as you wish

  return (
    <>
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
    </>
  );
}

// Loader function
export const careersLoader = async () => {
  try {
    // const { data } = await axios.get('http://localhost:5000/careers');
    const {
      data: { careers },
    } = await axios.get('data/data.json');
    return careers;
  } catch (err) {
    throw Error("Couldn't fetch careers data");
  }
};
// it must be exported because it will be imported in router as loader and we don't need useeffect in first render call this function
