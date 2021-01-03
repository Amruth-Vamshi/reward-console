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

export const generateRuleExpression = (
  ruleName,
  percentage,
  maxPointsPerTransaction,
  maxPointsPerDay
) => {
  let todaysPoints = 'pointsRedeemedToday';
  if (percentage[percentage.length - 1] == '%')
    percentage = percentage.substr(0, percentage.length - 1);
  if (ruleName == 'earn') todaysPoints = 'pointsEarnedToday';
  percentage = parseInt(percentage) / 100;
  return `(${maxPointsPerDay}-Limits.${todaysPoints}>0)?(${maxPointsPerDay}-Limits.${todaysPoints}>=Order.billAmountBeforeTax*${percentage}?(Order.billAmountBeforeTax*${percentage}<${maxPointsPerTransaction}?(Order.billAmountBeforeTax*${percentage}):(${maxPointsPerTransaction})):(${maxPointsPerDay}-Limits.${todaysPoints}<${maxPointsPerTransaction}?(${maxPointsPerDay}-Limits.${todaysPoints}):(${maxPointsPerTransaction}))):0`;
};

export const extractDataFromRuleExpression = ruleExpression => {
  let maxPointsPerDay = '',
    percentage = '',
    maxPointsPerTransaction = '';
  for (let i = 1; ; i++) {
    if (ruleExpression[i] == '-') break;
    maxPointsPerDay += ruleExpression[i];
  }
  for (let i = ruleExpression.indexOf('<') + 1; ; i++) {
    if (ruleExpression[i] == '?') break;
    maxPointsPerTransaction += ruleExpression[i];
  }
  for (let i = ruleExpression.indexOf('*') + 1; ; i++) {
    if (ruleExpression[i] == '?') break;
    percentage += ruleExpression[i];
  }
  percentage = `${parseFloat(percentage) * 100}`;
  percentage += '%';
  return { percentage, maxPointsPerTransaction, maxPointsPerDay };
};
