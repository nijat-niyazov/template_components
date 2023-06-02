import { toast } from 'react-hot-toast';

export const success = message =>
  toast.success(message, {
    duration: 1000,
    icon: '🎉',
  });

export const errorTost = message =>
  toast.error(message, {
    duration: 1000,
  });
