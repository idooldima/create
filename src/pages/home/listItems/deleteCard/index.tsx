import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { ItemType } from '../../../../store/itemLists/types';
import { deleteListItemStart } from '../../../../store/itemLists/actions';
import { style } from './deleteCard.styles';
type Props = { item: ItemType; isOpen: boolean; closeModal: () => void };

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
      <Box sx={style.modalBox}>
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
