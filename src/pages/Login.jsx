import { Button } from '@/components/ui/button'
import useLocalStorage from '@/hooks/useLocalStorage'
import { fetchAddressList, loginUser } from '@/redux/actions/clientActions'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const user = useSelector((store) => store.client.user)
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null)
  const [redirectReady, setRedirectReady] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const rememberMe = watch('rememberMe', false)

  const onSubmit = (data) => {
    dispatch(loginUser(data))
    setRedirectReady(true)
  }

  useEffect(() => {
    if (redirectReady && Object.keys(user).length > 0) {
      const previousPage = location.state?.from?.pathname || '/'
      history.replace(previousPage)

      toast(`${user.name} hoşgeldiniz`, {
        autoClose: 2500,
        style: {
          background: 'linear-gradient(to right, #D32F2F, #26C2A3)',
          color: 'white',
        },
      })

      if (rememberMe && user.token) {
        setToken(user.token)
      }
      setRedirectReady(false)
    }

    if (user.token) {
      dispatch(fetchAddressList(user.token))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, redirectReady, rememberMe, setToken, location.state, history])

  return (
    <div className="flex justify-center items-center min-h-lvh">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-6 relative">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-6 flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" {...register('rememberMe')} />
          <label htmlFor="rememberMe" className="text-gray-700 font-semibold">
            Remember Me
          </label>
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
