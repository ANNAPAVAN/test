// import logo from './logo.svg';
// import './App.css';
// import Lab6 from './components/Lab6';
// import Lab7 from './components/Lab7';

// function App() {
//   return (
//     <div className="App">
//       <Lab6/>

//       {/* <Lab7/> */}

//     </div>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------


import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from './components/Lab8/AuthContext';
import Login from './components/Lab8/Login';
import Home from './components/Lab8/Home';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);


// ----------------------------------------------------------------------