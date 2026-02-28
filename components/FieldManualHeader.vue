<script setup lang="ts">
defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  classification?: string
}>()
</script>

<template>
  <header class="fm-header">
    <div class="fm-header__inner">
      <span class="fm-header__doc fm-label">{{ docNumber ?? 'FM 21-SLIDE' }}</span>
      <span v-if="title" class="fm-header__title">{{ title }}</span>
      <span class="fm-header__class fm-label fm-label-accent">
        {{ classification ?? 'UNCLASSIFIED' }}
      </span>
    </div>
    <div class="fm-header__rule"></div>
  </header>
</template>

<style scoped>
.fm-header {
  flex-shrink: 0;
}

.fm-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-6);
  background: var(--color-bg-alt);
  border-bottom: 1px solid var(--c-olive-subtle);
  gap: var(--space-4);
  min-height: 2rem;
}

.fm-header__doc {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-widest);
  flex-shrink: 0;
}

.fm-header__title {
  font-family: var(--font-condensed-sans);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-fg-subtle);
  text-align: center;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fm-header__class {
  letter-spacing: var(--tracking-widest);
  flex-shrink: 0;
}

.fm-header__rule {
  height: var(--rule-thick);
  background: var(--color-rule);
}
</style>
