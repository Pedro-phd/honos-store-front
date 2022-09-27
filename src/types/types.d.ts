export type Home = {
  id: number;
  brands_title: string;
  news_title: string;
  category_title: string;
  banner: {
    url: string;
  };
  brands: Brand[];
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  images: [
    {
      url: string;
    }
  ];
  colors: {
    id: number;
    name: string;
    hex: string;
    slug: string;
  };
  sizes: {
    id: number;
    size: string;
    slug: string;
  };
  infos: {
    id: number;
    name: string;
    discountPercent: number;
    data: any;
  };
};

export type Brand = {
  id: number;
  name: string;
  slug: string;
  logo: [{ url: string }];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  products: Product[];
};
