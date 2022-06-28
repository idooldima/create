import { map } from 'lodash';
import { useSelector } from 'react-redux';
import { itemListSelector } from '../../../store/itemLists/selectors';
import { ItemsTypes } from '../../../store/itemLists/types';
import ListItemCard from './listItemCard';
type Props = { listItems: ItemsTypes };

export default function ListItems({ listItems }: Props) {
  return (
    <div className="list-item-container">
      {map(listItems, (item) => (
        <ListItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
