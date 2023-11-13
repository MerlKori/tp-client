<template>
  <div class="layout layout--main">
    <AppHeader />
    <AppBreadcrumbs />
    <main>
      <div class="grid-container">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style>
.layout--main {
  display: flex;
  flex-direction: column;
}

.layout--main .app-header {
  height: 60px;
}
/* .layout--main main {
  height: 60px;
} */
.layout--main .app-footer {
  margin-top: auto;
}
</style>