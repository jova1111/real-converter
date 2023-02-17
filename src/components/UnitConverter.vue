<template>
  <div class="main-form">
    <div class="form-group">
      <input
        type="number"
        class="value-input form-control"
        v-model="leftValue"
      />
      <select class="value-input form-control" v-model="leftUnitId">
        <option v-for="unit in units" v-bind:key="unit.id" :value="unit.id">
          {{ unit.name + " (" + unit.shortName + ")" }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <input
        type="number"
        class="value-input form-control"
        readonly
        v-model="calculatedRightValue"
      />
      <select class="value-input form-control" v-model="rightUnitId">
        <option v-for="unit in units" v-bind:key="unit.id" :value="unit.id">
          {{ unit.name + " (" + unit.shortName + ")" }}
        </option>
      </select>
    </div>
    <button id="switchConversionButton" type="button" class="btn btn-secondary" @click="switchUnits">
      Обрни конверзију
    </button>
  </div>
</template>

<script>
import { convertValue } from "@/services/converter-service";

export default {
  props: {
    units: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      leftValue: 0,
      leftUnitId: -1,
      rightUnitId: -1,
    };
  },

  computed: {
    calculatedRightValue() {
      return convertValue(
        this.leftUnitId,
        this.rightUnitId,
        this.leftValue
      ).toFixed(2);
    },
  },

  mounted() {
    this.leftUnitId = this.units[0].id;
    this.rightUnitId = this.units[0].id;
  },

  methods: {
    switchUnits() {
      let leftUnitId = this.leftUnitId;
      let rightValue = this.calculatedRightValue;
      this.leftUnitId = this.rightUnitId;
      this.rightUnitId = leftUnitId;
      this.leftValue = rightValue;
    },
  },

  name: "UnitConverter",
};
</script>

<style scoped>
.main-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.value-input {
  margin: 5px;
}

#switchConversionButton {
  margin: auto;
}

</style>

