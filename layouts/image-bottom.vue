<!-- Layout: image-bottom — Content top, image bottom with figure caption -->
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
  <div class="slidev-layout layout-image-bottom">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 24-SLIDE'"
    />

    <!-- Top content area -->
    <div class="ib-content">
      <div v-if="title" class="ib-rule"></div>
      <h2 v-if="title" class="ib-title">{{ title }}</h2>
      <div class="ib-body">
        <slot />
      </div>
    </div>

    <!-- Divider -->
    <div class="ib-divider"></div>

    <!-- Bottom image band -->
    <div class="ib-image-band">
      <div class="ib-image-frame">
        <slot name="image">
          <div class="ib-placeholder">
            <span class="fm-label" style="color: var(--c-khaki-dark);">IMAGE</span>
          </div>
        </slot>
      </div>
      <FigureCaption :number="figNumber ?? ''" :label="figLabel ?? ''" />
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-image-bottom {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.ib-content {
  flex: 1;
  padding: var(--space-3) var(--space-6);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.ib-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.ib-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0 0 var(--space-3);
  line-height: 1.1;
}

.ib-body {
  flex: 1;
  overflow: hidden;
}

.ib-divider {
  height: var(--rule-mid);
  background: var(--color-rule);
  margin: 0 var(--space-6);
}

.ib-image-band {
  height: 38%;
  flex-shrink: 0;
  padding: 0 var(--space-6) var(--space-2);
}

.ib-image-frame {
  height: calc(100% - 1.4rem);
  border: var(--rule-thick) solid var(--color-rule);
  overflow: hidden;
}

.ib-image-frame :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(0.12) contrast(1.05);
}

.ib-placeholder {
  width: 100%;
  height: 100%;
  background: var(--c-paper-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
