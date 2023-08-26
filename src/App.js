

import React, { useContext } from 'react';
// import { Link, createBrowserRouter, RouterProvider, Route, } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Album from './Component/Album';
import Footer from './Component/Footer/Footer';
import Header from './Header';
import Home from './Component/Pages/Home';
import { myContex } from './Component/ContexApi/Contex';
import About from './Component/Pages/About';
import RootLayout from './Component/Pages/RootLayout';
import ContactUs from './Component/ContectUS/ContectUs';
import Profile from './Component/ContectUS/Authentication/Profile';
import LogIn from './Component/ContectUS/Authentication/LogIn';
import Store from './Component/Pages/Store';
import Error from './Component/Pages/Error';
import { Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// function App() {
//   const { token } = useContext(myContex);

//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: (
//         <RootLayout>
//           <LogIn />
//         </RootLayout>
//       ),
//       errorElement: <Error />,
//       children: [
//         { path: '/about', element: <About /> },
//         { path: '/store', element: <Store /> },
//         { path: '/home', element: <Home /> },
//         { path: '/contact', element: <ContactUs /> },
//         { path: '/profile', element: token ? <Profile /> : <LogIn /> },
//         { path: '/login', element: <LogIn /> },
//         { path: '/logout', element: <LogIn /> },
//       ],
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router}>

//       </RouterProvider>
//     </div>
//   );
// }

// export default App;

import ProductDetail from './Component/Modal/ProductDetail';

export default function App() {
  const { token } = useContext(myContex)
  return (
    <BrowserRouter>


      <div>
        <main>
          <RootLayout></RootLayout>
        </main>
        <Switch>


          <Route path="/login">
            <LogIn></LogIn>

          </Route>,

          <Route
            path="/home"


            render={() =>
              token ? <Home></Home> : <Redirect to="/login" />
            }
          />

          <Route path="/store"
            exact

            render={() =>
              token ? <Store></Store> : <Redirect to="/login"></Redirect>
            }
          />

          ,
          <Route path="/about"
            exact

            render={() =>
              token ? <About></About> : <Redirect to="/login"></Redirect>}
          />



          <Route path="/contact"
            exact

            render={() => token ? <ContactUs></ContactUs> : <Redirect to="/login" />}
          />



          <Route path="/logout"

            render={() => token ? <LogIn></LogIn> : <Redirect to="/login"></Redirect>}
          />



          <Route path="/profile"

            render={() => token ? <Profile></Profile> : <Redirect to="/login"></Redirect>}
          />

          <Route path="*">
            <Redirect to="/login" />
          </Route>
          <Route path="/" exact   >
            <Redirect to="/login" />
          </Route>



        </Switch>
      </div>

    </BrowserRouter>
  )
}
