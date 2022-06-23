import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <div className="">
      <form className="search">
        <TextField
          label="Search list by Title"
          InputProps={{
            endAdornment: (
              <InputAdornment position={'start'}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
}
