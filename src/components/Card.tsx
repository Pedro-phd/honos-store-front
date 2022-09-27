import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Product } from '@/types/types';

/* eslint-disable react/display-name */
const Card = (product: Product) => {
  const descont = product?.infos?.discountPercent
    ? product.infos.discountPercent / 100
    : 0;

  return (
    <div className="flex w-[200px] flex-col">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="h-[300px] w-[200px] rounded-2xl"
      >
        {product.images.map((img) => {
          return (
            <SwiperSlide key={Math.random()}>
              <Image
                src={img.url}
                layout="fixed"
                width={200}
                height={300}
                objectFit="cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h2 className="mt-4 gap-2 text-2xl font-bold capitalize">
        {product.name}
      </h2>
      <div className="flex gap-2 align-middle">
        {product?.infos?.discountPercent !== 0 ||
          (product?.infos?.discountPercent !== null && (
            <h3 className="text-lg italic text-red-600 line-through">
              R$ {product.price.toFixed(2)}
            </h3>
          ))}
        {product?.infos?.discountPercent !== 0 ? (
          <h3 className="text-lg font-bold text-green-700">
            R$ {(product.price - product.price * descont).toFixed(2)}
          </h3>
        ) : (
          <h3 className="text-lg font-bold text-green-700">
            R$ {product.price.toFixed(2)}
          </h3>
        )}
      </div>
      <Link href={`/pdp/${product.id}`}>
        <p className="mt-4 cursor-pointer gap-2 text-xl font-bold capitalize">
          Ver mais
        </p>
      </Link>
    </div>
  );
};

export default Card;
