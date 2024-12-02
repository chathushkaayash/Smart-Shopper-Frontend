import moment from "moment";

// export interface DateTime {
//   year: number;
//   month: number;
//   day: number;
//   hour: number;
//   minute: number;
//   second: number;
// }

// export const getDate = (dateTime: DateTime): string => {
//   return `${dateTime.year}-${dateTime.month}-${dateTime.day}`;
// };

// export const getTime = (dateTime: DateTime): string => {
//   return `${dateTime.hour}:${dateTime.minute}:${Math.floor(dateTime.second)}`;
// };

// export const getDateTime = (dateTime: DateTime): string => {
//   return `${getDate(dateTime)} ${getTime(dateTime)}`;
// };

export const getMoment = (dateTime: DateTime): moment.Moment => {
  return moment({
    year: dateTime.year,
    month: dateTime.month - 1,
    day: dateTime.day,
    hour: dateTime.hour,
    minute: dateTime.minute,
    second: Math.floor(dateTime.second),
  });
}

export interface BaseDateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export class DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  moment: moment.Moment;

  constructor(dateTime: BaseDateTime) {
    this.year = dateTime.year;
    this.month = dateTime.month;
    this.day = dateTime.day;
    this.hour = dateTime.hour;
    this.minute = dateTime.minute;
    this.second = dateTime.second;

    this.moment = moment({
      year: this.year,
      month: this.month - 1,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: Math.floor(this.second),
    });
  }

  static getDate(dateTime: DateTime): string {
    return `${dateTime.year}-${dateTime.month}-${dateTime.day}`;
  }

  static getTime(dateTime: DateTime): string {
    return `${dateTime.hour}:${dateTime.minute}:${Math.floor(dateTime.second)}`;
  }

  static getDateTime(dateTime: DateTime): string {
    return `${DateTime.getDate(dateTime)} ${DateTime.getTime(dateTime)}`;
  }

  static getMoment(dateTime: DateTime): moment.Moment {
    return moment({
      year: dateTime.year,
      month: dateTime.month - 1,
      day: dateTime.day,
      hour: dateTime.hour,
      minute: dateTime.minute,
      second: Math.floor(dateTime.second),
    });
  }

  static toString(dateTime: DateTime): string {
    return DateTime.getMoment(dateTime).fromNow();
  }
}
