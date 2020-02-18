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
            <md-tab id="tab-pro-players" md-label="Pro players"></md-tab>
            <md-tab id="tab-pages" md-label="2 page"></md-tab>
          </md-tabs>
          </div>
        </md-app-toolbar>

        <md-app-content>
          <div>
            <md-table v-model="players" md-sort="last_match_time" md-sort-order="asc" @md-selected="onSelect">
              <md-table-toolbar>
                <h1 class="md-title">Statistics:</h1>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }" :class="md-primary" md-selectable="single">
                <md-table-cell md-label="Avatar">
                  <md-avatar class="md-small">
                    <img :src="item.avatar" alt="Avatar">
                  </md-avatar>
                </md-table-cell>
                <md-table-cell md-label="Steam ID" md-sort-by="steamid" md-numeric>{{ item.steamid }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="personaname">{{ item.personaname }}</md-table-cell>
                <md-table-cell md-label="Profile url"><a :href="item.profileurl" target="_blank">{{ item.profileurl }}</a></md-table-cell>
                <md-table-cell md-label="Last match time" md-sort-by="last_match_time">{{ item.last_match_time }}</md-table-cell>
                <md-table-cell md-label="Country code" md-sort-by="loccountrycode">{{ item.loccountrycode }}</md-table-cell>
                <md-table-cell md-label="Team" md-sort-by="team_name">{{ item.team_name }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </md-app-content>
      </md-app>

      <md-dialog :md-active.sync="showDialog" v-model="selected">
          <md-dialog-title>{{ selected.personaname }}</md-dialog-title>

          <md-dialog-content>
            <md-avatar class="md-large">
              <img :src="selected.avatarfull" alt="Avatar">
            </md-avatar>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-dialog-content>
          

          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>
    </div>
  </div>
</template>

<script>
import getProPlayers from './__data__/actions/get-pro-players'

export default {
  name: 'app',
  components: {},
  data: () => ({
    selected: {},
    players: {},
    showDialog: false
  }),
  methods: {
    onSelect (item) {
      this.showDialog = true;
      this.selected = item;
    }
  },
  created: function () {
    getProPlayers(20).then((res) => this.players = res)
  }
}
</script>

<style lang="scss" scoped>
  @import url('./components/style.scss');
</style>