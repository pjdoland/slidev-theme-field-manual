<!-- Layout: end — Final slide with END OF BRIEFING treatment, contact block, unit patch area -->
<script setup lang="ts">
import ClassificationBanner from '../components/ClassificationBanner.vue'

defineProps<{
  classification?: string
  docNumber?: string
  unit?: string
  contact?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-end">
    <ClassificationBanner :text="classification ?? 'FOR TRAINING USE ONLY'" />

    <div class="end-body">
      <!-- Unit patch placeholder -->
      <div class="end-patch">
        <div class="end-patch__inner">
          <div class="end-patch__reticle">
            <div class="r-h"></div>
            <div class="r-v"></div>
            <div class="r-c"></div>
          </div>
          <slot name="patch" />
        </div>
      </div>

      <!-- Main text block -->
      <div class="end-text">
        <div class="end-rule-top"></div>
        <div class="end-eof fm-label">
          ─── End of Briefing ───
        </div>
        <h1 class="end-title">
          <slot name="title">Questions?</slot>
        </h1>
        <div class="end-rule-mid"></div>
        <div class="end-contact">
          <slot name="contact">
            <p v-if="contact">{{ contact }}</p>
          </slot>
        </div>
        <div class="end-doc fm-label">
          {{ docNumber ?? 'FM 21-SLIDE' }}
          <span v-if="unit"> · {{ unit }}</span>
        </div>
      </div>
    </div>

    <ClassificationBanner :text="classification ?? 'FOR TRAINING USE ONLY'" />
  </div>
</template>

<style scoped>
.layout-end {
  display: flex;
  flex-direction: column;
  background: var(--c-olive) !important;
  color: var(--c-khaki-light);
  padding: 0;
}

.end-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  padding: var(--space-6) var(--space-8);
}

/* Unit patch placeholder */
.end-patch {
  flex-shrink: 0;
}

.end-patch__inner {
  width: 120px;
  height: 120px;
  border: 2px solid rgba(200, 184, 122, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(0,0,0,0.15);
}

.end-patch__reticle {
  position: absolute;
  inset: 0;
  opacity: 0.2;
}

.r-h {
  position: absolute;
  width: 100%;
  height: 1px;
  background: var(--c-khaki-light);
  top: 50%;
}

.r-v {
  position: absolute;
  width: 1px;
  height: 100%;
  background: var(--c-khaki-light);
  left: 50%;
}

.r-c {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 1px solid var(--c-khaki-light);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Text block */
.end-text {
  flex: 1;
  max-width: 580px;
}

.end-rule-top {
  height: 3px;
  background: var(--c-khaki-light);
  margin-bottom: var(--space-4);
}

.end-eof {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-4);
}

.end-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: 900;
  color: var(--c-khaki-light);
  margin: 0 0 var(--space-5);
  line-height: 1.05;
  text-transform: uppercase;
}

.end-rule-mid {
  height: 1px;
  background: var(--c-khaki-dark);
  margin-bottom: var(--space-4);
}

.end-contact {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--c-khaki-pale);
  margin-bottom: var(--space-4);
  line-height: 1.7;
}

.end-doc {
  color: var(--c-khaki-dark);
  letter-spacing: var(--tracking-widest);
}
</style>
