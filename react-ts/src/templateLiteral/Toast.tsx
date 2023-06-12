import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

type VerticalPos = 'top' | 'center' | 'bottom';
type HorizontalPos = 'left' | 'center' | 'right';

type PositionProps = {
  position: Exclude<`${VerticalPos}-${HorizontalPos}`, 'center-center'>;
};

// we excluding center-center from literal having that shape. Position can be only literals or center

const Toast: FC<PositionProps> = ({ position }) => {
  return <Toaster position={position} />;
};

export default Toast;
