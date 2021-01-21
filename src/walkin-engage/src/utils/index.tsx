import moment from 'moment';
export const convertTime = UTCdate => {
  return moment(UTCdate)
    .local()
    .format('hh:mm A DD MMM YYYY');
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
  //return `Loyalty.totalAmount*${percentage}<${maxPointsPerTransaction}?(Loyalty.totalAmount*${percentage}):(${maxPointsPerTransaction})`;
  return `(${maxPointsPerDay}-Loyalty.${todaysPoints}>0)?(${maxPointsPerDay}-Loyalty.${todaysPoints}>=Loyalty.totalAmount*${percentage}?(Loyalty.totalAmount*${percentage}<${maxPointsPerTransaction}?(Loyalty.totalAmount*${percentage}):(${maxPointsPerTransaction})):(${maxPointsPerDay}-Loyalty.${todaysPoints}<${maxPointsPerTransaction}?(${maxPointsPerDay}-Loyalty.${todaysPoints}):(${maxPointsPerTransaction}))):0`;
};

export const extractDataFromRuleExpression = ruleExpression => {
  let maxPointsPerDay = '',
    percentage = '',
    maxPointsPerTransaction = '';
  if (ruleExpression.length > 125) {
    for (let i = 1; ; i++) {
      if (ruleExpression[i] == '-') break;
      maxPointsPerDay += ruleExpression[i];
    }
  }

  for (let i = ruleExpression.indexOf('<') + 1; ; i++) {
    if (ruleExpression[i] == '?') break;
    maxPointsPerTransaction += ruleExpression[i];
  }
  for (let i = ruleExpression.indexOf('*') + 1; ; i++) {
    if (
      ruleExpression <= 125
        ? ruleExpression[i] == '<'
        : ruleExpression[i] == '?'
    )
      break;
    percentage += ruleExpression[i];
  }
  percentage = `${parseFloat(percentage) * 100}`;
  percentage += '%';
  console.log(percentage, maxPointsPerDay, maxPointsPerTransaction);
  return { percentage, maxPointsPerTransaction, maxPointsPerDay };
};
