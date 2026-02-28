<!-- Layout: table-of-contents — Formatted like a field manual ToC with dot leaders and section numbers -->
<script setup lang="ts">
import FieldManualHeader from '../components/FieldManualHeader.vue'
import FieldManualFooter from '../components/FieldManualFooter.vue'
import ClassificationBanner from '../components/ClassificationBanner.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  classification?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-toc">
    <ClassificationBanner :text="classification ?? 'FOR TRAINING USE ONLY'" />
    <FieldManualHeader
      :title="title ?? 'TABLE OF CONTENTS'"
      :section-number="sectionNumber ?? ''"
      :doc-number="docNumber ?? 'FM 21-SLIDE'"
    />

    <div class="toc-body">
      <div class="toc-title-bar">
        <div class="toc-rule"></div>
        <h2 class="toc-title">{{ title ?? 'TABLE OF CONTENTS' }}</h2>
        <div class="toc-col-headers">
          <span class="toc-col-section">SECTION</span>
          <span class="toc-col-title"></span>
          <span class="toc-col-page">PAGE</span>
        </div>
        <div class="toc-header-rule"></div>
      </div>

      <div class="toc-entries">
        <slot>
          <!-- Example entries — override with your own in the slide -->
          <div class="toc-entry">
            <span class="toc-entry-num">1-1</span>
            <span class="toc-entry-title">Introduction to the Briefing Room</span>
            <span class="toc-leaders"></span>
            <span class="toc-entry-page">3</span>
          </div>
          <div class="toc-entry">
            <span class="toc-entry-num">1-2</span>
            <span class="toc-entry-title">Equipment and Materiel</span>
            <span class="toc-leaders"></span>
            <span class="toc-entry-page">7</span>
          </div>
        </slot>
      </div>
    </div>

    <FieldManualFooter :section-number="sectionNumber ?? ''" :unit="unit ?? ''" />
  </div>
</template>

<style scoped>
.layout-toc {
  display: flex;
  flex-direction: column;
  padding: 0;
  background: var(--c-paper) !important;
}

.toc-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-6) var(--space-2);
  overflow: hidden;
}

.toc-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.toc-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.toc-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0 0 var(--space-4);
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.toc-col-headers {
  display: grid;
  grid-template-columns: 60px 1fr 50px;
  gap: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--c-khaki-dark);
  margin-bottom: var(--space-2);
}

.toc-col-page {
  text-align: right;
}

.toc-header-rule {
  height: 1px;
  background: var(--c-khaki-dark);
}

.toc-entries {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* ── ToC entry ────────────────────────────────────────────────────────────── */
:deep(.toc-entry) {
  display: grid;
  grid-template-columns: 60px 1fr auto 50px;
  gap: var(--space-3);
  align-items: baseline;
  padding: var(--space-1) 0;
  border-bottom: 1px dotted var(--c-paper-shadow);
}

:deep(.toc-entry-num) {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--c-red);
  letter-spacing: var(--tracking-wide);
}

:deep(.toc-entry-title) {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-fg);
}

/* CSS dot leaders */
:deep(.toc-leaders) {
  display: block;
  border-bottom: 2px dotted var(--c-khaki-dark);
  margin-bottom: 4px;
  min-width: 20px;
}

:deep(.toc-entry-page) {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-fg-muted);
  text-align: right;
  padding-right: var(--space-3);
}

/* Subsection entries — indented under chapter headings */
:deep(.toc-entry:not(.toc-entry--chapter)) {
  padding-left: var(--space-6);
}

/* Chapter-level entry (bold, olive background) */
:deep(.toc-entry--chapter) {
  background: var(--c-olive-ghost);
  padding: var(--space-1) 0;
  padding-left: var(--space-3);
  border-bottom: 1px solid var(--c-khaki-dark);
}

:deep(.toc-entry--chapter .toc-entry-title) {
  font-weight: 700;
  color: var(--c-olive-dark);
  font-family: var(--font-heading);
  font-size: var(--text-md);
}
</style>
