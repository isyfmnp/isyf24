<template>
  <div>
    <Head>
      <Title>Portfolio | Tang Xuyuan</Title>
    </Head>
    <NavBar />
    <ButtonScroll />

    <div id="body">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
#body {
  max-width: var(--content-width);
  margin: 0 auto 5rem;
  padding-inline: 1.5rem;
}
</style>
