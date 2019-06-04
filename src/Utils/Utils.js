import { format, parse } from 'date-fns';
import { DateUtils } from 'react-day-picker';
export function moneyFormatter(number) {
  const moneyFormatter = new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2
  });
  return moneyFormatter.format(number);
}

export function formatDate(date, dateFormat, locale) {
  return format(date, dateFormat, { locale });
}

export function parseDate(str, format, locale) {
  const parsed = parse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

export function formatNewDate(date) {
  return format(date, 'MM/DD/YYYY');
}
