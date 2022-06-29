import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { style } from '../auth.styles';
import { signUpStart } from '../../../store/auth/actions';
import '../auth.styles.scss';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({ email: '', password: '', passwordConfirmation: '' });
  const [validateState, setValidateState] = useState({
    errUsername: '',
    errPassword: '',
    errPasswordConfirmation: '',
  });
  const schema = yup.object().shape({
    email: yup.string().required().min(8),
    password: yup.string().required().min(8),
    passwordConfirmation: yup
      .string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return state.password === value;
      }),
  });
  const signUp = () => {
    dispatch(signUpStart({ email: state.email, password: state.password, navigate }));
  };
  return (
    <Box component="form" sx={style.box}>
      <h1 className="auth-title">Register to List Keeper</h1>
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
      <div>
        <TextField
          sx={style.input}
          className="auth-input"
          onChange={({ target: { value } }) => {
            setState({ ...state, passwordConfirmation: value });
            schema
              .validateAt('passwordConfirmation', { passwordConfirmation: value })
              .then(() => setValidateState({ ...validateState, errPasswordConfirmation: '' }))
              .catch(function (err) {
                setValidateState({ ...validateState, errPasswordConfirmation: err.errors[0] });
              });
          }}
          type="password"
          helperText={validateState.errPasswordConfirmation}
          error={!!validateState.errPasswordConfirmation}
          placeholder="confirm your password"
          id="outlined-error-helper-text"
          label="confirm your password"
          margin="dense"
        />
      </div>
      <div className="auth-btn">
        <Button
          disabled={
            !state.email ||
            !state.password ||
            !state.passwordConfirmation ||
            !!validateState.errUsername ||
            !!validateState.errPassword ||
            !!validateState.errPasswordConfirmation
          }
          variant="outlined"
          onClick={signUp}
        >
          SIGN UP
        </Button>
      </div>
      <div className="auth-foot">
        Have account? <Link to={'/sign-in'}>Sign in</Link>
      </div>
    </Box>
  );
}
