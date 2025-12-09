import { TIMEZONE_OFFSET } from "../constants/timezone";

export const getOffset = (starting = -12, ending = 14) => {
  const offset = [];
  for (let i = starting; i <= ending; i += 0.5) {
    offset.push(i);
  }
  return offset;
};

export const getTimezone = () => {
  return ["UTC", "GMT", ...Object.keys(TIMEZONE_OFFSET)];
};
