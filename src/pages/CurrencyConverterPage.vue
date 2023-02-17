<template>
  <div class="main-form">
    <h2>Конвертор валуте</h2>

    <UnitConverter class="converter" :units="moneyUnits" />
  </div>
</template>

<script>
import { moneyUnits } from "@/services/converter-service";
import UnitConverter from "@/components/UnitConverter.vue";

export default {
  data() {
    return {
      moneyUnits: []
    };
  },

  components: {
    UnitConverter
  },

  created() {
    this.moneyUnits = moneyUnits;
  },

  name: "CurrencyConverterPage",
};
</script>

<style scoped>
.main-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
}

.converter {
  margin: 10px;
}
</style>
