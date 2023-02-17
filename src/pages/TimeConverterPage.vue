<template>
  <div class="main-form">
    <h2>Конвертoр времена</h2>

    <UnitConverter class="converter" :units="timeUnits" />
  </div>
</template>

<script>
import { timeUnits } from "@/services/converter-service";
import UnitConverter from "@/components/UnitConverter.vue";

export default {
  data() {
    return {
      timeUnits: [],
    };
  },

  components: {
    UnitConverter,
  },

  created() {
    this.timeUnits = timeUnits;
  },

  name: "TimeConverterPage",
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
