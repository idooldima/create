import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect, useState } from 'react';
import { addItemStart } from '../../../store/itemLists/actions';
import { v4 as uuidv4 } from 'uuid';
import { ItemType } from '../../../store/itemLists/types';
import { map } from 'lodash';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { style } from './addList.styles';

type Props = { isOpen: boolean; closeModal: () => void };

export default function AddList({ isOpen, closeModal }: Props) {
  const dispatch = useDispatch();
  const initialState = {
    listTitle: '',
    category: '',
    isFavorites: false,
    listItem: [
      {
        id: uuidv4(),
        task: '',
        complete: false,
      },
    ],
    date: new Date('2022-06-30T21:11:54').toISOString(),
  };
  const [state, setState] = useState<ItemType>(initialState);

  const addItem = () => {
    dispatch(
      addItemStart({
        listTitle: state.listTitle,
        category: state.category,
        isFavorites: state.isFavorites,
        listItem: state.listItem,
        date: state.date,
      })
    );
    closeModal();
  };

  const handleChange = (newValue: Date | null) => {
    setState({ ...state, date: newValue?.toISOString() || initialState.date });
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

  useEffect(() => {
    if (!isOpen) {
      setState(initialState);
    }
  }, [isOpen]);

  return (
    <Modal
      onClose={closeModal}
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.box}>
        <Container sx={style.container}>
          <Typography variant="h4">Card</Typography>
          <div className="nav-btn">
            <Button sx={[style.buttonIsfavorite, { color: state.isFavorites ? 'red' : 'black' }]} onClick={toggleFavorite}>
              <FavoriteIcon />
            </Button>
            <Button sx={style.buttonClose} onClick={closeModal}>
              <ClearIcon />
            </Button>
          </div>
        </Container>
        <Container>
          <Typography sx={style.alignCenter}>Title of your card</Typography>
          <TextField
            onChange={({ target: { value } }) => {
              setState({ ...state, listTitle: value });
            }}
            fullWidth
            sx={style.marginBottom}
          ></TextField>
          <Typography>Select category and date</Typography>
          <Typography>Also you can create your own category in navbar menu</Typography>
          <div>
            <TextField
              onChange={({ target: { value } }) => {
                setState({ ...state, category: value });
              }}
              sx={style.marginBottom}
            >
              {' '}
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={new Date(state.date)}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <Typography sx={style.alignCenter}>Add some cards items</Typography>
          <div>
            {map(state.listItem, (item) => (
              <div className="display-flex align-items" key={item.id}>
                <TextField
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
                  X
                </Button>
              </div>
            ))}
          </div>
          <div className="text-align-center">
            <Button sx={style.addSubTaskBtn} onClick={addSubTask}>
              <AddBoxIcon />
            </Button>
          </div>
          <div>
            <Button onClick={addItem} fullWidth sx={style.addTaskBtn}>
              SAVE
            </Button>
          </div>
        </Container>
      </Box>
    </Modal>
  );
}
