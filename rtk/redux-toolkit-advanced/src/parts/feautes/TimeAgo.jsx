import { formatDistanceToNow, parseISO } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';

  if (timestamp) {
    // console.log(timestamp);
    const date = parseISO(timestamp);
    // it converts into local time
    // console.log(date);

    const timePeriod = formatDistanceToNow(date);
    // and this find time change between that date from now 
    // console.log(timePeriod);

    timeAgo = timePeriod;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo} ago</i>
    </span>
  );
};

export default TimeAgo;
