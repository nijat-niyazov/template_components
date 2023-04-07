import Checkbox from './form-components/CheckBox';
import Input from './form-components/Input';
import Radio from './form-components/Radio';
import Select from './form-components/Select';
import TextArea from './form-components/TextArea';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;

    case 'textarea':
      return <TextArea {...rest} />;

    case 'select':
      return <Select {...rest} />;

    case 'radio':
      return <Radio {...rest} />;

    case 'checkbox':
      return <Checkbox {...rest} />;

    case 'date':
    default:
      return null;
  }
};

export default FormikControl;
