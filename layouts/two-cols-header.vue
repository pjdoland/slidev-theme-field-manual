<!-- Layout: two-cols-header — Full-width header content above a two-column body with a center dividing rule -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  classification?: string
  unit?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-two-cols-header">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber"
      :classification="classification"
    />

    <div class="tch-body">
      <div v-if="title" class="tch-title-bar">
        <div class="tch-rule"></div>
        <h2 class="tch-title">{{ title }}</h2>
      </div>

      <!-- Full-width header content, spans both columns -->
      <div v-if="$slots.default" class="tch-header">
        <slot />
      </div>

      <div class="tch-columns">
        <!-- Left column -->
        <div class="tch-col tch-col--left">
          <slot name="left" />
        </div>

        <!-- Center dividing rule -->
        <div class="tch-divider"></div>

        <!-- Right column -->
        <div class="tch-col tch-col--right">
          <slot name="right" />
        </div>
      </div>

      <!-- Full-width footer content, spans both columns -->
      <div v-if="$slots.bottom" class="tch-bottom">
        <slot name="bottom" />
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit" />
  </div>
</template>

<style scoped>
.layout-two-cols-header {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.tch-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.tch-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.tch-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.tch-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
}

.tch-header {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.tch-columns {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  overflow: hidden;
  min-height: 0;
}

.tch-col {
  overflow: hidden;
}

.tch-col--left {
  padding-left: var(--space-4);
  padding-right: var(--space-6);
}

.tch-col--right {
  padding-left: var(--space-6);
  padding-right: var(--space-4);
}

.tch-divider {
  width: 1px;
  background: var(--c-olive-mid);
  flex-shrink: 0;
  position: relative;
}

/* Small diamond at midpoint of divider */
.tch-divider::after {
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

.tch-bottom {
  flex-shrink: 0;
  margin-top: var(--space-3);
}

/* Column h2s — Slidev's own CSS (.slidev-layout h2 at 0,1,1) resets h2 to
   font-size: inherit and font-weight: normal, overriding our theme global h2 rule
   (0,0,1). This scoped rule (0,2,1) applies the same reset explicitly so column
   h2s match content h2s in other layouts, then adds the border treatment. */
:deep(.tch-col h2) {
  font-family: var(--font-condensed-sans);
  font-size: inherit;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.15;
  color: var(--color-fg);
  border-top: var(--rule-thin) solid var(--color-rule);
  border-bottom: var(--rule-thin) solid var(--color-rule);
  padding: var(--space-2) 0;
  margin: 0 0 var(--space-4);
}
</style>
