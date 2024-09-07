
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkOut';

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY}`);

const Payment = () => {

const price = 20


  return (
    <div>
     
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}  />
        </Elements>
    
      
    </div>
  );
};

export default Payment;
