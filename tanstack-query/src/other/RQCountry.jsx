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

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
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
