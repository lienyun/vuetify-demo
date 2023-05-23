<script setup>

const p = defineProps(["isWithColor"]);
const copyUrl = async (url) => {
  await navigator.clipboard.writeText(url);
  alert("Copied the URL!");
};
</script>

<template>

  <VCard class="mx-5 my-2 pa-3">
    <VRow>
      <VCol v-for="n in 12" cols="4" :key="n" sm="3" md="2" lg="1">
        <VHover v-slot="{ isHovering, props }">
          <VCard
            @click="
              copyUrl(
                `https://picsum.photos/500/300?image=${n * 5 + 10}${
                  p.isWithColor ? '' : '&grayscale'
                }`
              )
            "
             :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
          >
            <VImg
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${
                p.isWithColor ? '' : '&grayscale'
              }`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${
                p.isWithColor ? '' : '&grayscale'
              }`"
              aspect-ratio="1"
              cover
            >
              <template v-slot:placeholder>
                <VRow class="fill-height ma-0" align="center" justify="center">
                  <VProgressCircular
                    color="grey-lighten-5"
                    indeterminate
                  ></VProgressCircular>
                </VRow>
              </template>
            </VImg>
          </VCard>
        </VHover>
      </VCol>
    </VRow>
  </VCard>
</template>
