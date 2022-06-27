import { useState } from 'react';
import { useSelector } from 'react-redux';
import { filteredItemListSelector } from '../../store/itemLists/selectors';
import Header from './header';
import ListItems from './listItems';

export default function Main() {
  const [keyWord, setKeyWord] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const filteredItems = useSelector(filteredItemListSelector(keyWord, isFavorite));
  return (
    <div className="home-container">
      <Header onSearch={setKeyWord} isFavorite={isFavorite} setIsFavorite={setIsFavorite}></Header>
      <ListItems listItems={filteredItems}  ></ListItems>
    </div>
  );
}
