<template>
  <div>
    <player-card/>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Matches</md-dialog-title>

      <md-dialog-content>
        <md-table v-model="playerMatches" md-sort="start_time" md-sort-order="asc">
          <md-table-row slot="md-table-row" slot-scope="{ item }" :class="md-primary">
            <md-table-cell md-label="Match ID" md-sort-by="match_id" md-numeric>{{ item.match_id }}</md-table-cell>
            <md-table-cell md-label="Duration(sec)" md-sort-by="duration">{{ item.duration }}</md-table-cell>
            <md-table-cell md-label="Start time" md-sort-by="start_time">{{ convertTime(item.start_time) }}</md-table-cell>
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
import axios from 'axios'
import PlayerCard from '../components/player-card.vue'

export default {
  name: 'pro-players',
  components: {
    PlayerCard
  },
  methods: {
    onSelect (item) {
      this.$store.dispatch('showDialog', item)
    },
    convertTime (time) {
      let current_datetime = new Date(time * 1000)
      let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
      return formatted_date
    }
  },
  computed: {
    showDialog () {
      return this.$store.getters.getShowDialog
    },
    playerMatches () {
      return this.$store.getters.getPlayerMatches
    }
  }
}
</script>