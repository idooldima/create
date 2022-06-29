import { Button, Card, CardContent, Typography, Container, Checkbox } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ItemType } from '../../../../store/itemLists/types';
import { useEffect, useState } from 'react';
import DeleteCard from '../deleteCard';
import EditCard from '../editCard';
import { editListItemStart } from '../../../../store/itemLists/actions';
import { useDispatch } from 'react-redux';
import { map } from 'lodash';
import { format } from 'date-fns';
import SubTask from './subTask';
import { style } from './listItemCard.styles';
type Props = { item: ItemType };

export default function ListItemCard({ item }: Props) {
  const dispatch = useDispatch();
  const [showSubTask, setShowSubTask] = useState(false);
  const [state, setState] = useState(item);
  const [modals, setModals] = useState({
    deleteModal: false,
    editModal: false,
  });

  const toggleFavorite = () => {
    setState({ ...state, isFavorites: !state.isFavorites });
  };

  const toggleShowSubTask = () => {
    setShowSubTask(!showSubTask);
  };

  const toggleModal = (type: 'deleteModal' | 'editModal') => () => {
    setModals({ ...modals, [type]: !modals[type] });
  };

  useEffect(() => {
    dispatch(editListItemStart(state));
  }, [state]);

  useEffect(() => {
    setState(item);
  }, [item]);

  return (
    <div className="list-card">
      <div className="list-item">
        <Card sx={style.card}>
          <CardContent sx={{ paddingBottom: 'inherit' }}>
            <div className="list-header">
              <Typography variant="h4" component="div">
                {item.listTitle}
              </Typography>
              <div className="list-btn">
                <Button
                  onClick={toggleFavorite}
                  size="small"
                  sx={{ minWidth: 0, color: state.isFavorites ? 'red' : 'black', border: 'none' }}
                  className="nav-btn"
                >
                  <FavoriteIcon />
                </Button>
                <Button sx={style.taskBtn} onClick={toggleModal('editModal')} className="nav-btn">
                  <BorderColorIcon />
                </Button>
                <Button sx={style.taskBtn} onClick={toggleModal('deleteModal')} className="nav-btn">
                  <ClearIcon />
                </Button>
              </div>
            </div>
            <Container sx={style.container}>
              <Typography color="text.secondary">{item.category}</Typography>
              <Typography sx={style.itemId} color="text.secondary">
                {item?._id}
              </Typography>
            </Container>
            <div className="list-task-btn text-align-center">
              <div>{format(new Date(item.date), 'MM/dd/yyyy')}</div>
              {showSubTask ? (
                <Button onClick={toggleShowSubTask}>
                  <KeyboardArrowDownIcon />
                </Button>
              ) : (
                <Button onClick={toggleShowSubTask}>
                  <KeyboardArrowUpIcon />
                </Button>
              )}
            </div>
          </CardContent>
          {showSubTask ? (
            <div>
              {map(state.listItem, (item) => (
                <SubTask key={item.id} item={item}></SubTask>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          <div className="text-align-center list-share-btn">
            <Button size="small" fullWidth={true}>
              Share
            </Button>
          </div>
        </Card>
      </div>
      <EditCard item={item} isOpen={modals.editModal} closeModal={toggleModal('editModal')} />
      <DeleteCard item={item} isOpen={modals.deleteModal} closeModal={toggleModal('deleteModal')} />
    </div>
  );
}
