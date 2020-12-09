/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
import React from 'react';
import { Route } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Login from '../components/layout/Login';


const PrivateRoute = (multipleprops) => {
  const { component: Component, roles, path, ...rest } = multipleprops;
  console.log('Private', path);
  const { keycloak } = useKeycloak();
  console.log(Component);

  const isAuthorized = (roles) => {
    if (keycloak?.authenticated && roles) {
      return roles.some((r) => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        return realm || resource;
      });
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={
            // eslint-disable-next-line max-len
            props => (isAuthorized(roles) ? (<Component {...props} />) : <Login component={Component} rest={rest} />)
        }
    />
  );
};

export default PrivateRoute;
