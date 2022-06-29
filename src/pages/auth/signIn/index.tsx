import { signInStart } from '../../../store/auth/actions';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { style } from '../auth.styles';
import '../auth.styles.scss';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({ email: '', password: '' });
  const [validateState, setValidateState] = useState({ errUsername: '', errPassword: '' });
  const schema = yup.object().shape({
    email: yup.string().required().min(8),
    password: yup.string().required().min(8),
  });
  const signIn = () => {
    dispatch(signInStart({ email: state.email, password: state.password, navigate }));
  };
  return (
    <Box component="form" sx={style.box}>
      <h1 className="auth-title">Login to List Keeper</h1>
      <div>
        <TextField
          sx={style.input}
          className="auth-input"
          onChange={({ target: { value } }) => {
            setState({ ...state, email: value });
            schema
              .validateAt('email', { email: value })
              .then(() => setValidateState({ ...validateState, errUsername: '' }))
              .catch(function (err) {
                setValidateState({ ...validateState, errUsername: err.errors[0] });
              });
          }}
          helperText={validateState.errUsername}
          error={!!validateState.errUsername}
          placeholder="email"
          id="outlined-error"
          label="email"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          sx={style.input}
          className="auth-input"
          onChange={({ target: { value } }) => {
            setState({ ...state, password: value });
            schema
              .validateAt('password', { password: value })
              .then(() => setValidateState({ ...validateState, errPassword: '' }))
              .catch(function (err) {
                setValidateState({ ...validateState, errPassword: err.errors[0] });
              });
          }}
          type="password"
          helperText={validateState.errPassword}
          error={!!validateState.errPassword}
          placeholder="password"
          id="outlined-error-helper-text"
          label="password"
          margin="dense"
        />
      </div>
      <div className="auth-btn">
        <Button
          disabled={
            !state.email ||
            !state.password ||
            !!validateState.errUsername ||
            !!validateState.errPassword
          }
          variant="outlined"
          onClick={signIn}
        >
          SIGN IN
        </Button>
      </div>
      <div className="auth-foot">
        New user?<Link to={'/'}>Create account</Link>
      </div>
    </Box>
  );
}
