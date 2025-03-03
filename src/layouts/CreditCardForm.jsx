import { Button } from '@/components/ui/button'
import { addCreditCard } from '@/redux/actions/clientActions'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
function AddCreditCardForm({ onCardAdded }) {
  const [showForm, setShowForm] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const userToken = useSelector((store) => store.client.user.token)

  const onSubmit = async (data) => {
    const formattedData = {
      card_no: data.card_no,
      expire_month: parseInt(data.expire_month, 10),
      expire_year: parseInt(data.expire_year, 10),
      name_on_card: data.name_on_card,
    }
    try {
      dispatch(addCreditCard(formattedData, userToken))
      if (onCardAdded) onCardAdded()
    } catch (error) {
      console.error('Failed to add credit card:', error)
    }
    reset()
    setShowForm(false)
  }

  const closeForm = () => {
    reset()
    setShowForm(false)
  }

  return (
    <div className="flex flex-col">
      <Button onClick={() => setShowForm(!showForm)}>Add Credit Card</Button>

      {showForm && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
            <button onClick={closeForm} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Add Credit Card</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register('card_no', {
                    required: 'Card number is required',
                    pattern: {
                      value: /^\d{16}$/,
                      message: 'Card number must be 16 digits',
                    },
                  })}
                />
                {errors.card_no && <p className="text-red-500 text-sm">{errors.card_no.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name on Card</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register('name_on_card', {
                    required: 'Name on card is required',
                  })}
                />
                {errors.name_on_card && <p className="text-red-500 text-sm">{errors.name_on_card.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Expiration Date</label>
                <div className="flex gap-2">
                  <select
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    {...register('expire_month', {
                      required: 'Expiration month is required',
                    })}
                  >
                    <option value="">Month</option>
                    {[...Array(12).keys()].map((month) => (
                      <option key={month + 1} value={month + 1}>
                        {month + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    {...register('expire_year', {
                      required: 'Expiration year is required',
                    })}
                  >
                    <option value="">Year</option>
                    {[...Array(20).keys()].map((year) => (
                      <option key={year} value={2023 + year}>
                        {2023 + year}
                      </option>
                    ))}
                  </select>
                </div>
                {(errors.expire_month || errors.expire_year) && (
                  <p className="text-red-500 text-sm">{errors.expire_month?.message || errors.expire_year?.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register('cvv', {
                    required: 'CVV is required',
                    pattern: {
                      value: /^\d{3}$/,
                      message: 'CVV must be 3 digits',
                    },
                  })}
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
              </div>

              <div className="flex justify-end gap-4">
                <Button type="button" onClick={closeForm} className="bg-gray-400 hover:bg-gray-500">
                  Cancel
                </Button>
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddCreditCardForm
