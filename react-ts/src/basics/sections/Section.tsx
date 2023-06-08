import { ReactNode } from 'react';
import { SectionProps } from '../types';



const Section = ({ title = 'Default title', children }: SectionProps) => {
  /*
   ! title can have default value if it's a optional 
  */

  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Section;

// const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </div>
//   );
// };

// export default Section;

// Section.defaultProps = 
