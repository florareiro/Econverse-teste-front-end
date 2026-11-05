export interface Product {
  detailsUrl?: string;
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;

  oldPrice?: number;
  parcelamento?: string;
  frete?: string;
}

export interface ProductsResponse {
  success: boolean;
  products: Product[];
}
