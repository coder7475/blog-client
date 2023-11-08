import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuth = () => {
  const rs = useContext(AuthContext);
  // console.log(auth);
  return rs;
};

export default useAuth;