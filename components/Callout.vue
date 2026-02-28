<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'warning' | 'note' | 'caution' | 'important'
  title?: string
}>()

const typeConfig = computed(() => {
  switch (props.type) {
    case 'warning':
      return {
        label: 'WARNING',
        icon: '⚠',
        colorClass: 'callout--warning',
      }
    case 'caution':
      return {
        label: 'CAUTION',
        icon: '△',
        colorClass: 'callout--caution',
      }
    case 'important':
      return {
        label: 'IMPORTANT',
        icon: '★',
        colorClass: 'callout--important',
      }
    default:
      return {
        label: 'NOTE',
        icon: 'i',
        colorClass: 'callout--note',
      }
  }
})
</script>

<template>
  <div :class="['fm-callout-box', typeConfig.colorClass]">
    <div class="callout-header">
      <span class="callout-icon">{{ typeConfig.icon }}</span>
      <span class="callout-label fm-label">{{ title || typeConfig.label }}</span>
    </div>
    <div class="callout-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fm-callout-box {
  border: 2px dashed var(--color-rule);
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-3);
  display: flex;
  flex-direction: column;
}

.fm-callout-box::after {
  content: '';
  display: block;
  height: 1.25rem;
  flex-shrink: 0;
}

.fm-callout-box:last-child {
  margin-bottom: 0;
}

/* Type variants */
.callout--warning {
  border-color: var(--c-red);
  background: var(--c-red-pale);
}

.callout--note {
  border-color: var(--c-blue);
  background: var(--c-blue-pale);
}

.callout--caution {
  border-color: var(--c-khaki-dark);
  background: var(--c-olive-ghost);
}

.callout--important {
  border-color: var(--c-olive-mid);
  background: var(--c-olive-ghost);
}

/* Header bar */
.callout-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px dashed currentColor;
}

.callout--warning .callout-header  { background: var(--c-red-pale);   border-bottom-color: var(--c-red); }
.callout--note .callout-header     { background: var(--c-blue-pale);  border-bottom-color: var(--c-blue); }
.callout--caution .callout-header  { background: var(--c-olive-ghost); border-bottom-color: var(--c-khaki-dark); }
.callout--important .callout-header { background: var(--c-olive-ghost); border-bottom-color: var(--c-olive-mid); }

.callout-icon {
  font-size: var(--text-md);
  flex-shrink: 0;
  line-height: 1;
}

.callout--warning .callout-icon  { color: var(--c-red); }
.callout--note .callout-icon     { color: var(--c-blue); }
.callout--caution .callout-icon  { color: var(--c-khaki-dark); }
.callout--important .callout-icon { color: var(--c-olive-mid); }

.callout-label {
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
}

.callout--warning .callout-label  { color: var(--c-red); }
.callout--note .callout-label     { color: var(--c-blue); }
.callout--caution .callout-label  { color: var(--c-khaki-dark); }
.callout--important .callout-label { color: var(--c-olive-mid); }

/* Content */
.callout-body {
  padding: var(--space-3) var(--space-4) 0;
  font-size: var(--text-sm);
  color: var(--color-fg-muted);
  line-height: 1.6;
}
</style>
