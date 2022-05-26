<template>
  <Link href="/"><HomeIcon />Home</Link>
  <Link href="/academic"><AcademicCapIcon />Academic</Link>
  <Link href="/choir"><MusicNoteIcon />Choir</Link>
  <Link href="/programming"><DesktopComputerIcon />Programming</Link>
</template>

<script>
import {
  HomeIcon,
  AcademicCapIcon,
  MusicNoteIcon,
  BookOpenIcon,
  DesktopComputerIcon,
} from "@heroicons/vue/solid";
export default {
  name: "NavLinks",
  components: {
    HomeIcon,
    AcademicCapIcon,
    MusicNoteIcon,
    BookOpenIcon,
    DesktopComputerIcon,
  },
};
</script>

<style scoped>
@import "nav.css";
</style>
