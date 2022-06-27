import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
import { addItemStart } from '../../../store/itemLists/actions';
import { v4 as uuidv4 } from 'uuid'
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

type Props = { isOpen: boolean; closeModal: () => void };

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: '#eaeaea',
  borderRadius: 6,
  boxShadow: 20,
  p: 4,
};

export default function AddList({ isOpen, closeModal }: Props) {
  const dispatch = useDispatch();
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
  const [state, setState] = useState({
    listTitle: '',
    category: '',
    isFavorites: false,
    listItem: [],
    date: 'date',
  });
  const toggleFavorite = () => {
    setState({ ...state, isFavorites: !state.isFavorites });
  };

  // const addSubTask = (userInput: string) => {
  //   if (userInput) {
  //     const newSubTask = {
  //       id: uuidv4(),
  //       task: userInput,
  //       complete: false,
  //     };
  //     setState({ ...state, listItem: [...state.listItem, newSubTask] });
  //   }
  // };


  return (
    <Modal
      onClose={closeModal}
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
          <Typography variant="h4">Card</Typography>
          <div className="nav-btn">
            <Button
              sx={{ border: 'none', padding: '0', width: 2, color: state.isFavorites ? 'red' : 'black' }}
              onClick={toggleFavorite}
            >
              <FavoriteIcon></FavoriteIcon>
            </Button>
            <Button sx={{ border: 'none', padding: '0', color: 'black' }} onClick={closeModal}>
              <ClearIcon></ClearIcon>
            </Button>
          </div>
        </Container>
        <Container>
          <Typography sx={{ textAlign: 'center' }}>Title of your card</Typography>
          <TextField
            onChange={({ target: { value } }) => {
              setState({ ...state, listTitle: value });
            }}
            fullWidth
            sx={{ marginBottom: 2 }}
          ></TextField>
          <Typography>Select category and date</Typography>
          <Typography>Also you can create your own category in navbar menu</Typography>
          <div>
            <TextField
              onChange={({ target: { value } }) => {
                setState({ ...state, category: value });
              }}
              sx={{ marginBottom: 2 }}
            >
              {' '}
            </TextField>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disableFuture
                label="Responsive"
                openTo="year"
                views={['year', 'month', 'day']}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
          </div>
          <Typography sx={{ textAlign: 'center' }}>Add some cards items</Typography>
          <TextField fullWidth sx={{ marginBottom: 2 }}></TextField>
          <div className="text-align-center">
            <Button sx={{ color: 'black', marginTop: 10 }}>
              <AddBoxIcon></AddBoxIcon>
            </Button>
          </div>
          <div>
            <Button
              onClick={addItem}
              fullWidth
              sx={{ color: 'black', backgroundColor: '#dcdcdc', textAlign: 'center' }}
            >
              SAVE
            </Button>
          </div>
        </Container>
      </Box>
    </Modal >
  );
}
