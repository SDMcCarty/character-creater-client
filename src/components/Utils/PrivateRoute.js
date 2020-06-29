import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'

function PrivateRoute({ component, ...props }) {
  console.log(component, props)
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => {
        console.log(componentProps)
        return TokenService.getAuthToken()
          ? <Component {...componentProps} />
          : <Redirect
            to={{
              pathname: '/login',
              state: { from: componentProps.location }
            }}
            />
          }}
    />
  )
}

export default PrivateRoute