<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="overlap">
        <md-app-toolbar class="md-primary md-large">
          <div class="md-toolbar-row">
            <span class="md-title">
              <img src="http://cdn.dota2.com/apps/dota2/images/nav/logo.png" alt="Icon">
            </span>

            <md-tabs class="md-primary">
            <md-tab id="tab-pro-players" to="/" md-label="Pro players" exact></md-tab>
            <md-tab id="tab-pro-matches" to="/pro-matches" md-label="Pro matches"></md-tab>
          </md-tabs>
          </div>
        </md-app-toolbar>

        <md-app-content>
          <router-view/>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss" scoped>
  @import url('./styles/app.scss');
</style>