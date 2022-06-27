import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
type Props = { onChange: (value: string) => void };

export default function Search({ onChange }: Props) {
  return (
    <div className="">
      <form className="search">
        <TextField
          onChange={({ target: { value } }) => onChange(value)}
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
