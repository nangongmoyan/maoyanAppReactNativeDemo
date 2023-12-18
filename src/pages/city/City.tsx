import { MaoYanRouteName } from '@enum/routeName';
import ErrorCatchHOC from '@hoc/error/ErrorCatchHOC';
import { MainScreenProps } from '@navigation/type';
import { NGHStack, NGSectionList, NGText, NGVStack, StraightLine } from '@ui';
import { getAddress } from '@utils/config';
import { deviceWidth } from '@utils/scale';
import React from 'react';

const City: React.FC<MainScreenProps<MaoYanRouteName.City>> = () => {
  console.log({ xxx: getAddress() });

  const { cityKeys, citys } = getAddress();

  const renderSider = () => {
    return (
      <NGVStack position={'absolute'} right={5}>
        {cityKeys.map((cityKey, index) => {
          return <NGText key={index}>{cityKey}</NGText>;
        })}
      </NGVStack>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <NGVStack h={46} centerV paddingX={16}>
        <NGText>{item.nm}</NGText>
      </NGVStack>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return (
      <NGVStack h={46} centerV bg={'gray.100'} paddingX={16}>
        <NGText>{title}</NGText>
      </NGVStack>
    );
  };

  const renderSeparator = () => {
    return <StraightLine width={deviceWidth - 32} />;
  };

  const renderListHeader = () => {
    return (
      <NGVStack bgColor="white.default">
        <NGHStack>
          <NGText>当前城市</NGText>
        </NGHStack>
      </NGVStack>
    );
  };
  return (
    <NGVStack>
      <NGSectionList
        sections={citys}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        ListHeaderComponent={renderListHeader}
        bgColor="white.default"
        showsVerticalScrollIndicator={false}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={renderSeparator}
      />
      {renderSider()}
    </NGVStack>
  );
};

export default ErrorCatchHOC(City);
