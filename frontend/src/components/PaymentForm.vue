<template>
  <div>
    <h2>Make a Payment</h2>
    <form @submit.prevent="makePayment">
      <label>Card Number:</label>
      <input type="text" v-model="cardNumber" required>
      <label>Expiry Date:</label>
      <input type="text" v-model="expiryDate" required>
      <label>CVV:</label>
      <input type="text" v-model="cvv" required>
      <label>Amount:</label>
      <input type="number" v-model.number="amount" required>
      <button type="submit">Pay</button>
    </form>
    <p v-if="paymentResult">{{ paymentResult }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PaymentForm extends Vue {
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  amount: number | null = null;
  paymentResult: string = '';

  async makePayment() {
    try {
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cardNumber: this.cardNumber,
          expiryDate: this.expiryDate,
          cvv: this.cvv,
          amount: this.amount
        })
      });
      const data = await response.json();
      this.paymentResult = data.message;
    } catch (error) {
      console.error('Error:', error);
      this.paymentResult = 'Payment failed. Please try again.';
    }
  }
}
</script>
