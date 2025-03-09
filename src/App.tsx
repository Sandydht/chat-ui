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
import { AuthProvider } from './contexts/AuthContext.contexts';

const App = () => {
  return (
    <Router>
      <AuthProvider>
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
      </AuthProvider>
    </Router>
  )
}

export default App
