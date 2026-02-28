<!-- Layout: dashboard — 2×2 grid of labeled panels, each with metric/chart area and bottom caption -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  panel1Label?: string
  panel2Label?: string
  panel3Label?: string
  panel4Label?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-dashboard">
    <FieldManualHeader
      :title="title ?? 'TACTICAL DATA DISPLAY'"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <div class="db-body">
      <div v-if="title" class="db-title-bar">
        <div class="db-rule"></div>
        <h2 class="db-title">{{ title }}</h2>
      </div>

      <div class="db-grid">
        <!-- Panel 1 (top-left) -->
        <div class="db-panel">
          <div class="db-panel-header">
            <span class="db-panel-label fm-label">{{ panel1Label ?? 'METRIC ALPHA' }}</span>
          </div>
          <div class="db-panel-content">
            <slot name="panel1">
              <div class="db-panel-placeholder">
                <span class="fm-label" style="color: var(--c-khaki-dark);">DATA</span>
              </div>
            </slot>
          </div>
          <div class="db-panel-footer">
            <slot name="caption1" />
          </div>
        </div>

        <!-- Panel 2 (top-right) -->
        <div class="db-panel">
          <div class="db-panel-header">
            <span class="db-panel-label fm-label">{{ panel2Label ?? 'METRIC BRAVO' }}</span>
          </div>
          <div class="db-panel-content">
            <slot name="panel2">
              <div class="db-panel-placeholder">
                <span class="fm-label" style="color: var(--c-khaki-dark);">DATA</span>
              </div>
            </slot>
          </div>
          <div class="db-panel-footer">
            <slot name="caption2" />
          </div>
        </div>

        <!-- Panel 3 (bottom-left) -->
        <div class="db-panel">
          <div class="db-panel-header">
            <span class="db-panel-label fm-label">{{ panel3Label ?? 'METRIC CHARLIE' }}</span>
          </div>
          <div class="db-panel-content">
            <slot name="panel3">
              <div class="db-panel-placeholder">
                <span class="fm-label" style="color: var(--c-khaki-dark);">DATA</span>
              </div>
            </slot>
          </div>
          <div class="db-panel-footer">
            <slot name="caption3" />
          </div>
        </div>

        <!-- Panel 4 (bottom-right) -->
        <div class="db-panel">
          <div class="db-panel-header">
            <span class="db-panel-label fm-label">{{ panel4Label ?? 'METRIC DELTA' }}</span>
          </div>
          <div class="db-panel-content">
            <slot name="panel4">
              <div class="db-panel-placeholder">
                <span class="fm-label" style="color: var(--c-khaki-dark);">DATA</span>
              </div>
            </slot>
          </div>
          <div class="db-panel-footer">
            <slot name="caption4" />
          </div>
        </div>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-dashboard {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.db-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-5) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.db-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.db-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-2);
}

.db-title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
}

.db-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--space-3);
  overflow: hidden;
  min-height: 0;
}

.db-panel {
  display: flex;
  flex-direction: column;
  border: var(--rule-mid) solid var(--color-rule);
  overflow: hidden;
  background: var(--c-paper-dark);
}

.db-panel-header {
  padding: var(--space-1) var(--space-3);
  background: var(--c-olive);
  border-bottom: 1px solid var(--c-khaki-dark);
  flex-shrink: 0;
}

.db-panel-label {
  color: var(--c-khaki-light);
  letter-spacing: var(--tracking-wider);
}

.db-panel-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2);
  position: relative;
  background-image:
    linear-gradient(to right, var(--c-olive-ghost) 1px, transparent 1px),
    linear-gradient(to bottom, var(--c-olive-ghost) 1px, transparent 1px);
  background-size: 20px 20px;
}

.db-panel-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.db-panel-footer {
  padding: var(--space-1) var(--space-3);
  border-top: 1px solid var(--c-olive-subtle);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-fg-subtle);
  letter-spacing: var(--tracking-wide);
  flex-shrink: 0;
  min-height: 1.4rem;
}
</style>
