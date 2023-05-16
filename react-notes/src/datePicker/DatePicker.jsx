import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePick = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(selectedDate);

  return (
    <div>
      <DatePicker
        showIcon
        selected={selectedDate} // value
        onChange={date => setSelectedDate(date)} // onchange
        dateFormat="yyyy/MM/dd"
      />
    </div>
  );
};

export default DatePick;
