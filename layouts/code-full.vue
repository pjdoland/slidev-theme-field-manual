<!-- Layout: code-full — Full-slide code block with prominent title bar and caption/source line -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'

defineProps<{
  title?: string
  codeTitle?: string
  codeLang?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  lineNumbers?: boolean
}>()
</script>

<template>
  <div class="slidev-layout layout-code-full">
    <FieldManualHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 24-SLIDE'"
    />

    <div class="cdf-body">
      <!-- Code panel: takes up ~80% of slide height -->
      <div class="cdf-code-panel">
        <!-- Prominent title bar -->
        <div class="cdf-code-header">
          <div class="cdf-header-left">
            <div class="cdf-header-indicator"></div>
            <span class="cdf-code-title">{{ codeTitle ?? title ?? 'LISTING' }}</span>
          </div>
          <span v-if="codeLang" class="cdf-code-badge">[ {{ codeLang.toUpperCase() }} ]</span>
        </div>

        <!-- Code content -->
        <div class="cdf-code-body">
          <slot />
        </div>

        <!-- Caption/source bar -->
        <div class="cdf-code-footer">
          <slot name="caption">
            <span v-if="codeTitle" class="cdf-footer-label">SOURCE: {{ codeTitle }}</span>
          </slot>
        </div>

        <!-- Corner brackets -->
        <span class="cdf-bracket cdf-bracket--tl"></span>
        <span class="cdf-bracket cdf-bracket--tr"></span>
        <span class="cdf-bracket cdf-bracket--bl"></span>
        <span class="cdf-bracket cdf-bracket--br"></span>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-code-full {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.cdf-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.cdf-code-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: var(--rule-mid) solid var(--color-rule);
  background: var(--c-paper-dark);
  overflow: hidden;
  position: relative;
}

.dark .cdf-code-panel {
  background: var(--c-paper-deeper);
  border-color: var(--c-olive-light);
}

/* Corner brackets */
.cdf-bracket {
  position: absolute;
  width: 12px;
  height: 12px;
  z-index: 5;
  pointer-events: none;
}

.cdf-bracket--tl { top: 0;  left: 0;  border-top: 2px solid var(--c-khaki); border-left: 2px solid var(--c-khaki); }
.cdf-bracket--tr { top: 0;  right: 0; border-top: 2px solid var(--c-khaki); border-right: 2px solid var(--c-khaki); }
.cdf-bracket--bl { bottom: 0; left: 0;  border-bottom: 2px solid var(--c-khaki); border-left: 2px solid var(--c-khaki); }
.cdf-bracket--br { bottom: 0; right: 0; border-bottom: 2px solid var(--c-khaki); border-right: 2px solid var(--c-khaki); }

/* Prominent title bar */
.cdf-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-5);
  background: var(--c-olive);
  border-bottom: 2px solid var(--c-khaki-dark);
  flex-shrink: 0;
}

.dark .cdf-code-header {
  background: var(--c-olive-mid);
}

.cdf-header-left {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

/* Small red indicator dot — like a status LED on a terminal */
.cdf-header-indicator {
  width: 8px;
  height: 8px;
  background: var(--c-red);
  border-radius: 50%;
  flex-shrink: 0;
}

.cdf-code-title {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--c-khaki-light);
}

.cdf-code-badge {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--c-khaki-dark);
  border: 1px solid var(--c-khaki-dark);
  padding: 1px 6px;
}

/* Code content area */
.cdf-code-body {
  flex: 1;
  overflow: auto;
}

.cdf-code-body :deep(.shiki),
.cdf-code-body :deep(.slidev-code) {
  background: transparent !important;
  min-height: 100%;
}

.cdf-code-body :deep(pre) {
  padding: var(--space-3) var(--space-4);
  margin: 0;
  font-size: calc(var(--text-sm) * 1.05);
}

/* Footer caption / source line */
.cdf-code-footer {
  padding: var(--space-2) var(--space-5);
  border-top: 1px solid var(--c-khaki-dark);
  background: var(--c-olive-ghost);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-fg-subtle);
  flex-shrink: 0;
}

.cdf-footer-label {
  color: var(--c-khaki-dark);
}
</style>
