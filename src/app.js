import Vue from 'vue';

window.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencyRates: [],
      selectedRateIndex: '',
      selectedRate: null,
      inputCurrency: 0,
      calculatedResult: 0
    },
    mounted(){
      this.getRates()
    },
    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencyRates = data.rates)
      },
      rateSelect: function(){
        this.selectedRate = this.currencyRates[this.selectedRateIndex]
      },
      calculateInput: function(){
        this.calculatedResult = (this.inputCurrency * this.selectedRate).toFixed(2)
      }
    }
  })
})
