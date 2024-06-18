import React from 'react';
import { Swiper, SwiperItem, View, Image } from 'align-ui';

const SwiperDemo = () => {
  const data = [
    {
      url: 'https://z.autoimg.cn/sou/user_increase/car001.jpg',
      onClick: () => {
        console.log('你好！align-ui');
      },
    },
    { url: 'https://z.autoimg.cn/sou/user_increase/car002.png' },
    { url: 'https://z.autoimg.cn/sou/user_increase/car003.png' },
  ];
  return (
    <>
      {/* <Swiper>
          <SwiperItem>
            <View>1</View>
          </SwiperItem>
          <SwiperItem>
            <View>2</View>
          </SwiperItem>
          <SwiperItem>
            <View>3</View>
          </SwiperItem>
        </Swiper> */}
      <Swiper
        containerClass={'h-100,mt-10'}
        indicatorColor={'bg-green'}
        indicatorActiveColor={'bg-yellow'}
      >
        {data?.map((item) => (
          <SwiperItem>
            <Image
              src={item.url}
              containerClass={'w-full,h-100,border-0.5,border-black,border-style'}
            />
          </SwiperItem>
        ))}
      </Swiper>
    </>
  );
};
export default SwiperDemo;