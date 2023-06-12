import { ComponentType, FC } from 'react';
import { ProfileProps } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
  // if component is React Component and we need to clarify <that component's props because we must know what kind of type we send>
};

const Private: FC<PrivateProps> = ({ isLoggedIn, component: Component }) => {
  if (isLoggedIn) {
    return <Component name="Nijat" />;
  } else {
    return <div>Private section</div>;
  }
};

export default Private;
