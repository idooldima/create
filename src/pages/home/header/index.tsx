import Navigation from './navigation';
import Search from './search';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Grid } from '@mui/material';

export default function Header() {
  return (
    <div className="header-container">
      <Grid item xs={4}>
        <Search />
      </Grid>
      <Grid item xs={4}>
        <div className="header-title text-align-center">
          <EventNoteIcon fontSize="large" />
          <h1>List Keeper</h1>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Navigation></Navigation>
      </Grid>
    </div>
  );
}
