import { DateTimeFormat } from '@/constants/dateTime';
import dayjs from 'dayjs';

export const formatDate = (
  date: Date | string,
  format = DateTimeFormat.HHMM_DDMMYYYY,
): string => {
  if (!date) return '';

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    return '';
  }

  if (format) {
    return dayjs(parsedDate).format(format);
  }

  return dayjs(parsedDate).format(DateTimeFormat.DDMMYYYY);
};
