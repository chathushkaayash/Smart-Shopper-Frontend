import moment from "moment";

export interface DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export const getDate = (dateTime: DateTime): string => {
  return `${dateTime.year}-${dateTime.month}-${dateTime.day}`;
};

export const getTime = (dateTime: DateTime): string => {
  return `${dateTime.hour}:${dateTime.minute}:${Math.floor(dateTime.second)}`;
};

export const getDateTime = (dateTime: DateTime): string => {
  return `${getDate(dateTime)} ${getTime(dateTime)}`;
};


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
