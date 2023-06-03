<template>
  <div class="main-form">
    <h2>Конвертор валуте</h2>

    <UnitConverter class="converter" :units="moneyUnits" />

    <div id="notes">
      <span class="note">* за курсну вредност кутије цигара се узима просечна цена кутије цигара у Србији</span>
      <span class="note">** за курсну вредност рол виршле се узима цена у пекари која је најближа Стефановом пребивалишту</span>
    </div>
  </div>
</template>

<script>
import { moneyUnits } from "@/services/converter-service";
import UnitConverter from "@/components/UnitConverter.vue";

export default {
  data() {
    return {
      moneyUnits: [],
    };
  },

  components: {
    UnitConverter,
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

#notes {
  font-size: small;
  color: rgb(102, 102, 102);
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}

.note {
  margin: 5px;
}

</style>
