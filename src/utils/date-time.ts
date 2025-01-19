import { DateTime } from 'luxon';

export function parseDateFull(date: string): string {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_FULL);
}
