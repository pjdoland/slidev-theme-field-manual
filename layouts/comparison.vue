<!-- Layout: comparison — Two-column with center dividing rule, each column has its own header -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  leftHeader?: string
  rightHeader?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  leftAccent?: 'red' | 'blue' | 'olive'
  rightAccent?: 'red' | 'blue' | 'olive'
}>()
</script>

<template>
  <div class="slidev-layout layout-comparison">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <!-- Main title rule -->
    <div v-if="title" class="cmp-title-bar">
      <div class="cmp-title-rule"></div>
      <h2 class="cmp-title">{{ title }}</h2>
    </div>

    <div class="cmp-body">
      <!-- Left column -->
      <div class="cmp-col cmp-col--left">
        <div
          class="cmp-col-header"
          :class="`cmp-col-header--${leftAccent ?? 'red'}`"
        >
          <span class="cmp-col-label">{{ leftHeader ?? 'OPTION ALPHA' }}</span>
        </div>
        <div class="cmp-col-content">
          <slot name="left" />
        </div>
      </div>

      <!-- Center dividing rule -->
      <div class="cmp-divider">
        <div class="cmp-divider-rule"></div>
        <div class="cmp-divider-vs">VS</div>
        <div class="cmp-divider-rule"></div>
      </div>

      <!-- Right column -->
      <div class="cmp-col cmp-col--right">
        <div
          class="cmp-col-header"
          :class="`cmp-col-header--${rightAccent ?? 'blue'}`"
        >
          <span class="cmp-col-label">{{ rightHeader ?? 'OPTION BRAVO' }}</span>
        </div>
        <div class="cmp-col-content">
          <slot name="right" />
        </div>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-comparison {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.cmp-title-bar {
  padding: var(--space-4) var(--space-6) 0;
  flex-shrink: 0;
}

.cmp-title-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.cmp-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0 0 var(--space-3);
  line-height: 1.1;
}

.cmp-body {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  padding: 0 var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.cmp-col {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cmp-col-header {
  padding: var(--space-2) var(--space-4);
  margin-bottom: var(--space-3);
  flex-shrink: 0;
}

.cmp-col-header--red   { border-left: 4px solid var(--c-red);      background: var(--c-red-pale); }
.cmp-col-header--blue  { border-left: 4px solid var(--c-blue);     background: var(--c-blue-pale); }
.cmp-col-header--olive { border-left: 4px solid var(--c-olive-mid); background: var(--c-olive-ghost); }

.cmp-col-label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-fg);
}

.cmp-col-content {
  flex: 1;
  overflow: hidden;
  padding: 0 var(--space-3);
}

/* Divider */
.cmp-divider {
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-3);
  gap: var(--space-2);
  flex-shrink: 0;
}

.cmp-divider-rule {
  flex: 1;
  width: 1px;
  background: var(--color-rule);
}

.cmp-divider-vs {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  color: var(--color-fg-subtle);
  flex-shrink: 0;
  writing-mode: horizontal-tb;
}
</style>
