import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { ItemType } from '../../../../store/itemLists/types';
import { deleteListItemStart } from '../../../../store/itemLists/actions';
type Props = { item: ItemType; isOpen: boolean; closeModal: () => void };

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: '#eaeaea',
  borderRadius: 6,
  boxShadow: 20,
  p: 4,
  textAlign: 'center',
};

export default function DeleteCard({ item, isOpen, closeModal }: Props) {
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    if (item._id) {
      dispatch(deleteListItemStart(item._id));
    }
  };

  return (
    <Modal
      onClose={closeModal}
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>You sure?</Typography>
        <Button onClick={onDeleteItem}>
          <ThumbUpAltIcon />
        </Button>
        <Button onClick={closeModal}>
          <ClearIcon />
        </Button>
      </Box>
    </Modal>
  );
}
