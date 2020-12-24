export const convertTime = UTCdate => {
  let convertedDate = `${new Date(UTCdate).toLocaleTimeString()} ${new Date(
    UTCdate
  ).toDateString()}`;
  if (convertedDate[1] == ':') {
    return `${convertedDate.substr(0, 4)} ${convertedDate.substr(
      8,
      2
    )} ${convertedDate.substr(19, 2)} ${convertedDate.substr(
      15,
      3
    )} ${convertedDate.substr(22)}`;
  }
  return `${convertedDate.substr(0, 5)} ${convertedDate.substr(
    9,
    2
  )} ${convertedDate.substr(20, 2)} ${convertedDate.substr(
    16,
    3
  )} ${convertedDate.substr(23)}`;
};
