<template>
  <div>
    <player-card/>
  </div>
</template>

<script>
import axios from 'axios'
import PlayerCard from '../components/player-card.vue'

export default {
  name: 'pro-players',
  components: {
    PlayerCard
  }
}
</script>