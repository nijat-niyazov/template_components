import { useParams } from 'react-router-dom';
import useCountryHook from './hooks/useCountryHook';

const RqCountry = () => {
  const { id } = useParams();

  const {
    isLoading,
    data,
    isError,
    error,
    isPlaceholderData, // --> will be true if shown data is placeHolderData
  } = useCountryHook(id);

  console.log(isLoading, data);

  // console.log(Date.now() / 1000 / 60 / 60 / 60 / 24);

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  let years = Math.round(Date.now() / 1000 / 60 / 60 / 24 / 365);

  console.log(years);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    console.log(data);
    /*
    * if data is passed with initialData then data initialData will be maindata if error is occured and we can use it in our components 
    ! if data is passed with placeHolderData then data won't be because data isn't cahced and will be gone after fetch is completed
    */
    if (data) {
      return (
        <div className=" w-1/2 m-auto p-4 rounded-lg bg-blue-500 text-white text-center">
          {data.id}. {data.name} <br /> <br />
          <h2 className="bg-red-500 p-2 rounded-md">Couldn't fetch for ⤴</h2>
        </div>
      );
    }
  }

  return (
    <div className=" w-1/2 m-auto p-4 rounded-lg bg-blue-500 text-white text-center">
      {data.id}. {data.name} <br /> <br />
      Capital of {data.capitalOf} <br /> <br />
      Population is {data.population} <br /> <br />
    </div>
  );
};

export default RqCountry;
