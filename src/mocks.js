const mockCocktailData = [
  {
    id: "1",
    name: "The Last Word",
    imgUrl: "/images/test-drinks/fairlady.jpg",
    bar: "The Nomad Bar",
    rating: 4,
    type: "gin"
  },
  {
    id: "2",
    name: "Vodka Drink",
    imgUrl:
      "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
    bar: "wherever",
    rating: 2.2,
    type: "vodka"
  },
  {
    id: "3",
    name: "Tequila Drink",
    imgUrl:
      "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
    bar: "wherever",
    rating: 3.8,
    type: "tequila"
  },
  {
    id: "4",
    name: "Whiskey Drink",
    imgUrl:
      "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
    bar: "wherever",
    rating: 4.3,
    type: "whiskey"
  },
  {
    id: "5",
    name: "Rum Drink",
    imgUrl:
      "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
    bar: "wherever",
    rating: 5,
    type: "rum"
  },
  {
    id: "6",
    name: "The Red Dragon",
    imgUrl: "/images/test-drinks/red-dragon.jpg",
    bar: "The Third Man",
    rating: 3,
    type: "baijiu"
  },
  {
    id: "7",
    name: "Really Long Name Vodka Drink",
    imgUrl:
      "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
    bar: "wherever",
    rating: 5,
    type: "vodka"
  }
];

const mockCocktailDetailData = [
  {
    ...mockCocktailData[0],
    ingredients: "green chartreuse, gin, maraschino liqueur, lime juice",
    totalRatings: 2
  },
  {
    ...mockCocktailData[5],
    ingredients: "baijiu, lemon, watermelon, basil, green chartreuse",
    totalRatings: 2
  }
];

const mockBarData = {
  id: "1",
  name: "The Nomad Bar",
  address: "123 Alphabet St, New York, NY 10016"
};

const mockReviewData = [
  {
    id: 123,
    cocktailId: 1,
    userId: 2,
    reviewer: "Ariel",
    timestamp: "October 15th, 2020",
    rating: 4.5,
    spiritedRating: 4,
    innovationRating: 5,
    comment:
      "That refreshing (cough cough) baijiu taste! I'm always curious about baijiu cocktails but so far haven't found one that particularly works well with the flavor."
  },
  {
    id: 456,
    cocktailId: 1,
    userId: 3,
    reviewer: "Frank",
    timestamp: "September 10th, 2016",
    rating: 3,
    spiritedRating: 6,
    innovationRating: 7,
    comment:
      "I am such a lightweight now. Normally I can drink 5 or 6 of these drinks but nowadays even one makes me feel tipsy. Pretty sad."
  }
];

export {
  mockCocktailData,
  mockCocktailDetailData,
  mockReviewData,
  mockBarData
};
