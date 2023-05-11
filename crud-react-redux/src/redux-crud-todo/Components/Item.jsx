import { useDispatch } from 'react-redux';
import { openModal, removeItem } from '../slices/todoSlice';

const Item = ({ act }) => {
  const dispatch = useDispatch();

  const formatElapsedTime = date => {
    var now = new Date();
    var formattedDate = new Date(date);

    // console.log(date);
    // console.log(formattedDate);
    var timeDifference = Math.abs(now.getTime() - formattedDate.getTime()); // Difference in milliseconds
    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var weeks = Math.floor(days / 7);

    // console.log(seconds, minutes, hours, days, weeks);

    if (weeks >= 1) {
      return `Created ${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days >= 1) {
      return `Created ${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours >= 1) {
      return `Created ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes >= 1) {
      return `Created ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `Created ${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    // return new Intl.DateTimeFormat('en-GB', { timeStyle: 'short' }).format(
    //   formattedDate
    // );
  };

  // console.log(formatElapsedTime(act.date));

  const findAge = date => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const formattedDate = new Date(date);
    const birthYear = formattedDate.getFullYear();
    const birthMonth = formattedDate.getMonth();
    const birthDay = formattedDate.getDay();
    console.log(birthMonth,birthDay);
    // console.log(
    //   'Your current age is',
    //   currentYear - birthYear - (currentMonth - birthMonth > 0 ? 1 : 0)
    // );
  };

  findAge(new Date('2023-05-02').toISOString());

  // 1980-01-01T00:00:00.000Z

  const handleOpenModal = () => {
    dispatch(openModal({ opened: true, item: act }));
  };

  const handleDeleteItem = id => {
    console.log('id - ', id);
    dispatch(removeItem(id));
  };

  return (
    <li className="bg-red-400 p-2 flex items-center justify-between rounded-xl text-white">
      <div className="w-[85%] flex justify-between items-center">
        <span>
          {act.id}. {act.item}
        </span>
        <p>{formatElapsedTime(act.date)}</p>
      </div>
      <div>
        <button className="bg-red-800 p-2 rounded-xl mr-[5px] text-white">
          Done
        </button>
        <button
          className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
          onClick={handleOpenModal}
        >
          Edit
        </button>
        <button
          className="bg-blue-300 p-2 rounded-xl mr-[5px] text-black"
          onClick={() => handleDeleteItem(act.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
