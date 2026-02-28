<!-- Layout: section — Chapter/section divider with ghosted large section number behind title -->
<script setup lang="ts">
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  sectionNumber?: string
  unit?: string
  docNumber?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-section">
    <!-- Ghosted section number watermark -->
    <div class="section-ghost-number" aria-hidden="true">
      {{ sectionNumber ?? '1' }}
    </div>

    <div class="section-body">
      <div class="section-top-rule"></div>

      <div class="section-id fm-label">
        {{ docNumber ?? 'FM 21-SLIDE' }}
        <span v-if="sectionNumber"> · SECTION {{ sectionNumber }}</span>
      </div>

      <h2 class="section-title">
        <slot />
      </h2>

      <div class="section-descriptor">
        <slot name="descriptor" />
      </div>

      <div class="section-bottom-rule"></div>
    </div>

    <FieldManualFooter
      :section-number="sectionNumber ?? '1'"
      :unit="unit ?? ''"
    />
  </div>
</template>

<style scoped>
.layout-section {
  display: flex;
  flex-direction: column;
  background: var(--c-paper-dark) !important;
  position: relative;
  overflow: hidden;
  padding: 0;
}

.section-ghost-number {
  position: absolute;
  right: -0.05em;
  top: 50%;
  transform: translateY(-55%);
  font-family: var(--font-heading);
  font-size: clamp(8rem, 22vw, 18rem);
  font-weight: 900;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(74, 74, 42, 0.10);
  user-select: none;
  pointer-events: none;
  z-index: 0;
}

.section-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-4) var(--space-8);
  position: relative;
  z-index: 1;
}

.section-top-rule {
  height: var(--rule-thick);
  background: var(--c-red);
  width: 80px;
  margin-bottom: var(--space-4);
}

.section-id {
  color: var(--c-khaki-dark);
  margin-bottom: var(--space-3);
  letter-spacing: var(--tracking-widest);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.0rem, 4.0vw, 3.4rem);
  font-weight: 900;
  line-height: 1.05;
  color: var(--c-olive-dark);
  letter-spacing: -0.02em;
  margin: 0 0 var(--space-5);
  max-width: 70%;
  text-transform: uppercase;
}

.section-descriptor {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--color-fg-muted);
  max-width: 60%;
  line-height: 1.5;
}

.section-bottom-rule {
  height: 1px;
  background: var(--c-khaki-dark);
  margin-top: var(--space-5);
  max-width: 70%;
}
</style>
