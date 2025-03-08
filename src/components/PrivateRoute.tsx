import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PAGE } from '../constants/page.constants';

const PrivateRoute = ({ ...props }: RouteProps) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Redirect to={PAGE.LOGIN} />
  }

  return <Route {...props} />
}

export default PrivateRoute