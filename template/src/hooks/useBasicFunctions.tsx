import {useAppDispatch} from 'hooks';
import {setItem} from 'utils';
import {logIn, logOut} from 'features';

const useBasicFunctions = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    setItem('Login', true);
    dispatch(logIn());
  };

  const handleLogout = () => {
    setItem('Login', false);
    dispatch(logOut());
  };
  return {
    handleLogin,
    handleLogout,
  };
};

export default useBasicFunctions;
