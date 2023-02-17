import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

const CareerDetails = () => {
  // const { careerNum } = useParams();

  const testCareer = useLoaderData();
  console.log(testCareer);

  return (
    <div className="career-details">
      <h2>Details for {testCareer.id}</h2>
      <p>TestCareer Title: {testCareer.title}</p>
      <p>TestCareer Starting Salary: {testCareer.salary}</p>
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
      </div>
    </div>
  );
};

export default CareerDetails;

// Loader component

export const careerDetailLoader = async ({ params }) => {
  // useParams version in Loader component ⤴
  const { careerNum } = params;

  const { data } = await axios.get(
    'http://localhost:4000/careers/' + careerNum
  );

  return data;
};
