import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

const CareerDetails = () => {
  const { careerNum } = useParams();

  const caree5 = useLoaderData();
  console.log(caree5);

  return (
    <div className="career-details">
      {/* <h2>Details for {career.id}</h2>
      <p>Career Title: {career.title}</p>
      <p>Career Starting Salary: {career.salary}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          perferendis ullam veniam commodi aliquam deserunt suscipit quasi
          iusto, unde dolorum accusamus voluptatum natus, necessitatibus fugiat
          culpa officiis temporibus optio quibusdam! Nemo recusandae corporis
          quo saepe? Voluptatum temporibus dolores, sint eveniet veniam
          accusantium odio vitae saepe architecto provident asperiores fugiat
          voluptates est, nihil, sequi rem? Iste quam recusandae illo
          perferendis debitis!
        </p>
      </div> */}
    </div>
  );
};

export default CareerDetails;

// Loader component

export const careerDetailLoader = async ({ params }) => {
  const { careerNum } = params;
  console.log(careerNum);

  const { data } = await axios.get(
    'http://localhost:4000/careers/' + careerNum
  );
  console.log(data);

  return data;
};
