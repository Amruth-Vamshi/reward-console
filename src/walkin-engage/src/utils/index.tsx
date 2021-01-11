import moment from 'moment';
export const convertTime = UTCdate => {
  return moment(UTCdate).format('hh:mm A DD MMM YYYY');
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
  return `Loyalty.totalAmount*${percentage}<${maxPointsPerTransaction}?(Loyalty.totalAmount*${percentage}):(${maxPointsPerTransaction})`;
  //return `(${maxPointsPerDay}-Limits.${todaysPoints}>0)?(${maxPointsPerDay}-Limits.${todaysPoints}>=Order.billAmountBeforeTax*${percentage}?(Order.billAmountBeforeTax*${percentage}<${maxPointsPerTransaction}?(Order.billAmountBeforeTax*${percentage}):(${maxPointsPerTransaction})):(${maxPointsPerDay}-Limits.${todaysPoints}<${maxPointsPerTransaction}?(${maxPointsPerDay}-Limits.${todaysPoints}):(${maxPointsPerTransaction}))):0`;
};

export const extractDataFromRuleExpression = ruleExpression => {
  let maxPointsPerDay = '1000',
    percentage = '',
    maxPointsPerTransaction = '';
  // for (let i = 1; ; i++) {
  //   if (ruleExpression[i] == '-') break;
  //   maxPointsPerDay += ruleExpression[i];
  // }
  for (let i = ruleExpression.indexOf('<') + 1; ; i++) {
    if (ruleExpression[i] == '?') break;
    maxPointsPerTransaction += ruleExpression[i];
  }
  for (let i = ruleExpression.indexOf('*') + 1; ; i++) {
    if (ruleExpression[i] == '<') break;
    percentage += ruleExpression[i];
  }
  percentage = `${parseFloat(percentage) * 100}`;
  percentage += '%';
  return { percentage, maxPointsPerTransaction, maxPointsPerDay };
};
