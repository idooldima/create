
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../store/modals/actions';
import { Button } from '@mui/material';


export default function Navigation() {
  const dispatch = useDispatch();
  const onOpenModal = () => {
    dispatch(openModal('addList'));
  };
  return (
    <div className="nav-container">
      <div >

        <Button sx={{ color: 'black' }} className="nav-btn">
          <CalendarMonthIcon></CalendarMonthIcon>
        </Button>
      </div>
      <div>

        <Button sx={{ color: 'black' }} className="nav-btn">
          <FavoriteIcon></FavoriteIcon>
        </Button>
      </div>
      <div >

        <Button sx={{ color: 'black' }} className="nav-btn" onClick={onOpenModal}>
          <AddBoxIcon></AddBoxIcon>
        </Button>
      </div>
      <div >

        <Button sx={{ color: 'black' }} className="nav-btn" >
          <BookmarkBorderIcon></BookmarkBorderIcon>
        </Button>
      </div>

      <div >idooldima@gmail.com</div>
      <div >

        <Button sx={{ color: 'black' }} className="nav-btn">

          <LogoutIcon></LogoutIcon>

        </Button>
      </div>
    </div>
  );
}
