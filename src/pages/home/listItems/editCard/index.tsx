import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ItemType } from '../../../../store/itemLists/types';
import { useState } from 'react';
import { editListItemStart } from '../../../../store/itemLists/actions';
type Props = { item: ItemType; isOpen: boolean; closeModal: () => void };

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

export default function EditCard({ item, isOpen, closeModal, }: Props) {
  const dispatch = useDispatch();
  const [state, setState] = useState(item);
  const editItem = () => {
    dispatch(editListItemStart(state))
    closeModal()
  }
  const toggleFavorite = () => {
    setState({ ...state, isFavorites: !state.isFavorites });
  };
  console.log(state.isFavorites)
  return (
    <Modal
      onClose={closeModal}
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
          <Typography variant="h4">{item.listTitle}</Typography>
          <div className="nav-btn">
            <Button sx={{ border: 'none', padding: '0', color: state.isFavorites ? 'red' : 'black', width: 2 }} onClick={toggleFavorite}>
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
            fullWidth
            sx={{ marginBottom: 2 }}
            value={state.listTitle}
            onChange={({ target: { value } }) => {
              setState({ ...state, listTitle: value });
            }}
          ></TextField>
          <Typography>Select category and date</Typography>
          <Typography>Also you can create your own category in navbar menu</Typography>
          <div>
            <TextField
              sx={{ marginBottom: 2 }}
              value={state.category}
              onChange={({ target: { value } }) => {
                setState({ ...state, category: value });
              }}
            >
              {' '}
            </TextField>
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
              onClick={editItem}
              fullWidth
              sx={{ color: 'black', backgroundColor: '#dcdcdc', textAlign: 'center' }}
            >
              SAVE CHANGES
            </Button>
          </div>
        </Container>
      </Box>
    </Modal>
  );
}
