<template>
  <div>
    <header id="header">
      <div class="inner">
        <nuxt-link :to="localePath('/')" class="logo">
          <strong>Projection</strong> by TEMPLATED
        </nuxt-link>
        <nav id="nav">
          <nuxt-link :to="localePath('/')">
            {{ $t("header.home") }}
          </nuxt-link>
          <nuxt-link :to="localePath('generic')">
            {{ $t("header.generic") }}
          </nuxt-link>
          <nuxt-link :to="localePath('elements')">
            {{ $t("header.elements") }}
          </nuxt-link>
        </nav>
        <v-app-bar-nav-icon
          id="mobileNavIcon"
          @click="drawerRight = !drawerRight"
        />
      </div>
    </header>
    <v-navigation-drawer
      v-model="drawerRight"
      :clipped="clipped"
      fixed
      temporary
      right
      app
    >
      <v-list flat nav>
        <!-- Home -->
        <v-list-item :to="localePath('/')">
          <v-list-item-action>
            <v-icon> mdi-home </v-icon>
          </v-list-item-action>
          <v-list-item-title> {{ $t("header.home") }} </v-list-item-title>
        </v-list-item>

        <!-- Generic -->
        <v-list-item :to="localePath('generic')">
          <v-list-item-action>
            <v-icon> mdi-account-box </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            {{ $t("header.generic") }}
          </v-list-item-title>
        </v-list-item>

        <!-- Elements -->
        <v-list-item :to="localePath('elements')">
          <v-list-item-action>
            <v-icon> mdi-code-tags </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            {{ $t("header.elements") }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Section -->
    <section id="banner">
      <div class="inner">
        <header>
          <h1>{{ $t("banner.welcome") }}</h1>
        </header>

        <div class="flex">
          <div>
            <span class="fa fa-2x fa-car" style="color: #6cc091"></span>
            <h3>Aliquam</h3>
            <p>Suspendisse amet ullamco</p>
          </div>

          <div>
            <span class="fa fa-2x fa-camera" style="color: #6cc091"></span>
            <h3>Elementum</h3>
            <p>Class aptent taciti ad litora</p>
          </div>

          <div>
            <span class="fa fa-2x fa-bug" style="color: #6cc091"></span>
            <h3>Ultrices</h3>
            <p>Nulla vitae mauris non felis</p>
          </div>
        </div>

        <footer>
          <a href="#" class="button">Get Started</a>
        </footer>
      </div>
    </section>

    <!-- Three -->
    <section id="three" class="wrapper align-center">
      <div class="inner">
        <div class="flex flex-2">
          <article>
            <div class="image round">
              <img src="~/assets/images/pic01.jpg" alt="Pic 01" />
            </div>
            <header>
              <h3>
                Lorem ipsum<br />
                dolor amet nullam
              </h3>
            </header>
            <p>
              Morbi in sem quis dui placerat ornare. Pellentesquenisi<br />euismod
              in, pharetra a, ultricies in diam sed arcu. Cras<br />consequat
              egestas augue vulputate.
            </p>
            <footer>
              <a href="#" class="button">{{ $t("three.learn_more") }}</a>
            </footer>
          </article>
          <article>
            <div class="image round">
              <img src="~/assets/images/pic02.jpg" alt="Pic 02" />
            </div>
            <header>
              <h3>
                Sed feugiat<br />
                tempus adipicsing
              </h3>
            </header>
            <p>
              Pellentesque fermentum dolor. Aliquam quam lectus<br />facilisis
              auctor, ultrices ut, elementum vulputate, nunc<br />
              blandit ellenste egestagus commodo.
            </p>
            <footer>
              <a href="#" class="button">{{ $t("three.learn_more") }}</a>
            </footer>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <h3>{{ $t("footer.get_in_touch") }}</h3>

        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <div class="field half first">
            <label for="name">{{ $t("footer.name") }}</label>
            <input name="name" id="name" type="text" />
          </div>
          <div class="field half">
            <label for="email">{{ $t("footer.email") }}</label>
            <input name="email" id="email" type="email" />
          </div>
          <div class="field">
            <label for="message">{{ $t("footer.message") }}</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              style="border: solid 2px #8dcca9"
            ></textarea>
          </div>
          <ul class="actions">
            <li>
              <input value="Send Message" class="button alt" type="submit" />
            </li>
          </ul>
        </form>

        <div class="copyright">
          &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>.
          Images: <a href="https://unsplash.com">Unsplash</a>.
        </div>
      </div>
      <v-col>
        <v-row justify="space-around">
          <v-container>
            <v-btn @click="$i18n.setLocale('nl')">
              {{ $t("languages.nl") }}
            </v-btn>
          </v-container>
          <v-container>
            <v-btn @click="$i18n.setLocale('en')">
              {{ $t("languages.en") }}
            </v-btn>
          </v-container>
        </v-row>
      </v-col>
    </footer>
  </div>
</template>

<script>
export default {
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

<style scoped>
@media screen and (min-width: 981px) {
  #mobileNavIcon {
    display: none;
  }
}
</style>
