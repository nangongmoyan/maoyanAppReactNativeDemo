import { CityRank } from '@const/city';
import { MaoYanRouteName } from '@enum/routeName';
import { ErrorCatchHOC } from '@hoc/error';
import useEvent from '@hooks/useEvent';
import useNGNavigation from '@hooks/useNGNavigation';
import { MaoYanCity } from '@myTypes/city';
import { MainScreenProps } from '@navigation/type';
import { FlashList, ViewToken } from '@shopify/flash-list';
import { useCityStore } from '@store/city';
import { NGText, NGVStack } from '@ui';
import { getCitys } from '@utils/config';
import { keyExtractor } from '@utils/keyExtractor';
import { deviceHeight, deviceWidth } from '@utils/scale';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GestureResponderEvent, Pressable, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Geolocation } from 'react-native-amap-geolocation';
import { HEADER_HEIGHT, HEADER_ITEM_WIDTH } from './const';

const sectionWidth = 20;
const statusHeight = 88;
const sectionTopBottomHeight = 60;
const sectionItemHeight = (deviceHeight - sectionTopBottomHeight * 2 - statusHeight) / CityRank.length;

const City: React.FC<MainScreenProps<MaoYanRouteName.City>> = () => {
  // const citys = getCitys();
  const flashListRef = useRef();
  const navigation = useNGNavigation();
  const [citys, setCitys] = useState<MaoYanCity.SectionCityItem[]>([]);
  const [locationing, setLocationing] = useState(true);
  const [canTouch, setCanTouch] = useState(false);
  const [isTouchDown, setIsTouchDown] = useState(false);
  const [currentLetter, setCurrentLetter] = useState('A');
  const [location, setLocation] = useState<MaoYanCity.CityItem>();
  const { city, historyCitys, setCity, setHistoryCitys } = useCityStore();

  useEffect(() => {
    let rltCitys: MaoYanCity.SectionCityItem[] = getCitys();

    //@ts-ignore
    historyCitys.length && rltCitys.unshift({ title: '最近访问城市', data: historyCitys });

    setCitys(rltCitys);
  }, [historyCitys]);

  const setCurrentCity = useEvent((value: MaoYanCity.CityItem) => {
    setCity(value);
    setHistoryCitys(value);
    navigation.goBack();
  });

  const ItemStyle = useMemo<ViewStyle>(() => {
    return StyleSheet.flatten([styles.cityItem, { borderWidth: 0.5, width: HEADER_ITEM_WIDTH }]);
  }, []);

  const renderItem = useEvent(({ item }: { item: MaoYanCity.SectionCityItem }) => (
    <View style={styles.sectionContainer}>
      <NGVStack h={HEADER_HEIGHT} centerV>
        <NGText fontSize={12}>{item.title}</NGText>
      </NGVStack>
      <View style={styles.cityContainer}>
        {item.data.map((value, index) => {
          return (
            <Pressable key={index} onPress={() => setCurrentCity(value)}>
              <View style={ItemStyle}>
                <Text numberOfLines={1} style={styles.cityText}>
                  {value.nm}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  ));

  const renderSelectTextView = () => {
    return (
      <View style={styles.selectTextContainer}>
        <Text style={styles.selectTv}>{currentLetter}</Text>
      </View>
    );
  };

  const scrollSectionList = (event: GestureResponderEvent) => {
    const touch = event.nativeEvent.touches[0];

    if (
      touch.pageY >= sectionTopBottomHeight + 40 + statusHeight &&
      touch.pageY <= statusHeight + 40 + sectionTopBottomHeight + sectionItemHeight * 25 &&
      touch.pageX >= deviceWidth - sectionWidth &&
      touch.pageX <= deviceWidth
    ) {
      const index = (touch.pageY - sectionTopBottomHeight - 40) / sectionItemHeight;
      if (Math.round(index) >= 0 && Math.round(index) <= 25) {
        const letter = CityRank[Math.round(index)];
        letter && setCurrentLetter(letter);

        flashListRef?.current?.scrollToIndex({
          viewOffset: -6,
          viewPosition: 0,
          index: Math.round(index),
          animated: true,
        });
      }
    }
  };
  /*用户手指开始触摸*/
  const onResponderGrant = (event: GestureResponderEvent) => {
    scrollSectionList(event);
    setIsTouchDown(true);
  };

  const onResponderMove = (event: GestureResponderEvent) => {
    scrollSectionList(event);
    setIsTouchDown(true);
  };

  const onResponderRelease = () => {
    setIsTouchDown(false);
  };
  const renderSider = () => {
    return (
      <ScrollView
        style={styles.siderContainer}
        onStartShouldSetResponder={() => true} // 在用户开始触摸的时候（手指刚刚接触屏幕的瞬间），是否愿意成为响应者？
        onMoveShouldSetResponder={() => true} // :如果View不是响应者，那么在每一个触摸点开始移动（没有停下也没有离开屏幕）时再询问一次：是否愿意响应触摸交互呢？
        onResponderTerminationRequest={() => true}
        onResponderGrant={onResponderGrant}
        onResponderMove={onResponderMove}
        onResponderRelease={onResponderRelease}
      >
        {CityRank.map((cityKey, index) => {
          return (
            <NGText key={index} color={currentLetter === cityKey ? '#FD7700' : '#222'} style={styles.siderItem}>
              {cityKey}
            </NGText>
          );
        })}
      </ScrollView>
    );
  };
  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const title = viewableItems?.[0]?.item?.title;
    title && title !== currentLetter && setCurrentLetter(title);
  };

  const renderLocation = useEvent(() => {
    return (
      <NGVStack alignItems={'flex-start'}>
        <NGVStack h={HEADER_HEIGHT} centerV>
          <NGText fontSize={12}>GPS定位你所在城市</NGText>
        </NGVStack>
        {locationing ? (
          <NGVStack style={styles.cityItem}>
            <NGText>正在定位中...</NGText>
          </NGVStack>
        ) : (
          <Pressable onPress={() => setCurrentCity(location)}>
            <View style={ItemStyle}>
              <Text numberOfLines={1}>{location.nm}</Text>
            </View>
          </Pressable>
        )}
      </NGVStack>
    );
  });

  const renderListHeader = () => {
    return (
      <NGVStack bgColor={'white.default'} px={21}>
        <NGVStack h={HEADER_HEIGHT} centerV>
          <NGText fontSize={12}>
            当前城市：
            <NGText color={'theme.default'}>{city.nm}</NGText>
          </NGText>
        </NGVStack>
        {renderLocation()}
      </NGVStack>
    );
  };

  useEffect(() => {
    setTimeout(() => setCanTouch(true), 300);
  }, []);

  useEffect(() => {
    if (locationing) {
      Geolocation.getCurrentPosition((position) => {
        const { location: geolocation } = position;
        const cityName = geolocation?.city;
        if (cityName) {
          citys.forEach((item) => {
            const currentLocation = item.data.find((value) => value.chineseFullnm === cityName);
            if (currentLocation) {
              setLocation(currentLocation);
              setLocationing(false);
            }
          });
        }
      });
    }
  }, [citys, locationing]);

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={citys}
        ref={flashListRef}
        renderItem={renderItem}
        estimatedItemSize={300}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderListHeader}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      {canTouch && renderSider()}
      {isTouchDown && renderSelectTextView()}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 21,
    paddingVertical: 15,
    marginBottom: 6,
  },
  cityContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cityItem: {
    padding: 5,
    marginTop: 14,
    marginRight: 10,
    borderRadius: 8,
    // borderWidth: 0.5,
    alignItems: 'center',
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    // width: HEADER_ITEM_WIDTH,
  },
  cityText: {
    color: '#222',
  },
  siderContainer: {
    right: 10,
    width: sectionWidth,
    position: 'absolute',
    paddingTop: sectionTopBottomHeight,
    paddingBottom: sectionTopBottomHeight,
  },
  siderItem: {
    textAlign: 'center',
    alignItems: 'center',
    height: sectionItemHeight,
  },

  selectTextContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: deviceHeight / 2 - 60,
    right: deviceWidth / 2 - 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  selectTv: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});
export default ErrorCatchHOC(City);
