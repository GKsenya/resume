import dayjs from 'dayjs';

export const getPeriod = (from: dayjs.ConfigType, to?: dayjs.ConfigType) => {
  const month = dayjs(to).diff(dayjs(from), 'month') % 12;
  const year = dayjs(to).diff(dayjs(from), 'year');
  return { month, year };
};
