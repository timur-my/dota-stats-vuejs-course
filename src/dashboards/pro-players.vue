<template>
  <div>
    <player-card  :players="players"/>
  </div>
</template>

<script>
import axios from 'axios'
import PlayerCard from '../components/player-card.vue'
import getProPlayers from '../__data__/actions/get-pro-players'

export default {
  name: 'pro-players',
  components: {
    PlayerCard
  },
  data() {
      return {
          players: {}
      }
  },
  created: function () {
    getProPlayers(20).then((res) => this.players = res)
  }
}
</script>

<style lang="scss" scoped>
  @import url('../components/pro-players-style.scss');
</style>