/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCreditCards,
  updateCreditCard,
} from "@/redux/actions/clientActions";
import { Button } from "@/components/ui/button";

const CreditCardUpdateForm = ({ id, cardData, onClose }) => {
  const dispatch = useDispatch();
  const userToken = useSelector((store) => store.client.user.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      card_no: cardData.card_no,
      name_on_card: cardData.name_on_card,
      expire_month: cardData.expire_month,
      expire_year: cardData.expire_year,
      cvv: cardData.cvv,
    },
  });

  const onSubmit = (data) => {
    const updatedData = { id, ...data };
    dispatch(updateCreditCard(updatedData, userToken));
    dispatch(fetchCreditCards(userToken));
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Update Credit Card
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Card Number
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("card_no", {
            required: "Card number is required",
            minLength: 16,
            maxLength: 16,
          })}
        />
        {errors.card_no && (
          <p className="text-red-500 text-sm">{errors.card_no.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Name on Card
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("name_on_card", {
            required: "Name on card is required",
          })}
        />
        {errors.name_on_card && (
          <p className="text-red-500 text-sm">{errors.name_on_card.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Expiration Date
        </label>
        <div className="flex gap-2">
          <select
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("expire_month", {
              required: "Expiration month is required",
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
            {...register("expire_year", {
              required: "Expiration year is required",
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
          <p className="text-red-500 text-sm">
            {errors.expire_month?.message || errors.expire_year?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">CVV</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("cvv", {
            required: "CVV is required",
            minLength: 3,
            maxLength: 4,
          })}
        />
        {errors.cvv && (
          <p className="text-red-500 text-sm">{errors.cvv.message}</p>
        )}
      </div>

      <div className="flex justify-between">
        <Button onClick={onClose} variant="outline">
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Update Card
        </Button>
      </div>
    </form>
  );
};

export default CreditCardUpdateForm;
