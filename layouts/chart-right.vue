<!-- Layout: chart-right — Text/bullets left, chart/graphic right with subtle grid background -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'
import FigureCaption from '../components/FigureCaption.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  figNumber?: string | number
  figLabel?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-chart-right">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <div class="cr-body">
      <!-- Left text column -->
      <div class="cr-text">
        <div v-if="title" class="cr-rule"></div>
        <h2 v-if="title" class="cr-title">{{ title }}</h2>
        <div class="cr-content">
          <slot />
        </div>
      </div>

      <!-- Right chart panel -->
      <div class="cr-chart-panel">
        <div class="cr-chart-label fm-label">DATA / CHART</div>
        <div class="cr-chart-area">
          <slot name="chart">
            <div class="cr-chart-placeholder"></div>
          </slot>
        </div>
        <FigureCaption :number="figNumber ?? ''" :label="figLabel ?? ''" />
        <div class="cr-source">
          <slot name="source" />
        </div>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-chart-right {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.cr-body {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  padding: var(--space-4) var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.cr-text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cr-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.cr-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0 0 var(--space-4);
  line-height: 1.1;
}

.cr-content {
  flex: 1;
  overflow: hidden;
}

.cr-chart-panel {
  display: flex;
  flex-direction: column;
  border-left: var(--rule-mid) solid var(--color-rule);
  padding-left: var(--space-5);
  overflow: hidden;
}

.cr-chart-label {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-2);
}

.cr-chart-area {
  flex: 1;
  overflow: hidden;
  position: relative;
  /* Subtle grid background */
  background-image:
    linear-gradient(to right, var(--c-olive-ghost) 1px, transparent 1px),
    linear-gradient(to bottom, var(--c-olive-ghost) 1px, transparent 1px);
  background-size: 24px 24px;
  border: 1px solid var(--c-olive-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-chart-placeholder {
  position: absolute;
  inset: 0;
}

.cr-chart-placeholder::before {
  content: '';
  position: absolute;
  inset: 10% 10% 15% 10%;
  background: rgba(74, 74, 42, 0.22);
  clip-path: polygon(
    0% 100%,
    0% 60%, 16.7% 60%,
    16.7% 40%, 33.3% 40%,
    33.3% 18%, 50% 18%,
    50% 32%, 66.7% 32%,
    66.7% 55%, 83.3% 55%,
    83.3% 72%, 100% 72%,
    100% 100%
  );
}

.cr-chart-placeholder::after {
  content: '';
  position: absolute;
  inset: 10% 10% 15% 10%;
  border-bottom: 1px solid var(--c-khaki-dark);
  border-left: 1px solid var(--c-khaki-dark);
}

.cr-source {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-fg-subtle);
  margin-top: var(--space-1);
}
</style>
