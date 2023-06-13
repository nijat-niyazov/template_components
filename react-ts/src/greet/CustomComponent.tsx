import { ComponentProps } from 'react';
import Greet from './Greet';

// const CustomComponent:FC<GreetProps> = (props) => {

const CustomComponent = (props: ComponentProps<typeof Greet>) => {
  return (
    <div className="bg-green-300 p-2">
      <span className="bg-red-500">
        You can see your your props here too {props.messageCount}
      </span>
    </div>
  );
};

export default CustomComponent;
