import { NGHStack, NGText, NGVStack, ShadowBox } from '@ui';
import { deviceWidth, vw } from '@utils/scale';
import { CinemaBaseItem } from 'maoyan-request/dist/types';
import React, { memo } from 'react';
import { convertPromotion, convertTags } from '../utils';

interface CinemaItemProps extends CinemaBaseItem {}
const CinemaItem: React.FC<CinemaItemProps> = (item) => {
  const tags = convertTags(item.tag);
  const promotions = convertPromotion(item.promotion);
  console.log({ promotions });
  return (
    <ShadowBox boxWidth={deviceWidth - 32} boxStyle={{ marginTop: 10 }}>
      <NGVStack p={16} flex={1} backgroundColor={'red'}>
        <NGHStack centerV justifyContent={'space-between'}>
          <NGText>{item.nm}</NGText>
          <NGText>{item.sellPrice}</NGText>
        </NGHStack>
        <NGHStack centerV justifyContent={'space-between'}>
          <NGText maxW={vw(64)} numberOfLines={1}>
            {item.addr}
          </NGText>
          <NGText>{item.distance}</NGText>
        </NGHStack>
        <NGHStack space={1} flexWrap={'wrap'}>
          {tags.map((tag, index) => {
            return (
              <NGVStack key={index} borderWidth={0.5} borderColor={tag.color} px={1} py={0.5} borderRadius={4}>
                <NGText fontSize={10} color={tag.color}>
                  {tag.label}
                </NGText>
              </NGVStack>
            );
          })}
        </NGHStack>
        <NGVStack>
          {promotions.map((promotion, index) => {
            return (
              <NGHStack key={index}>
                <NGVStack bgColor={promotion.bgColor}>
                  <NGText>{promotion.label}</NGText>
                </NGVStack>
                <NGText>{promotion.value}</NGText>
              </NGHStack>
            );
          })}
        </NGVStack>
      </NGVStack>
    </ShadowBox>
  );
};

export default memo(CinemaItem);
