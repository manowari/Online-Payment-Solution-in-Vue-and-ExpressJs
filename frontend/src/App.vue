<template>
  <div id="app">
    <PaymentForm />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PaymentForm from './components/PaymentForm.vue';

@Component
export default class App extends Vue {
  // Add any necessary logic here
}
</script>
