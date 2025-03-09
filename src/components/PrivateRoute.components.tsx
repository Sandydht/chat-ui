import { Redirect, Route, RouteProps } from 'react-router-dom';
import { PAGE } from '../constants/page.constants';
import { getItemFromLocalStorage } from '../services/local-storage.services';
import { LOCAL_STORAGE_SERVICE } from '../constants/local-storage-service.constants';

const PrivateRoute = ({ ...props }: RouteProps) => {
  const accessToken = getItemFromLocalStorage(LOCAL_STORAGE_SERVICE.ACCESS_TOKEN);

  if (!accessToken) {
    return <Redirect to={PAGE.LOGIN} />
  }

  return <Route {...props} />
}

export default PrivateRoute