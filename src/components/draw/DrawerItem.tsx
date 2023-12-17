import { MaoYanRoute } from '@myTypes/route';
import globalStyle from '@styles/globalStyle';
import { pathMap } from '@svgs/path';
import { NGCenter, RowItem, ShadowBox, SvgIcon } from '@ui';
import { vw } from '@utils/scale';
import { get } from 'lodash';
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const DrawerItem: React.FC<MaoYanRoute.DrawerItem> = ({ data, itemTitle }) => {
  const { t } = useTranslation();

  const dataLen = useMemo(() => data.length, [data]);
  const parentTitle = useMemo(() => t(itemTitle), [t, itemTitle]);

  const childTitle = (values: string[]) => {
    return values.map((value) => t(value)).join('');
  };
  const renderLeftIcon = (item) => {
    const paths = get(pathMap, `${item.path}`);
    return <NGCenter>{paths && <SvgIcon fills={['#333']} paths={paths} size={20} />}</NGCenter>;
  };

  return (
    <ShadowBox boxWidth={vw(65)} boxStyle={{ marginTop: 30 }}>
      <RowItem
        titleML={0}
        itemType="hidden"
        showItemSeparator
        itemTitle={parentTitle}
        straightLineWidth={vw(65) - 32}
        itemStyle={globalStyle.paddingH15}
      />
      {data.map((item, index) => {
        return (
          <RowItem
            key={index}
            straightLineWidth={vw(65) - 54}
            leftIcon={renderLeftIcon(item)}
            itemStyle={globalStyle.paddingH15}
            itemTitle={childTitle(item.labels)}
            showItemSeparator={index < dataLen - 1}
          />
        );
      })}
    </ShadowBox>
  );
};

export default memo(DrawerItem);
