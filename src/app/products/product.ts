export interface IProduct
{
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

// IF I Want This Way With Class
// export class Product implements IProduct
// {
//   constructor(
//     public productId: number,
//     public productName: string,
//     public releaseDate: string,
//     public price: number,
//     public description: string,
//     public starRating: number,
//     public imageUrl: string) {}
//
//     calculateDiscount(percent: number): number {
//       return this.price - (this.price * percent / 100);
//     }
// }
