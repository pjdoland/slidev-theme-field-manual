<!-- Layout: two-column — Equal two-column text layout with a center dividing rule -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-two-column">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <div class="tc-body">
      <div v-if="title" class="tc-title-bar">
        <div class="tc-rule"></div>
        <h2 class="tc-title">{{ title }}</h2>
      </div>

      <div class="tc-columns">
        <!-- Left column -->
        <div class="tc-col tc-col--left">
          <slot name="left">
            <slot />
          </slot>
        </div>

        <!-- Center dividing rule -->
        <div class="tc-divider"></div>

        <!-- Right column -->
        <div class="tc-col tc-col--right">
          <slot name="right" />
        </div>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-two-column {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.tc-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-2);
  overflow: hidden;
}

.tc-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.tc-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.tc-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
}

.tc-columns {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  overflow: hidden;
  min-height: 0;
}

.tc-col {
  overflow: hidden;
}

.tc-col--left {
  padding-left: var(--space-4);
  padding-right: var(--space-6);
}

.tc-col--right {
  padding-left: var(--space-6);
  padding-right: var(--space-4);
}

.tc-divider {
  width: 1px;
  background: var(--c-olive-mid);
  flex-shrink: 0;
  position: relative;
}

/* Column section headings (h3) — Oswald caps with stroke lines */
:deep(h3) {
  font-family: var(--font-condensed-sans);
  font-size: var(--text-lg);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-ink);
  line-height: 1.1;
  border-top: var(--rule-thick) solid var(--color-rule);
  border-bottom: 1px solid var(--color-rule);
  padding: var(--space-2) 0;
  margin: 0 0 var(--space-4);
}

/* Small diamond at midpoint of divider */
.tc-divider::after {
  content: '◆';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--c-khaki-dark);
  font-size: 8px;
  background: var(--color-bg);
  padding: 2px 0;
}
</style>
