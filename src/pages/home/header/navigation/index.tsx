import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { currentUserSelector } from '../../../../store/auth/selectors';
import AddList from '../../addList';
import { useState } from 'react';
import { logout } from '../../../../store/auth/actions';
import { style } from '../header.styles';
type Props = { isFavorite: boolean; setIsFavorite: (value: boolean) => void };

export default function Navigation({ isFavorite, setIsFavorite }: Props) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(currentUserSelector);
  const logOut = () => {
    dispatch(logout());
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="nav-container">
      <div>
        <Button sx={style.headerBtn} className="nav-btn">
          <CalendarMonthIcon />
        </Button>
      </div>
      <div>
        <Button
          onClick={toggleFavorite}
          sx={{ color: isFavorite ? 'red' : 'black' }}
          className="nav-btn"
        >
          <FavoriteIcon />
        </Button>
      </div>
      <div>
        <Button sx={style.headerBtn} className="nav-btn" onClick={openModal}>
          <AddBoxIcon />
        </Button>
      </div>
      <div>
        <Button sx={style.headerBtn} className="nav-btn">
          <BookmarkBorderIcon />
        </Button>
      </div>

      <div>{user?.user.email}</div>
      <div>
        <Button onClick={logOut} sx={style.headerBtn} className="nav-btn">
          <LogoutIcon />
        </Button>
      </div>
      <AddList isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
