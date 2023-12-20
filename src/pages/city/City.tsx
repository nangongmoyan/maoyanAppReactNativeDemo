import { CityRank } from '@const/city';
import { MaoYanRouteName } from '@enum/routeName';
import ErrorCatchHOC from '@hoc/error/ErrorCatchHOC';
import useEvent from '@hooks/useEvent';
import { MaoYanCity } from '@myTypes/city';
import { MainScreenProps } from '@navigation/type';
import { NGSectionList, NGText, NGVStack, StraightLine } from '@ui';
import { getCitys } from '@utils/config';
import { keyExtractor } from '@utils/keyExtractor';
import { deviceHeight, deviceWidth } from '@utils/scale';
import React, { useRef } from 'react';
import { CityListHeader } from './components';
import { HEADER_HEIGHT, ITEM_HEIGHT } from './const';
import { getHeaderHeight } from './utils';

const sectionWidth = 20;
const statusHeight = 88;
const sectionTopBottomHeight = 60;

const City: React.FC<MainScreenProps<MaoYanRouteName.City>> = () => {
  const sectionList = useRef();
  const citys = getCitys();

  const sectionItemHeight = (deviceHeight - sectionTopBottomHeight * 2 - statusHeight) / citys.length;

  getHeaderHeight();
  /**  渲染列表顶部 */
  const renderListHeader = useEvent(() => <CityListHeader />);

  /** */
  const renderItemSeparator = () => <StraightLine width={deviceWidth - 32} />;

  /** 渲染列表头部 */
  const renderSectionHeader = useEvent(({ section }: { section: MaoYanCity.SectionCityItem }) => {
    return (
      <NGVStack h={HEADER_HEIGHT} centerV bg={'gray.100'} paddingX={16}>
        <NGText>{section.title}</NGText>
      </NGVStack>
    );
  });

  /** 渲染列表项 */
  const renderItem = useEvent(({ item }: { item: MaoYanCity.CityItem }) => {
    return (
      <NGVStack h={ITEM_HEIGHT} centerV paddingX={16}>
        <NGText>{item.nm}</NGText>
      </NGVStack>
    );
  });

  const scrollToList = (index: number) => {
    sectionList.current.scrollToLocation({ animated: true, itemIndex: 0, sectionIndex: parseInt(index), viewOffset: 44 });
  };
  /**  渲染侧边 */
  const renderSider = () => {
    return (
      <NGVStack
        position={'absolute'}
        right={5}
        width={sectionWidth}
        height={deviceHeight - sectionTopBottomHeight * 2}
        marginTop={sectionTopBottomHeight}
      >
        {CityRank.map((cityKey, index) => {
          return (
            <NGText key={index} height={sectionItemHeight} onPress={() => scrollToList(index)}>
              {cityKey}
            </NGText>
          );
        })}
      </NGVStack>
    );
  };

  const getItemLayout = (data, index) => {
    let [length, separator, header] = [ITEM_HEIGHT, 2, HEADER_HEIGHT];
    return { length, offset: (length + separator) * index + header, index };
  };

  return (
    <NGVStack>
      <NGSectionList
        sections={citys}
        ref={sectionList}
        bgColor="white.default"
        renderItem={renderItem}
        initialNumToRender={100}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={renderItemSeparator}
      />
      {renderSider()}
    </NGVStack>
  );
};

export default ErrorCatchHOC(City);
