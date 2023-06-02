import toast from 'react-hot-toast';

export const toastSuccess = message => {
  toast.success(message, {
    duration: '200',
    position: 'top-right',
    icon: '🔰',
    style: {
      minWidth: '300px',
      background: 'green',
      color: 'white',
      fontWeight: '700',
    },
  });
};

export const toastError = message => {
  toast.error(message, {
    duration: '200',
    position: 'top-right',
    icon: '🔰',
    style: {
      minWidth: '300px',
      background: 'red',
      color: 'white',
      fontWeight: '700',
    },
  });
};
