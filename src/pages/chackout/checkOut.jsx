import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import useAuth from '../../api/useAuth';

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [cardError, setCardError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
  };

  return (
    <div className='mt-[100px]'>
        <div className="max-w-lg mx-auto  p-6 bg-white border border-[#E8E8E8] rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Complete Your Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="card">
            Credit or Debit Card
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          className={`ursor-pointer w-full c py-3 px-6 rounded-lg text-white bg-black ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
        {cardError && <p className="text-red-600 mt-4 text-center">{cardError}</p>}
        {transactionId && <p className="text-green-600 mt-4 text-center">Transaction Complete. Your Transaction Id: {transactionId}</p>}
      </form>
    </div>
    </div>
  );
};

export default CheckoutForm;
