<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const emits = defineEmits(["selectOption"]);

const selectOption = (isColor) => {
  emits("selectOption", isColor);
};

const theme = useTheme();
const darkMode = ref(false);

const toggleMode = () => {
  darkMode.value = !darkMode.value;
  theme.global.name.value = darkMode.value ? "myDarkTheme" : "myTheme";
};
</script>

<template lang="">
  <VNavigationDrawer expand-on-hover rail>
    <VList>
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Wendy Chang"
        subtitle="wendy.c@gmailcom"
      ></VListItem>
    </VList>
    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-image"
        title="Color Gallery"
        value="color"
        @click="selectOption(true)"
      />

      <VListItem
        prepend-icon="mdi-dialpad"
        title="Grayspace Gallery"
        value="gray"
        @click="selectOption(false)"
      />
      <VListItem
        prepend-icon="mdi-theme-light-dark"
        title="Toggle Mode"
        value="gray"
        @click="toggleMode"
      />
    </VList>
  </VNavigationDrawer>
</template>
