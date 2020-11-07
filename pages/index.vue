<template>
  <v-container fluid>
    <v-row class="d-flex flex-row justify-space-around flex-wrap">
      <record-card
        v-for="[todayRecordIndex, todayRecord] of Object.entries(
          todayLeaderRecords
        )"
        :key="parseInt(todayRecordIndex) + 1"
        class="align-self-center"
        :user="users[todayRecord.ownerId]"
        :records="records[config.currentSeason][todayRecord.ownerId]"
      />
    </v-row>
    <v-row class="d-flex flex-row justify-space-around flex-wrap">
      <record-card
        v-for="[todayRecordIndex, todayRecord] of Object.entries(
          todayFollowerRecords
        )"
        :key="parseInt(todayRecordIndex) + 6"
        class="align-self-center"
        :user="users[todayRecord.ownerId]"
        :records="records[config.currentSeason][todayRecord.ownerId]"
        :dense="true"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import RecordCard, {
  RecordCardScore,
} from '~/components/standing/record-card.vue'
import config from '~/database/config'
import { users, records } from '~/database/data'
import { UserId } from '~/database/scheme'

@Component({
  name: 'standing',
  components: {
    RecordCard,
  },
})
export default class Standing extends Vue {
  private readonly config = config
  private readonly users = users
  private readonly records = records
  private readonly todayTime =
    moment(moment().format('YYYY-MM-DD')).unix() * 1000

  private get todayRecords() {
    const todayRecords = Object.entries(records[config.currentSeason]).reduce(
      (acc, userRecords) => {
        const [user, records] = userRecords
        const recentRecord = records && records[0]
        if (recentRecord) {
          recentRecord.eventTime >= this.todayTime &&
            (acc[parseInt(user) as UserId] = Object.assign(recentRecord, {
              ownerId: parseInt(user) as UserId,
            }))
        }
        return acc
      },
      {} as Partial<Record<UserId, RecordCardScore>>
    )

    const ret = Object.values(todayRecords)
    ret.sort((a, b) => b!.accumulated - a!.accumulated)

    return ret
  }

  private get todayLeaderRecords() {
    return this.todayRecords.slice(0, 5)
  }

  private get todayFollowerRecords() {
    return this.todayRecords.slice(5)
  }
}
</script>
