<template>
  <div>
    <match-card/>
  </div>
</template>

<script>
import axios from 'axios'
import MatchCard from '../components/match-card.vue'

export default {
  name: 'pro-matches',
  components: {
    MatchCard
  }
}
</script>