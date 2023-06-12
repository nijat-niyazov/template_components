import { FC } from 'react';

type KeyValueProps = {
  [key: string]: string;
  // this must be used when we have no problem with expanding props of Component and all they will be string or it can be string | number.
  
  /*
  ! But this way is a little bit dangerous. Because our main intend is to be aware of what are we sending as prop. For example with this way if prop is string it can be send as desired. But in ts we mostly want to know which props we are sending and give type for them
  */
};

const KeyValue: FC<KeyValueProps> = ({ name, capital, population }) => {
  return (
    <div className="grid gap-2 m-2">
      <span>city name {name}</span>
      <span>capital name {capital}</span>
      <span>population is {population}</span>
    </div>
  );
};

export default KeyValue;
