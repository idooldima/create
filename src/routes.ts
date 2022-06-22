import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';

type RoutesType = {
  [key: string]: {
    path: string;
    component: any;
    exact?: boolean;
  };
};

const routes: RoutesType = {
  signIn: {
    path: '/',
    component: SignUp,
    exact: true,
  },
  signUp: {
    path: '/sign-in',
    component: SignIn,
    exact: true,
  },
};

export default routes;
