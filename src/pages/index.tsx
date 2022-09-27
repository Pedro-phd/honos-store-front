import 'swiper/css';
import 'swiper/css/pagination';

import Link from 'next/link';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '@/components/Card';
import { Meta } from '@/layouts/Meta';
import type { Home } from '@/types/types';
import { getHome } from '@/utils/client/cms';

type HomeProps = {
  home: Home;
};

const Index = ({ home }: HomeProps) => {
  console.log(home);
  return (
    <div>
      <Meta title="HOME - Honos Store" description="Sua loja de roupas" />
      <div>
        <img src={home.banner.url} className="max-h-[500px] w-full" />
      </div>
      <div className="mt-10">
        <h2 className="mt-4 text-center text-3xl font-bold text-zinc-900">
          {home.brands_title}
        </h2>
        <div className="flex justify-center gap-4">
          {home?.brands?.map((brand) => {
            return (
              <Link
                href={`/brand/${brand.slug}`}
                key={brand.id}
                className="cursor-pointer no-underline"
              >
                <img
                  src={brand.logo[0].url}
                  width={100}
                  height={100}
                  className="cursor-pointer"
                  alt={brand.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="mt-10">
          <h2 className="mt-4 text-center text-3xl font-bold text-zinc-900">
            {home.news_title}
          </h2>
          <div className="mt-4">
            <Swiper
              slidesPerView={4}
              navigation={true}
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="max-w-[1024px]"
            >
              {home.products.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <Card {...product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const home = await getHome();

  return {
    props: {
      home,
    },
  };
}

export default Index;
