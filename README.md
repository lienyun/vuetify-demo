# Vite+Vuetify Practice
The Vuetify 3 Tutorial - A Vue 3 UI Library: https://youtu.be/PzXaFXgsp60

## Points
1. Copied the url of the particular picture
```
const copyUrl = async (url) => {
  await navigator.clipboard.writeText(url);
  alert("Copied the URL!");
};
```
