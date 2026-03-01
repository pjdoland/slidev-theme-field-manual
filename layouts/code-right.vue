<!-- Layout: code-right — Prose/text left 50%, code panel right 50% in ruled frame with corner brackets -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  codeTitle?: string
  codeLang?: string
  lineNumbers?: boolean
}>()
</script>

<template>
  <div class="slidev-layout layout-code-right">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 24-SLIDE'"
    />

    <div class="cdr-body">
      <!-- Left prose column -->
      <div class="cdr-prose">
        <div v-if="title" class="cdr-rule"></div>
        <h2 v-if="title" class="cdr-title">{{ title }}</h2>
        <div class="cdr-content">
          <slot />
        </div>
      </div>

      <!-- Right code panel -->
      <div class="cdr-code-panel">
        <!-- Code panel header bar -->
        <div class="cdr-code-header">
          <span class="cdr-code-title">{{ codeTitle ?? 'PROCEDURE' }}</span>
          <span v-if="codeLang" class="cdr-code-badge">[ {{ codeLang.toUpperCase() }} ]</span>
        </div>

        <!-- Code content area -->
        <div class="cdr-code-body">
          <slot name="code" />
        </div>

        <!-- Caption slot below code panel -->
        <div v-if="$slots.caption" class="cdr-code-caption">
          <slot name="caption" />
        </div>

        <!-- Corner bracket decorations -->
        <span class="cdr-bracket cdr-bracket--tl"></span>
        <span class="cdr-bracket cdr-bracket--tr"></span>
        <span class="cdr-bracket cdr-bracket--bl"></span>
        <span class="cdr-bracket cdr-bracket--br"></span>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-code-right {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.cdr-body {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  padding: var(--space-4) var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

/* Prose column */
.cdr-prose {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cdr-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.cdr-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0 0 var(--space-3);
  line-height: 1.1;
}

.cdr-content {
  flex: 1;
  overflow: hidden;
}

/* Code panel */
.cdr-code-panel {
  display: flex;
  flex-direction: column;
  border: var(--rule-mid) solid var(--color-rule);
  background: var(--c-paper-dark);
  overflow: hidden;
  position: relative;
}

.dark .cdr-code-panel {
  background: var(--c-paper-deeper);
  border-color: var(--c-olive-light);
}

/* Corner brackets */
.cdr-bracket {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 5;
  pointer-events: none;
}

.cdr-bracket--tl { top: 0;  left: 0;  border-top: 2px solid var(--c-khaki); border-left: 2px solid var(--c-khaki); }
.cdr-bracket--tr { top: 0;  right: 0; border-top: 2px solid var(--c-khaki); border-right: 2px solid var(--c-khaki); }
.cdr-bracket--bl { bottom: 0; left: 0;  border-bottom: 2px solid var(--c-khaki); border-left: 2px solid var(--c-khaki); }
.cdr-bracket--br { bottom: 0; right: 0; border-bottom: 2px solid var(--c-khaki); border-right: 2px solid var(--c-khaki); }

/* Code header bar */
.cdr-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-4);
  background: var(--c-olive);
  border-bottom: 1px solid var(--c-khaki-dark);
  flex-shrink: 0;
}

.dark .cdr-code-header {
  background: var(--c-olive-mid);
}

.cdr-code-title {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--c-khaki-light);
}

.cdr-code-badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--c-khaki-dark);
  border: 1px solid var(--c-khaki-dark);
  padding: 0 4px;
}

/* Code body */
.cdr-code-body {
  flex: 1;
  overflow: auto;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

/* Override Shiki styles inside code-right */
.cdr-code-body :deep(.shiki),
.cdr-code-body :deep(.slidev-code) {
  background: transparent !important;
  height: 100%;
  overflow: auto;
}

.cdr-code-body :deep(pre) {
  padding: var(--space-3) var(--space-3);
  margin: 0;
  height: 100%;
}

/* Caption bar */
.cdr-code-caption {
  padding: var(--space-2) var(--space-4);
  border-top: 1px solid var(--c-khaki-dark);
  background: var(--c-olive-ghost);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-fg-subtle);
  flex-shrink: 0;
}
</style>
