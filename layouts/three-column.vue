<!-- Layout: three-column — Three equal panels each with its own header slot -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  col1Header?: string
  col2Header?: string
  col3Header?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-three-column">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <div class="thc-body">
      <div v-if="title" class="thc-title-bar">
        <div class="thc-rule"></div>
        <h2 class="thc-title">{{ title }}</h2>
      </div>

      <div class="thc-columns">
        <!-- Column 1 -->
        <div class="thc-col">
          <div class="thc-col-header">
            <slot name="header1">{{ col1Header ?? 'SECTION A' }}</slot>
          </div>
          <div class="thc-col-content">
            <slot name="col1" />
          </div>
        </div>

        <div class="thc-divider"></div>

        <!-- Column 2 -->
        <div class="thc-col">
          <div class="thc-col-header">
            <slot name="header2">{{ col2Header ?? 'SECTION B' }}</slot>
          </div>
          <div class="thc-col-content">
            <slot name="col2" />
          </div>
        </div>

        <div class="thc-divider"></div>

        <!-- Column 3 -->
        <div class="thc-col">
          <div class="thc-col-header">
            <slot name="header3">{{ col3Header ?? 'SECTION C' }}</slot>
          </div>
          <div class="thc-col-content">
            <slot name="col3" />
          </div>
        </div>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-three-column {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.thc-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-5) var(--space-2);
  overflow: hidden;
}

.thc-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.thc-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-2);
}

.thc-title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
}

.thc-columns {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 0;
  overflow: hidden;
  min-height: 0;
}

.thc-col {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.thc-col-header {
  font-family: var(--font-condensed-sans);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--c-khaki-light);
  background: var(--c-olive);
  padding: var(--space-2) var(--space-3);
  margin-bottom: var(--space-3);
  border-bottom: 2px solid var(--c-khaki-dark);
  flex-shrink: 0;
}

.thc-col-content {
  flex: 1;
  overflow: hidden;
  padding: 0 var(--space-4);
}

.thc-divider {
  width: 1px;
  background: var(--c-olive-mid);
  margin: 0 var(--space-2);
  flex-shrink: 0;
}
</style>
