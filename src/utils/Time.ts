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


// export const getMoment = (dateTime: DateTime): moment.Moment => {
//   return moment({
//     year: dateTime.year,
//     month: dateTime.month - 1,
//     day: dateTime.day,
//     hour: dateTime.hour,
//     minute: dateTime.minute,
//     second: Math.floor(dateTime.second),
//   });
// }


export class DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;

  constructor(year: number, month: number, day: number, hour: number, minute: number, second: number) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  getDate(): string {
    return `${this.year}-${this.month}-${this.day}`;
  }

  getTime(): string {
    return `${this.hour}:${this.minute}:${Math.floor(this.second)}`;
  }

  getDateTime(): string {
    return `${this.getDate()} ${this.getTime()}`;
  }

  getMoment(): moment.Moment {
    return moment({
      year: this.year,
      month: this.month - 1,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: Math.floor(this.second),
    });
  }
}
