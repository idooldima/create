import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

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
