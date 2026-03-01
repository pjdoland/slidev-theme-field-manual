<!-- Layout: quote — Attributed quotation with large faded olive quotation mark, rank/name/unit attribution -->
<script setup lang="ts">
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  attribution?: string
  rank?: string
  unit?: string
  sectionNumber?: string
  docNumber?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-quote">
    <div class="quote-body">
      <!-- Giant decorative quotation mark -->
      <div class="quote-mark" aria-hidden="true">"</div>

      <div class="quote-content-area">
        <div class="quote-rule-top"></div>

        <blockquote class="quote-text">
          <slot />
        </blockquote>

        <div class="quote-rule-bottom"></div>

        <!-- Attribution block -->
        <div class="quote-attribution">
          <span v-if="rank" class="quote-rank fm-label">{{ rank }}</span>
          <span v-if="attribution" class="quote-name">{{ attribution }}</span>
          <span v-if="unit" class="quote-unit fm-label">{{ unit }}</span>
        </div>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" />
  </div>
</template>

<style scoped>
.layout-quote {
  display: flex;
  flex-direction: column;
  background: var(--c-paper-dark) !important;
  padding: 0;
}

.quote-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5) var(--space-8);
  position: relative;
  gap: var(--space-5);
}

/* Giant decorative opening quotation mark */
.quote-mark {
  font-family: var(--font-heading);
  font-size: clamp(6rem, 15vw, 11rem);
  font-weight: 900;
  color: var(--c-olive);
  opacity: 0.18;
  line-height: 1;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: -0.1em;
  user-select: none;
}

.quote-content-area {
  flex: 1;
  max-width: 680px;
}

.quote-rule-top,
.quote-rule-bottom {
  height: 1px;
  background: var(--c-khaki-dark);
}

.quote-rule-top { margin-bottom: var(--space-5); }
.quote-rule-bottom { margin-top: var(--space-5); margin-bottom: var(--space-4); }

.quote-text {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.8vw, 2.2rem);
  font-style: italic;
  font-weight: 700;
  line-height: 1.35;
  color: var(--c-ink);
  margin: 0;
  padding: 0;
  border: none;
}

.quote-attribution {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.quote-rank {
  color: var(--c-red);
  letter-spacing: var(--tracking-widest);
}

.quote-name {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--color-fg);
}

.quote-unit {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-wide);
}
</style>
