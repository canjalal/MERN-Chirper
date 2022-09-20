import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";
import HomePage from "./components/HomePage/index";
import { getCurrentUser } from './store/session';
import { Route } from 'react-router-dom';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Switch>
//           <Route exact path="/login">
//             <LoginForm />
//           </Route>
//           <Route exact path="/signup">
//             <SignupForm />
//           </Route>
//           <Route exact path="/">
//             <LandingPage />
//           </Route>
//       </Switch>
    
//     </>

//   );
// }
// function App() {
//   const [loaded, setLoaded] = useState(false);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getCurrentUser()).then(() => setLoaded(true));
//   }, [dispatch]);

//   return loaded && (
//     <>
//       {/* <NavBar /> */}
//       <Switch>
//         <AuthRoute exact path="/" component={LandingPage} />
//         <AuthRoute exact path="/login" component={LoginForm} />
//         <AuthRoute exact path="/signup" component={SignupForm} />
//       </Switch>
//     </>
//   );
// }

export default App;
