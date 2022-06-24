import { map } from 'lodash';
import { useSelector } from 'react-redux';
import { itemListSelector } from '../../../store/itemLists/selectors';
import ListItemCard from './listItemCard';

export default function ListItems() {
  const items = useSelector(itemListSelector);

  return (
    <div className="list-item-container">
      {map(items, (item) => (
        <ListItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
