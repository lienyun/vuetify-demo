<script setup>

const emits = defineEmits(['selectOption'])

const selectOption = (isColor) => {
    emits('selectOption', isColor)
}

</script>



<template lang="">
  <VNavigationDrawer 
  expand-on-hover 
  rail>
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

    </VList>
  </VNavigationDrawer>
</template>
