import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ItemType } from '../../../../store/itemLists/types';
import { useState } from 'react';
import { editListItemStart } from '../../../../store/itemLists/actions';
import { map } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { style } from './editCard.styles';
type Props = { item: ItemType; isOpen: boolean; closeModal: () => void };

export default function EditCard({ item, isOpen, closeModal }: Props) {
  const dispatch = useDispatch();
  const [state, setState] = useState(item);

  const editItem = () => {
    dispatch(editListItemStart(state));
    closeModal();
  };

  const toggleFavorite = () => {
    setState({ ...state, isFavorites: !state.isFavorites });
  };

  const addSubTask = () => {
    const newSubTask = {
      id: uuidv4(),
      task: '',
      complete: false,
    };
    setState({
      ...state,
      listItem: [...state.listItem, newSubTask],
    });
  };
  return (
    <Modal
      onClose={closeModal}
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.modalBox}>
        <Container sx={style.container}>
          <Typography variant="h4">{item.listTitle}</Typography>
          <div className="nav-btn">
            <Button
              sx={[style.isFavoriteBtn, { color: state.isFavorites ? 'red' : 'black' }]}
              onClick={toggleFavorite}
            >
              <FavoriteIcon></FavoriteIcon>
            </Button>
            <Button sx={style.closeBtn} onClick={closeModal}>
              <ClearIcon></ClearIcon>
            </Button>
          </div>
        </Container>
        <Container>
          <Typography sx={style.alignCenter}>Title of your card</Typography>
          <TextField
            fullWidth
            sx={style.marginBottom}
            value={state.listTitle}
            onChange={({ target: { value } }) => {
              setState({ ...state, listTitle: value });
            }}
          ></TextField>
          <Typography>Change category</Typography>
          <Typography>Also you can create your own category in navbar menu</Typography>
          <div>
            <TextField
              sx={style.marginBottom}
              value={state.category}
              onChange={({ target: { value } }) => {
                setState({ ...state, category: value });
              }}
            >
              {' '}
            </TextField>
          </div>
          <Typography sx={style.alignCenter}>Add some cards items</Typography>
          <div>
            {map(state.listItem, (item) => (
              <div className="display-flex align-items" key={item.id}>
                <TextField
                  value={item.task}
                  onChange={({ target: { value } }) => {
                    setState({
                      ...state,
                      listItem: state.listItem.map((task) =>
                        task.id === item.id ? { ...task, task: value } : task
                      ),
                    });
                  }}
                  sx={style.subTaskInput}
                ></TextField>
                <Button
                  onClick={() =>
                    setState({
                      ...state,
                      listItem: state.listItem.filter((task) => task.id !== item.id),
                    })
                  }
                >
                  <ClearIcon />
                </Button>
              </div>
            ))}
          </div>
          <div className="text-align-center">
            <Button sx={style.addTaskBtn} onClick={addSubTask}>
              <AddBoxIcon></AddBoxIcon>
            </Button>
          </div>
          <div>
            <Button onClick={editItem} fullWidth sx={style.editTaskBtn}>
              SAVE CHANGES
            </Button>
          </div>
        </Container>
      </Box>
    </Modal>
  );
}
