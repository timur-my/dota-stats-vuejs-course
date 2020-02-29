<template>
  <div>
    <player-card/>
    <player-matches-dialog/>
  </div>
</template>

<script>
import axios from 'axios'
import PlayerCard from '../components/player-card.vue'
import PlayerMatchesDialog from '../components/player-matches-dialog.vue'

export default {
  name: 'pro-players',
  components: {
    PlayerCard,
    PlayerMatchesDialog
  }
}
</script>