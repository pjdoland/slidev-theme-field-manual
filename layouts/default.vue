<!-- Layout: default — Standard text layout with top rule, title treatment, and footer -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-default">
    <FieldManualHeader
      :title="title ?? $slidev?.configs?.title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <main class="layout-default__body">
      <div v-if="$slots.title || title" class="layout-default__title-block">
        <div class="layout-default__rule-top"></div>
        <h2 class="layout-default__title">
          <slot name="title">{{ title }}</slot>
        </h2>
      </div>

      <div class="layout-default__content">
        <slot />
      </div>
    </main>

    <FieldManualFooter
      :section-number="sectionNumber ?? '1-1'"
      :unit="unit ?? ''"
    />
  </div>
</template>

<style scoped>
.layout-default {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.layout-default__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-7) var(--space-3);
  overflow: hidden;
}

.layout-default__rule-top {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.layout-default__title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  color: var(--color-fg);
  margin: 0 0 var(--space-4);
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.layout-default__content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
