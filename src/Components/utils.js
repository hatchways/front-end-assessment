export const averageCalculator = (grades) => {
  let sum = 0;

  grades.forEach((grade) => {
    sum += parseInt(grade);
  });
  let average = sum / grades.length;

  return average;
};
