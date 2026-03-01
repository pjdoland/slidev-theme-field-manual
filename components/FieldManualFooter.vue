<script setup lang="ts">
defineProps<{
  sectionNumber?: string
  unit?: string
  docLabel?: string
}>()
</script>

<template>
  <footer class="fm-footer">
    <div class="fm-footer__rule"></div>
    <div class="fm-footer__inner">
      <span class="fm-footer__section fm-section-id">
        {{ sectionNumber ?? '1-1' }}
      </span>
      <span class="fm-footer__doc fm-label">
        {{ docLabel ?? 'FM 24-SLIDE' }}
        <span v-if="unit"> · {{ unit }}</span>
      </span>
      <span class="fm-footer__page fm-section-id">
        {{ $nav?.currentPage ?? '' }}
        <template v-if="$nav?.total"> / {{ $nav.total }}</template>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.fm-footer {
  flex-shrink: 0;
}

.fm-footer__rule {
  height: var(--rule-thick);
  background: var(--color-rule);
}

.fm-footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-6);
  background: var(--color-bg-alt);
  gap: var(--space-4);
}

.fm-footer__section {
  color: var(--c-red);
  font-weight: 700;
  flex-shrink: 0;
}

.fm-footer__doc {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-wider);
  text-align: center;
  flex: 1;
}

.fm-footer__page {
  color: var(--color-fg-muted);
  flex-shrink: 0;
}
</style>
