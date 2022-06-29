import { map } from 'lodash';
import { ItemsTypes } from '../../../store/itemLists/types';
import ListItemCard from './listItemCard';
import './listItem.scss';
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
