import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { PAGE } from './constants/page.constants';
import Login from './pages/Login.pages';
import PrivateRoute from './components/PrivateRoute.components';
import Home from './pages/Home.pages';
import Register from './pages/Register.pages';
import ForgotPassword from './pages/ForgotPassword.pages';
import Snackbar from './components/Snackbar.components';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeSnackbar } from './store/snackbarSlice';

const App = () => {
  const dispatch = useDispatch();
  const snackbarState = useSelector((state: RootState) => state.snackbar);

  useEffect(() => {
    let setTimeoutID = 0;
    if (snackbarState.show == true) {
      setTimeoutID = setTimeout(() => {
        dispatch(closeSnackbar());
      }, 3000);
    }

    return () => clearTimeout(setTimeoutID);
  }, [snackbarState.show])

  return (
    <>
      {snackbarState.show && (
        <Snackbar
          type={snackbarState.type}
          message={snackbarState.message}
        />
      )}
      <Router>
        <Switch>
          {/* Public Route */}
          <Route path={PAGE.LOGIN}>
            <Login />
          </Route>
          <Route path={PAGE.REGISTER}>
            <Register />
          </Route>
          <Route path={PAGE.FORGOT_PASSWORD}>
            <ForgotPassword />
          </Route>

          {/* Private Route */}
          <PrivateRoute path={PAGE.HOME}>
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  )
}

export default App
