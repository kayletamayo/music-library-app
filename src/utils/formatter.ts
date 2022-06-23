import moment from 'moment';

export const formatDate = (dateString: string, format: string = 'MMMM DD, YYYY'): string => {
  const date = new Date(dateString);

  return moment(date).format(format);
};