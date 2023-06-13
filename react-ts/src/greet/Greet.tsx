import { FC } from 'react';

export type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn?: boolean;
};

const Greet: FC<GreetProps> = ({ name, messageCount, isLoggedIn }) => {
  return (
    <div className="bg-green-500 p-2">
      <h2 className="bg-red-500">
        Welcome {name}, you have unread {messageCount} messages
      </h2>
    </div>
  );
};

export default Greet;
