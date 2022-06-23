import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../store/modals/actions';
import { isOpenModal } from '../../../store/modals/selectors';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect } from 'react';
import { addItemStart } from '../../../store/itemLists/actions';
import { TurnedIn } from '@mui/icons-material';


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

export default function AddList() {
    const dispatch = useDispatch();
    const active = useSelector(isOpenModal('addList'));
    useEffect(() => {
        dispatch(addItemStart({ listTitle: 'user', category: 'dasd', isFavorites: true, listItem: [], date: '123456' }))
    }, [])

    const onCloseModal = () => {
        dispatch(closeModal('addList'))
    }


    return (
        <Modal
            onClose={() => dispatch(closeModal('addList'))}
            open={active}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Typography variant="h4">Card</Typography>
                    <div className='nav-btn'>
                        <Button sx={{ border: 'none', padding: '0', color: 'black', width: 2 }}><FavoriteIcon></FavoriteIcon></Button>
                        <Button sx={{ border: 'none', padding: '0', color: 'black' }} onClick={onCloseModal}><ClearIcon></ClearIcon></Button>
                    </div>
                </Container>
                <Container>
                    <Typography sx={{ textAlign: 'center' }}>Title of your card</Typography>
                    <TextField fullWidth sx={{ marginBottom: 2 }}></TextField>
                    <Typography>Select category and date</Typography>
                    <Typography >Also you can create your own category in navbar menu</Typography>
                    <div>
                        <TextField sx={{ marginBottom: 2 }}> </TextField>
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>

                            <DateTimePicker
                                label="Date&Time picker"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />

                        </LocalizationProvider> */}
                    </div>
                    <Typography sx={{ textAlign: 'center' }}>Add some cards items</Typography>
                    <TextField fullWidth sx={{ marginBottom: 2 }}></TextField>
                    <div className='text-align-center'>
                        <Button sx={{ color: 'black', marginTop: 10 }}><AddBoxIcon></AddBoxIcon></Button>
                    </div>
                    <div >
                        <Button fullWidth sx={{ color: 'black', backgroundColor: '#dcdcdc', textAlign: 'center' }}>SAVE</Button>
                    </div>
                </Container>
            </Box>
        </Modal>
    );
}
