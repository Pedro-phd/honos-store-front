/* eslint-disable prefer-template */
import axios from 'axios';

import type { Home, Product } from '@/types/types';

const apiUrl = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : 'http://localhost:1337/api';

export const cmsClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});

export const getHome = (): Promise<Home | Error> => {
  return new Promise<Home | Error>((res, rej) => {
    cmsClient
      .get(
        '/home?populate=*,brands.logo,products.images,categories.products,products.sizes,products.colors,banner,products.infos'
      )
      .then((response) => res(response.data.data))
      .catch((err) => rej(err));
  });
};

export const getAllProducts = (): Promise<Product[] | Error> => {
  return new Promise<Product[] | Error>((res, rej) => {
    cmsClient
      .get('/products?populate=*')
      .then((response) => res(response.data))
      .catch((err) => rej(err));
  });
};

export const getOneProduct = (id: number): Promise<Product | Error> => {
  return new Promise<Product | Error>((res, rej) => {
    cmsClient
      .get(`/products/${id}?populate=*`)
      .then((response) => res(response.data))
      .catch((err) => rej(err));
  });
};
