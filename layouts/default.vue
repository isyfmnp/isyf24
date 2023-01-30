<template>
  <main>
    <Head>
      <Title>Portfolio | Tang Xuyuan</Title>
    </Head>
    <NavBar />
    <ButtonScroll />

    <div id="body">
      <slot />
    </div>

    <Footer />
  </main>
</template>

<style scoped>
#body {
  max-width: var(--content-width);
  margin: 0 auto 5rem;
  padding-inline: 1.5rem;
}
</style>
