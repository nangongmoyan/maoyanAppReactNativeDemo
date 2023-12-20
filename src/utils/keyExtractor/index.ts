export const keyExtractor = (item: any, index: number) => (item.id ? `${item.id}_${index}` : index.toString());
