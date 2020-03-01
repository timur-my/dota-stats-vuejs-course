<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Matches</md-dialog-title>

      <md-dialog-content>
        <md-card>
          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <span>Filters:</span>
              <md-card-expand-trigger>
                <md-button class="md-icon-button">
                  <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                <md-checkbox v-model="win" class="md-checkbox-won">Game won</md-checkbox>
                <md-field class="md-field-limit">
                  <label>Limit</label>
                  <md-input v-model="limit" type="number"></md-input>
                </md-field>

                <md-card-actions>
                <md-button @click="refreshMatches()">Refresh</md-button>
              </md-card-actions>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>

        <md-table v-model="playerMatches" md-sort="start_time" md-sort-order="desc">
          <md-table-row slot="md-table-row" slot-scope="{ item }" :class="md-primary">
            <md-table-cell md-label="Side">
              <span class="radiant" v-if="item.player_slot <= 127">Radiant</span>
              <span class="dire" v-else>Dire</span>
            </md-table-cell>
            <md-table-cell md-label="Victory side">
              <span class="radiant" v-if="item.radiant_win">Radiant</span>
              <span class="dire" v-else>Dire</span>
            </md-table-cell>
            <md-table-cell md-label="Duration" md-sort-by="duration">{{ converSecToMin(item.duration) }}</md-table-cell>
            <md-table-cell md-label="Starting time" md-sort-by="start_time">{{ convertTime(item.start_time) }}</md-table-cell>
            <md-table-cell md-label="Kills" md-sort-by="kills" md-numeric>{{ item.kills }}</md-table-cell>
            <md-table-cell md-label="Deaths" md-sort-by="deaths" md-numeric>{{ item.deaths }}</md-table-cell>
            <md-table-cell md-label="Assists" md-sort-by="assists" md-numeric>{{ item.assists }}</md-table-cell>
          </md-table-row>
        </md-table>
      </md-dialog-content>
      

      <md-dialog-actions>
        <md-button class="md-primary" @click="onSelect(false)">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'PlayerMatchesDialog',
  data() {
    return {
      limit: 30,
      win: false
    };
  },
  methods: {
    onSelect (item) {
      this.$store.dispatch('showDialog', item)
    },
    convertTime (time) {
      let current_datetime = new Date(time * 1000)
      let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
      return formatted_date
    },
    refreshMatches () {
      this.$store.dispatch('getPlayerMatches', {
        account_id: this.selectedPlayer,
        limit: this.limit,
        win: +this.win
      })
    },
    converSecToMin (sec) {
      return Math.floor(sec / 60) + 'min'
    }
  },
  computed: {
    showDialog () {
      return this.$store.getters.getShowDialog
    },
    playerMatches () {
      return this.$store.getters.getPlayerMatches
    },
    selectedPlayer () {
      return this.$store.getters.getSelectedPlayer
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('../styles/player-matches-dialog.scss');
</style>