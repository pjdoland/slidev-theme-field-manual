<script setup lang="ts">
defineProps<{
  number?: string | number
  label?: string
}>()
</script>

<template>
  <div v-if="number || label" class="fig-caption">
    <span v-if="number" class="fig-caption__num">FIG. {{ number }}</span>
    <span v-if="number && label" class="fig-caption__sep"> — </span>
    <span v-if="label" class="fig-caption__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.fig-caption {
  font-family: var(--font-condensed-sans);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-fg-muted);
  margin-top: var(--space-2);
  display: block;
  line-height: 1.4;
}

.fig-caption__num {
  font-weight: 700;
  color: var(--c-red);
}

.fig-caption__sep {
  color: var(--c-khaki-dark);
}

.fig-caption__label {
  color: var(--color-fg-muted);
}
</style>
