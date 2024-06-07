import { format } from "date-fns";

export class DateUtil {
  private currentDate: Date;

  public constructor(date: string) {
    this.currentDate = new Date(date);
  }

  public datetimeBr() {
    return format(this.currentDate, "dd/MM/yy - HH:mm");
  }

  public dateBr() {
    return format(this.currentDate, "dd/MM/yy");
  }

  public datetimeDatabase() {
    return format(this.currentDate, "yyyy-MM-dd HH:mm:ss");
  }

  /**
   * Transforms a given 'yyyy-MM-dd' date to a 'yyyy-MM-dd HH:mm:ss' default format.
   * That prevents the database or application from setting a random hour, resulting
   * in some wrong date.
   *
   * If the given date is formatted differently than yyyy-MM-dd, it won't format.
   *
   * @param date A given yyyy-MM-dd date.
   * @returns A string formatted to database datetime value
   */
  public static dateToDatetime(date: string) {
    if (/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
      return `${date} 00:00:00`;
    }

    return date;
  }
}
