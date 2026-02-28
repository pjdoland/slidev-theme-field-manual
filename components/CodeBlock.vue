<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  lang?: string
  title?: string
  lineNumbers?: boolean
  rulers?: boolean
  caption?: string
}>()

// Generate ruler lines every 5 lines when rulers=true
// This is purely CSS-based — we apply a class to every 5th line
</script>

<template>
  <div class="fm-code-container">
    <!-- Corner bracket decorations (top pair via CSS ::before/::after) -->
    <span class="fm-code-bl"></span>
    <span class="fm-code-br"></span>

    <!-- Header bar (shown only when title is provided) -->
    <div v-if="title || lang" class="fm-code-header">
      <span class="fm-code-title">{{ title ?? '' }}</span>
      <span v-if="lang" class="fm-code-lang-badge">[ {{ lang.toUpperCase() }} ]</span>
    </div>

    <!-- Code body -->
    <div class="fm-code-body">
      <div class="fm-code-content" :class="{ 'fm-code-content--rulers': rulers }">
        <slot />
      </div>
    </div>

    <!-- Footer caption -->
    <div v-if="caption || $slots.caption" class="fm-code-footer">
      <slot name="caption">{{ caption }}</slot>
    </div>
  </div>
</template>

<style scoped>
/*
  The core .fm-code-container styles live in styles/code.css
  (shared with code-right / code-full layouts).
  This scoped style handles slot content overrides.
*/

.fm-code-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.fm-code-content {
  flex: 1;
  overflow: auto;
  padding: var(--space-2) 0;
}

/* Shiki code inside the component */
.fm-code-content :deep(.shiki),
.fm-code-content :deep(.slidev-code) {
  background: transparent !important;
}

.fm-code-content :deep(pre) {
  padding: var(--space-2) var(--space-4);
  margin: 0;
}

/* 5-line ruler variant */
.fm-code-content--rulers :deep(.line:nth-child(5n)) {
  border-bottom: 1px solid var(--c-olive-subtle);
}

/* Dark mode adjustments */
.dark .fm-code-content :deep(pre) {
  color: var(--c-ink);
}
</style>
