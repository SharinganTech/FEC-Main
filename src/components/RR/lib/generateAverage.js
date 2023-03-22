export default function generateAverage(ratings) {
  let totalScore = 0;
  let totalRatings = 0;
  Object.keys(ratings).forEach((key) => {
    totalScore += (Number(key) * Number(ratings[key]));
    totalRatings += Number(ratings[key]);
  });
  return totalScore / totalRatings;
}
