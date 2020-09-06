const mockCocktailData = [
  {
    id: "1",
    name: "The Last Word",
    imgUrl: "/images/test-drinks/fairlady.jpg",
    bar: "The Nomad Bar",
    rating: 1.5,
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
    name: "Something Else Drink",
    imgUrl:
      "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
    bar: "wherever",
    rating: 5,
    type: "brandy"
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

const mockCocktailDetailData = {
  ...mockCocktailData[0],
  ingredients: "green chartreuse, gin, maraschino liqueur, lime juice"
};

const mockReviewData = [
  {
    id: 123,
    cocktailId: 1,
    userId: 2,
    reviewer: "Ariel",
    rating: 4.5,
    spiritedRating: 4,
    innovationRating: 5,
    comment:
      "Oh my, what a drink. I'm going to type a lot of gibberish right now blah blah blah. Man I wish I was using my mechanical keyboard to type all this right now; it's a lot more fun."
  },
  {
    id: 456,
    cocktailId: 1,
    userId: 3,
    reviewer: "Frank",
    rating: 6,
    spiritedRating: 6,
    innovationRating: 7,
    comment:
      "I am such a lightweight now. Normally I can drink 5 or 6 of these drinks but nowadays even one makes me feel tipsy. Pretty sad."
  }
];

export { mockCocktailData, mockCocktailDetailData, mockReviewData };
