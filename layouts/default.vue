<template>
  <v-app dark>
    

    

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: "https://code.jquery.com/jquery-3.2.1.min.js",
      },
    ],
  },
  data() {
    return {
      clipped: true,
      drawerRight: false,
      right: true,
      fixed: true,
    };
  },
};
</script>

<style>
.marginLR {
  margin-left: 10px;
  margin-right: 10px;
}
</style>