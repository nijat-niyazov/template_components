import useSWR from 'swr';
import { getWikiSearchResults } from '../api/wikiApi';
import Item from './Item';

const List = ({ searchTerm }) => {
  const { isLoading, error, data } = useSWR(
    searchTerm ? searchTerm : null,
    getWikiSearchResults
  );

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (error) content = <p>{error.message}</p>;
  else if (data?.query?.pages) {
    const results = data?.query?.pages;
    // console.log(results);
    content = (
      <ul>
        {Object.values(results).map(result => {
          return <Item key={result.pageid} result={result} />;
        })}
      </ul>
    );
  }

  return content;
};
export default List;
