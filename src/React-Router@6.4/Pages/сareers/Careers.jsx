import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import useTitleSetter from '../../utils/titleSetter';

export default function Careers() {
  const { careers } = useLoaderData();
  // this is name is as you wish
  // console.log();

  // console.log(careers);

  useTitleSetter('Careers');

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
  try {
    // const { data } = await axios.get('http://localhost:4000/careers');
    const { data } = await axios.get('data/data.json');
    console.log(data);
    return data;
  } catch (err) {
    throw Error("Couldn't fetch careers data");
  }
};
// it must be exported because it will be imported in router as loader and we don't need useeffect in first render call this function
