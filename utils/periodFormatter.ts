import { pluralFormatter } from './pluralFormatter';

type DateProps = {
  month?: number;
  year?: number;
};

type AdditionalProps = {
  yearsOnly?: boolean;
}

export const periodFormatter = ({ month, year }: DateProps, additionalProps?: AdditionalProps) => {
  const substrings = [];
  if (year) {
    substrings.push(
      pluralFormatter(year, {
        one: 'год',
        few: 'года',
        many: 'лет',
        other: 'лет',
      })
    );
  }

  if (month && !additionalProps?.yearsOnly) {
    substrings.push(
      pluralFormatter(month, {
        one: 'месяц',
        few: 'месяца',
        many: 'месяцев',
        other: 'месяцев',
      })
    );
  }

  return substrings.join(' ');
};
