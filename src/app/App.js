import { Provider } from 'react-redux';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import Home from '../pages/home';
import Turfs from '../pages/turfs';
import SigningIn, { SigningUp } from '../user/singin';
import Store from '../redux/store/store';
import UserProfile from '../components/user_profile';
import TurfSingle from '../pages/turf_single';

function App() {
  return (
     <Provider store={Store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allTurfs" element={<Turfs />} />
          <Route exact path="/allTurfs/:turf" element={<TurfSingle />} />
          <Route exact path="/singin" element={<SigningIn />} />
          <Route exact path="/singup" element={<SigningUp />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
