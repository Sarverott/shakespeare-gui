<script setup>
import ReleaseInfo from "../commons/ReleaseInfo.vue";
import Title from "../commons/Title.vue";
import Logo from "../commons/Logo.vue";
import RandomTip from "../commons/RandomTip.vue";
//import { ref } from 'vue'
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <Title></Title>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div
            class="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: 75%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
