<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-sm-3 col-lg-2">Level 1: .col-sm-3</div>
      <div class="col-sm-9 col-lg-10">
        <div class="row">
          <div class="col-8 col-sm-6 col-lg-8">
            <canvas :id="ID_hook"></canvas>
          </div>
          <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
          <div class="col-4 col-lg-6">Level 2: .col-4 .col-sm-6</div>
          <div class="col-4 col-lg-6">Level 2: .col-4 .col-sm-6</div>
          <div class="col-sm-4 col-lg-6">Level 2: .col-4 .col-sm-6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less"></style>

<script>
import Chart from "chart.js/auto";
import { ref, useId } from "vue";

export default {
  setup() {
    const ID_hook = useId();
    // expose to template and other options API hooks
    return {
      ID_hook,
    };
  },

  mounted() {
    const ctx = document.getElementById(this.ID_hook);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
