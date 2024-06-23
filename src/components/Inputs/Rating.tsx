import { Rating } from "flowbite-react";

interface Props {
  value: 0 | 1 | 2 | 3 | 4 | 5;
  reviews?: number;
  className?: string;
}

const RatingStars = ({ value, reviews, className }: Props) => {
  return (
    <Rating className={className}>
      <Rating.Star filled={value >= 1} />
      <Rating.Star filled={value >= 2} />
      <Rating.Star filled={value >= 3} />
      <Rating.Star filled={value >= 4} />
      <Rating.Star filled={value >= 5} />
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a
        href="#"
        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
      >
        {reviews} reviews
      </a>
      {/* <Button fontSize="sm" color="gray.500" variant={'link'}>
        (589 Reviews)
      </Button> */}
    </Rating>
  );
};

export default RatingStars;
