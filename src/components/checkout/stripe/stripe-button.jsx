import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
  const priceForStripe = price * 100
  const pbKey = 'pk_test_BfV7vWw6FOZAMzTUMDLTocOt00qcULxpCq'

  const onToken = token => {
    console.log(token)
    alert('Congrats! (ᵔᴥᵔ) incoming')
  }

  return (
    <StripeCheckout
      label='Paw Now'
      name='Paw Play'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/LMM.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Paw Now'
      token={onToken}
      stripeKey={pbKey}
      allowRememberMe
    />
  )
}

// test card: 4242 4242 4242 4242 exp: 01/21 CW: 123

export default StripeButton