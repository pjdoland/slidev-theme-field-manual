<!-- Layout: cover — Full-bleed olive title slide with classification banners, corner brackets, crosshairs -->
<script setup lang="ts">
import ClassificationBanner from '../components/ClassificationBanner.vue'

defineProps<{
  classification?: string
  docNumber?: string
  date?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-cover">
    <!-- Paper grain is applied via ::before in global styles -->

    <!-- Classification banner top -->
    <ClassificationBanner :text="classification ?? 'FOR TRAINING USE ONLY'" />

    <!-- Corner reticles -->
    <div class="cover-reticle cover-reticle--tl">
      <div class="reticle-h"></div>
      <div class="reticle-v"></div>
      <div class="reticle-circle"></div>
    </div>
    <div class="cover-reticle cover-reticle--tr">
      <div class="reticle-h"></div>
      <div class="reticle-v"></div>
      <div class="reticle-circle"></div>
    </div>
    <div class="cover-reticle cover-reticle--bl">
      <div class="reticle-h"></div>
      <div class="reticle-v"></div>
      <div class="reticle-circle"></div>
    </div>
    <div class="cover-reticle cover-reticle--br">
      <div class="reticle-h"></div>
      <div class="reticle-v"></div>
      <div class="reticle-circle"></div>
    </div>

    <!-- Main content area -->
    <div class="cover-body">
      <!-- Corner bracket decoration top-left -->
      <div class="cover-frame">
        <!-- Bracket corners -->
        <span class="cover-frame__tl"></span>
        <span class="cover-frame__tr"></span>
        <span class="cover-frame__bl"></span>
        <span class="cover-frame__br"></span>

        <!-- Doc number -->
        <div class="cover-doc-number fm-label">
          {{ docNumber ?? 'FM 21-SLIDE' }}
        </div>

        <!-- Thick top rule -->
        <div class="cover-rule-top"></div>

        <!-- Title -->
        <h1 class="cover-title">
          <slot name="title">
            <slot />
          </slot>
        </h1>

        <!-- Sub-rule -->
        <div class="cover-rule-mid"></div>

        <!-- Subtitle -->
        <div v-if="$slots.subtitle || $slots.default" class="cover-subtitle">
          <slot name="subtitle" />
        </div>

        <!-- Date -->
        <div class="cover-meta">
          <span class="cover-date fm-label">{{ date ?? '' }}</span>
          <slot name="meta" />
        </div>
      </div>
    </div>

    <!-- Classification banner bottom -->
    <ClassificationBanner :text="classification ?? 'FOR TRAINING USE ONLY'" />
  </div>
</template>

<style scoped>
.layout-cover {
  background: var(--c-olive) !important;
  display: flex;
  flex-direction: column;
  color: var(--c-khaki-light);
  padding: 0;
  position: relative;
}

/* Subtle diagonal hatching overlay for depth */
.layout-cover::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 40px,
    rgba(0,0,0,0.03) 40px,
    rgba(0,0,0,0.03) 41px
  );
}

.cover-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6) var(--space-8);
  position: relative;
  z-index: 2;
}

.cover-frame {
  width: 100%;
  max-width: 800px;
  padding: var(--space-6) var(--space-7);
  position: relative;
  border: 1px solid rgba(200, 184, 122, 0.25);
}

/* Corner brackets */
.cover-frame__tl,
.cover-frame__tr,
.cover-frame__bl,
.cover-frame__br {
  position: absolute;
  width: 20px;
  height: 20px;
}

.cover-frame__tl {
  top: -2px; left: -2px;
  border-top: 2px solid var(--c-khaki-light);
  border-left: 2px solid var(--c-khaki-light);
}

.cover-frame__tr {
  top: -2px; right: -2px;
  border-top: 2px solid var(--c-khaki-light);
  border-right: 2px solid var(--c-khaki-light);
}

.cover-frame__bl {
  bottom: -2px; left: -2px;
  border-bottom: 2px solid var(--c-khaki-light);
  border-left: 2px solid var(--c-khaki-light);
}

.cover-frame__br {
  bottom: -2px; right: -2px;
  border-bottom: 2px solid var(--c-khaki-light);
  border-right: 2px solid var(--c-khaki-light);
}

.cover-doc-number {
  color: var(--c-khaki-dark);
  margin-bottom: var(--space-3);
  letter-spacing: var(--tracking-widest);
}

.cover-rule-top {
  height: 4px;
  background: var(--c-khaki-light);
  margin-bottom: var(--space-5);
}

.cover-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.05;
  color: var(--c-khaki-light);
  letter-spacing: -0.02em;
  margin: 0 0 var(--space-5);
  text-transform: uppercase;
}

.cover-rule-mid {
  height: 2px;
  background: var(--c-khaki-dark);
  margin-bottom: var(--space-4);
}

.cover-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--c-khaki-pale);
  margin-bottom: var(--space-4);
  line-height: 1.4;
}

.cover-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.cover-date {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-widest);
}

/* Crosshair reticles at corners */
.cover-reticle {
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 3;
  opacity: 0.30;
}

.cover-reticle--tl { top: 28px; left: 16px; }
.cover-reticle--tr { top: 28px; right: 16px; }
.cover-reticle--bl { bottom: 28px; left: 16px; }
.cover-reticle--br { bottom: 28px; right: 16px; }

.reticle-h {
  position: absolute;
  width: 100%;
  height: 1px;
  background: var(--c-khaki-light);
  top: 50%;
  left: 0;
}

.reticle-v {
  position: absolute;
  width: 1px;
  height: 100%;
  background: var(--c-khaki-light);
  left: 50%;
  top: 0;
}

.reticle-circle {
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1px solid var(--c-khaki-light);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
