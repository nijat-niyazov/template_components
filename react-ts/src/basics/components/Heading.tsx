import { ReactElement } from 'react';
import { HeadingProps } from '../types';


const Heading = ({ title }: HeadingProps): ReactElement => {
  //  we wrote React element because it's jsx element

  return <h1 className="text-3xl pt-10">{title}</h1>;
};

export default Heading;
