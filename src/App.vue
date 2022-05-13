<template>
  <div id="app" class="text-center mt-4">
    <div :class="containerClass">
      <InputText />
      <Button label="Save" icon="pi pi-cog"></Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    containerClass() {
        return [{
            'p-input-filled': this.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': this.$primevue.config.ripple === false
        }];
    }
  }
}
</script>

