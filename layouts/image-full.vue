<!-- Layout: image-full — Full-bleed background image with gradient overlay and text block bottom-left -->
<script setup lang="ts">
import ClassificationBanner from '../components/ClassificationBanner.vue'

defineProps<{
  classification?: string
  sectionNumber?: string
  docNumber?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-image-full">
    <!-- Background image slot -->
    <div class="if-bg">
      <slot name="image">
        <div class="if-bg-placeholder"></div>
      </slot>
    </div>

    <!-- Gradient overlay -->
    <div class="if-overlay"></div>

    <!-- Classification banner preserved on top -->
    <ClassificationBanner
      :text="classification ?? 'FOR TRAINING USE ONLY'"
      class="if-banner"
    />

    <!-- Text block anchored bottom-left -->
    <div class="if-text-block">
      <div class="if-text-rule"></div>
      <div class="if-doc-label fm-label">{{ docNumber ?? 'FM 21-SLIDE' }}</div>
      <div class="if-title">
        <slot />
      </div>
      <div class="if-subtitle">
        <slot name="subtitle" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-image-full {
  padding: 0;
  position: relative;
  overflow: hidden;
}

.if-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.if-bg :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(0.25) contrast(1.1) brightness(0.85);
}

.if-bg-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--c-olive) 0%, var(--c-olive-dark) 100%);
}

.if-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(26, 26, 20, 0.85) 0%,
    rgba(26, 26, 20, 0.40) 50%,
    rgba(26, 26, 20, 0.10) 100%
  );
}

.if-banner {
  position: relative;
  z-index: 3;
}

.if-text-block {
  position: absolute;
  bottom: 40px;
  left: 48px;
  right: 200px;
  z-index: 2;
}

.if-text-rule {
  height: 3px;
  width: 60px;
  background: var(--c-khaki-light);
  margin-bottom: var(--space-3);
}

.if-doc-label {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-2);
}

.if-title {
  font-family: var(--font-heading);
  color: var(--c-khaki-light);
  font-size: clamp(1.6rem, 3.2vw, 2.6rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 var(--space-3);
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.if-title :deep(h1),
.if-title :deep(h2),
.if-title :deep(p) {
  color: var(--c-khaki-light);
  font-family: var(--font-heading);
  font-size: inherit;
  font-weight: 900;
  margin: 0;
}

.if-subtitle {
  font-family: var(--font-body);
  color: var(--c-khaki-pale);
  font-size: var(--text-md);
}
</style>
