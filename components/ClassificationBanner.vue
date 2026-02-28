<script setup lang="ts">
defineProps<{
  text?: string
  variant?: 'default' | 'alert'
}>()
</script>

<template>
  <div :class="['classification-banner', variant === 'alert' ? 'classification-banner--alert' : '']">
    <span class="classification-banner__text">{{ text ?? 'FOR TRAINING USE ONLY' }}</span>
  </div>
</template>

<style scoped>
.classification-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px var(--space-4);
  background: var(--c-olive-dark);
  border-bottom: 1px solid var(--c-olive-mid);
  flex-shrink: 0;
}

.classification-banner--alert {
  background: var(--c-red);
}

.classification-banner__text {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--c-khaki-light);
}

.classification-banner--alert .classification-banner__text {
  color: #fff;
}
</style>
