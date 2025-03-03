/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const user = useSelector((store) => store.client.user)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return Object.keys(user).length > 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
