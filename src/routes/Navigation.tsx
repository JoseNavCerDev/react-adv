import logo from '../logo.svg';

import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading ...</span>}>    
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />

              <ul>
                {
                  routes.map(
                    (route) => (
                      <li key={route.path}>
                        <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                      </li>                    
                    )
                  )
                }
              </ul>       
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>

            {
              routes.map(
                (route) => (
                  <Route 
                    key={route.path}
                    path={route.to}
                    element={<route.Component/>}
                  >
                </Route>
                )
              )
            }

            <Route
              path='/*'
              element={<Navigate to={ routes[0].to} replace/>}
            >

            </Route>

          </Routes>
        </div>
      </Router>

      

    </Suspense>
  );
}