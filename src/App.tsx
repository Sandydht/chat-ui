import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { PAGE } from './constants/page.constant';
import Login from './pages/Login.page';
import PrivateRoute from './components/PrivateRoute.component';
import Home from './pages/Home.page';
import Register from './pages/Register.page';
import ForgotPassword from './pages/ForgotPassword.page';
import Snackbar from './components/Snackbar.component';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeSnackbar } from './store/snackbarSlice';
import { connectSocket } from './services/socket-io.service';

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

  useEffect(() => {
    connectSocket();
  }, [])

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
