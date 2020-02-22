<template>
  <div>
    <div v-for="player in players" :key="player.steamid">
      <md-card class="md-primary">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ player.personaname }}</div>
            <div class="md-subhead">
              <table class="table-player-info">
                <tr>
                  <th>Steam ID</th>
                  <th>Team</th>
                  <th>Country code</th>
                  <th>Profile url</th>
                </tr>
                <tr>
                  <td width="20%">{{ player.steamid }}</td>
                  <td width="20%">{{ player.team_name }}</td>
                  <td width="20%">{{ player.loccountrycode }}</td>
                  <td width="40%"><a :href="player.profileurl" target="_blank">{{ player.profileurl }}</a></td>
                </tr>
              </table>
            </div>
          </md-card-header-text>

          <md-card-media>
            <md-avatar class="md-large">
              <img :src="player.avatarfull" alt="Avatar">
            </md-avatar>
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button>Matches list</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  computed: {
    players() {
      return this.$store.getters.getProPlayersSlice(30)
    } 
  },
  created: async function () {
    await this.$store.dispatch('getProPlayers')
  },
}
</script>

<style lang="scss" scoped>
  @import url('./player-card-style.scss');
</style>