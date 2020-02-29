<template>
  <div>
    <div v-for="match in matches" :key="match.match_id">
      <md-card class="md-primary">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">
              {{ match.league_name }}<br/>
              <span class="radiant">{{ match.radiant_name ? match.radiant_name : 'Unknown' }}</span>
               vs 
               <span class="dire">{{ match.dire_name ? match.dire_name : 'Unknown' }}</span><br/>
              <span class="radiant">{{ match.radiant_score }}</span>-<span class="dire">{{ match.dire_score }}</span>
            </div>
            <div class="md-subhead">
              <table class="table-match-info">
                <tr>
                  <th>Match ID</th>
                  <th>Victory side</th>
                  <th>Start_time</th>
                  <th>Duration(sec)</th>
                </tr>
                <tr>
                  <td width="20%">{{ match.match_id }}</td>
                  <td width="20%">
                    <span v-if="match.radiant_win" class="radiant">Radiant</span>
                    <span v-else class="dire">Dire</span>
                  </td>
                  <td width="20%">{{ convertTime(match.start_time) }}</td>
                  <td width="20%">{{ match.duration }}</td>
                </tr>
              </table>
            </div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacthCard',
  methods: {
    convertTime (time) {
      let current_datetime = new Date(time * 1000)
      let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
      return formatted_date
    }
  },
  computed: {
    matches() {
      return this.$store.getters.getProMatchesSlice(30)
    } 
  },
  created: async function () {
    await this.$store.dispatch('getProMatches')
  },
}
</script>

<style lang="scss" scoped>
  @import url('./match-card-style.scss');
</style>