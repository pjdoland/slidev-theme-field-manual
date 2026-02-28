<!-- Layout: end — Final slide with END OF BRIEFING treatment and contact block -->
<script setup lang="ts">
import ClassificationBanner from '../components/ClassificationBanner.vue'

defineProps<{
  classification?: string
  docNumber?: string
  unit?: string
  contact?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-end">
    <ClassificationBanner :text="classification ?? 'FOR TRAINING USE ONLY'" />

    <div class="end-body">
      <div class="end-text">
        <div class="end-rule-top"></div>
        <div class="end-eof fm-label">
          ─── End of Briefing ───
        </div>
        <h1 class="end-title">
          <slot name="title">Questions?</slot>
        </h1>
        <div class="end-rule-mid"></div>
        <div class="end-contact">
          <slot name="contact">
            <p v-if="contact">{{ contact }}</p>
          </slot>
        </div>
        <div class="end-doc fm-label">
          {{ docNumber ?? 'FM 21-SLIDE' }}
          <span v-if="unit"> · {{ unit }}</span>
        </div>
      </div>
    </div>

    <ClassificationBanner :text="classification ?? 'FOR TRAINING USE ONLY'" />
  </div>
</template>

<style scoped>
.layout-end {
  display: flex;
  flex-direction: column;
  background: var(--color-bg) !important;
  color: var(--color-fg);
  padding: 0;
}

.end-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6) var(--space-8);
}

.end-text {
  width: 100%;
  max-width: 640px;
}

.end-rule-top {
  height: 3px;
  background: var(--c-olive-dark);
  margin-bottom: var(--space-4);
}

.end-eof {
  color: var(--c-olive-mid);
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-4);
}

.end-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: 900;
  color: var(--c-ink);
  margin: 0 0 var(--space-5);
  line-height: 1.05;
  text-transform: uppercase;
}

.end-rule-mid {
  height: 1px;
  background: var(--c-olive);
  margin-bottom: var(--space-4);
}

.end-contact {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-fg-muted);
  margin-bottom: var(--space-4);
  line-height: 1.7;
}

.end-doc {
  color: var(--color-fg-subtle);
  letter-spacing: var(--tracking-widest);
}
</style>
