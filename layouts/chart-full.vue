<!-- Layout: chart-full — Chart/diagram takes 70% of slide height, title above, caption below -->
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
  <div class="slidev-layout layout-chart-full">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <div class="cf-body">
      <!-- Title bar -->
      <div class="cf-title-bar">
        <div class="cf-rule"></div>
        <h2 v-if="title" class="cf-title">{{ title }}</h2>
      </div>

      <!-- Chart area — main visual field -->
      <div class="cf-chart-area">
        <slot name="chart">
          <slot>
            <div class="cf-chart-placeholder">
              <span class="fm-label" style="color: var(--c-khaki-dark);">CHART / DIAGRAM AREA</span>
            </div>
          </slot>
        </slot>
      </div>

      <!-- Caption bar -->
      <div class="cf-caption-bar">
        <FigureCaption :number="figNumber ?? ''" :label="figLabel ?? ''" />
        <div class="cf-source">
          <slot name="source" />
        </div>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-chart-full {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.cf-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.cf-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.cf-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.cf-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
}

.cf-chart-area {
  flex: 1;
  overflow: hidden;
  position: relative;
  border: var(--rule-mid) solid var(--color-rule);
  background-image:
    linear-gradient(to right, var(--c-olive-ghost) 1px, transparent 1px),
    linear-gradient(to bottom, var(--c-olive-ghost) 1px, transparent 1px);
  background-size: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3);
}

.cf-chart-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.cf-caption-bar {
  flex-shrink: 0;
  margin-top: var(--space-2);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.cf-source {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-fg-subtle);
}
</style>
