import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";

interface Props {
  ratingSummary: { [key: number]: number };
}
const AdvancedRating = ({ ratingSummary }: Props) => {
  let totalReviews = 0;
  let totalStars = 0;

  for (let i = 1; i <= 5; i++) {
    totalReviews += ratingSummary[i];
    totalStars += ratingSummary[i] * i;
  }

  const reviewPercent: { [key: number]: number } = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  for (let i = 1; i <= 5; i++) {
    reviewPercent[i] = ratingSummary[i]
      ? Math.floor((ratingSummary[i] / totalStars) * 100)
      : 0;
  }

  const averageRating = totalReviews
    ? (totalStars / totalReviews).toFixed(1)
    : 0;

  return (
    <>
      <Rating className="mb-2">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {averageRating} out of 5
        </p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        {totalReviews} ratings
      </p>
      <RatingAdvanced percentFilled={reviewPercent[5]} className="mb-2">
        5 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={reviewPercent[4]} className="mb-2">
        4 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={reviewPercent[3]} className="mb-2">
        3 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={reviewPercent[2]} className="mb-2">
        2 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={reviewPercent[1]}>1 star</RatingAdvanced>
    </>
  );
};

export default AdvancedRating;
