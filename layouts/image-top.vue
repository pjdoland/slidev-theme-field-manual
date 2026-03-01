<!-- Layout: image-top — Image spans full width top ~40%, content below with FIG. caption treatment -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'
import FigureCaption from '../components/FigureCaption.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  unit?: string
  docNumber?: string
  figNumber?: string | number
  figLabel?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-image-top">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 24-SLIDE'"
    />

    <!-- Top image band -->
    <div class="it-image-band">
      <div class="it-image-frame">
        <slot name="image">
          <div class="it-placeholder">
            <span class="fm-label" style="color: var(--c-khaki-dark); letter-spacing: var(--tracking-widest);">IMAGE</span>
          </div>
        </slot>
      </div>
      <FigureCaption :number="figNumber ?? '1'" :label="figLabel ?? ''" />
    </div>

    <!-- Divider rule -->
    <div class="it-divider"></div>

    <!-- Bottom content area -->
    <div class="it-content">
      <h2 v-if="title" class="it-title">{{ title }}</h2>
      <div class="it-body">
        <slot />
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-image-top {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.it-image-band {
  height: 42%;
  flex-shrink: 0;
  padding: var(--space-3) var(--space-6) 0;
}

.it-image-frame {
  height: calc(100% - 1.6rem);
  border: var(--rule-thick) solid var(--color-rule);
  overflow: hidden;
}

.it-image-frame :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(0.12) contrast(1.05);
}

.it-placeholder {
  width: 100%;
  height: 100%;
  background: var(--c-paper-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
}

.it-divider {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin: 0 var(--space-6);
}

.it-content {
  flex: 1;
  padding: var(--space-3) var(--space-6) var(--space-2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.it-title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 900;
  color: var(--color-fg);
  margin: 0 0 var(--space-3);
  line-height: 1.1;
}

.it-body {
  flex: 1;
  overflow: hidden;
}
</style>
