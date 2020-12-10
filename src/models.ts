export interface CocktailBoxItem {
  id: number;
  name: string;
  imgUrl: string;
  bar: string;
  rating: number;
  type: string;
}

export interface CocktailDetailItem extends CocktailBoxItem {
  ingredients: string;
  totalRatings: number;
}

export interface ReviewItem {
  id: number;
  rating: number;
  spiritedRating: number;
  innovationRating: number;
  comment: string;
  reviewer: string;
  timestamp: string;
}

export interface CoordinatePair {
  x: number;
  y: number;
}

export type ChartData = CoordinatePair[];
