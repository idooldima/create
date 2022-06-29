import Navigation from './navigation';
import Search from './search';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Grid } from '@mui/material';
import './header.styles.scss'
type Props = {
  onSearch: (value: string) => void;
  isFavorite: boolean;
  setIsFavorite: (value: boolean) => void;
};

export default function Header({ onSearch, isFavorite, setIsFavorite }: Props) {
  return (
    <div className="header-container">
      <Grid>
        <Search onChange={onSearch} />
      </Grid>
      <Grid>
        <div className="header-title text-align-center">
          <EventNoteIcon fontSize="large" />
          <h1>List Keeper</h1>
        </div>
      </Grid>
      <Grid>
        <Navigation isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      </Grid>
    </div>
  );
}
