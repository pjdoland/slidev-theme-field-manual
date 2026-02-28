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
            <div class="cr-chart-placeholder">
              <span class="fm-label" style="color: var(--c-khaki-dark);">CHART AREA</span>
            </div>
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
  grid-template-columns: 48fr 52fr;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.cr-source {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-fg-subtle);
  margin-top: var(--space-1);
}
</style>
