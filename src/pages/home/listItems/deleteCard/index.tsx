import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../store/modals/actions';
import { isOpenModal } from '../../../../store/modals/selectors';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';



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

export default function DeleteList() {
    const dispatch = useDispatch();
    const active = useSelector(isOpenModal('deleteList'));
    const onCloseModal = () => {
        dispatch(closeModal('deleteList'))
    }

    return (
        <Modal
            onClose={() => dispatch(closeModal('deleteList'))}
            open={active}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography>You sure?</Typography>
                <Button><ThumbUpAltIcon></ThumbUpAltIcon></Button>
                <Button onClick={onCloseModal}><ClearIcon></ClearIcon></Button>
            </Box>
        </Modal>
    );
}