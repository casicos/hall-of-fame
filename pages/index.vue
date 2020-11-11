<template>
  <v-container fluid>
    <v-row class="d-flex flex-row justify-space-around flex-wrap">
      <record-card
        v-for="[todayRecordIndex, todayRecord] of Object.entries(leaderRecords)"
        :key="parseInt(todayRecordIndex) + 1"
        class="align-self-center"
        :user="users.find((user) => user.USER_SEQ === todayRecord.USER_SEQ)"
        :records="
          records.filter((record) => record.USER_SEQ === todayRecord.USER_SEQ)
        "
      />
    </v-row>
    <v-row class="d-flex flex-row justify-space-around flex-wrap">
      <record-card
        v-for="[todayRecordIndex, todayRecord] of Object.entries(
          followerRecords
        )"
        :key="parseInt(todayRecordIndex) + 6"
        class="align-self-center"
        :user="users.find((user) => user.USER_SEQ === todayRecord.USER_SEQ)"
        :records="
          records.filter((record) => record.USER_SEQ === todayRecord.USER_SEQ)
        "
        :dense="true"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import RecordCard from '~/components/standing/record-card.vue'
import config from '~/database/config'
import { RECORD, USER } from '~/database/scheme'

@Component({
  name: 'standing',
  components: {
    RecordCard,
  },
})
export default class Standing extends Vue {
  private readonly todayTime =
    moment(moment().utc().add(9, 'hours').format('YYYY-MM-DD')).unix() * 1000

  private users: Array<USER> = []
  private records: Array<RECORD> = []

  private async created() {
    this.users = (await this.$axios.get('/users')).data
    this.records = (
      await this.$axios.get('/records', {
        params: {
          filter: {
            order: 'CREATE_TIME DESC',
            where: {
              SEASON_SEQ: config.SEASON_SEQ_CURRENT,
            },
          },
        },
      })
    ).data
  }

  private get lastRecords() {
    const lastRecords = this.records.reduce(
      (lastRecords: { [USER_SEQ: number]: RECORD }, record) => {
        if (!lastRecords[record.USER_SEQ]) {
          lastRecords[record.USER_SEQ] = record
        }
        return lastRecords
      },
      {}
    )

    const ret = Object.values(lastRecords)
    ret.sort((a, b) => b.ACCUMULATED - a.ACCUMULATED)

    return ret
  }

  private get leaderRecords() {
    return this.lastRecords.slice(0, 5)
  }

  private get followerRecords() {
    return this.lastRecords.slice(5)
  }

  // private get todayRecords() {
  //   const todayRecords = this.records.filter((record) => {
  //     const recordTime =
  //       moment(moment(record.CREATE_TIME).format()).unix() * 1000
  //     console.log(recordTime, this.todayTime)
  //     return recordTime >= this.todayTime
  //   })
  //
  //   const ret = Object.values(todayRecords)
  //   ret.sort((a: RECORD, b: RECORD) => b!.ACCUMULATED - a!.ACCUMULATED)
  //
  //   return ret
  // }
  //
  // private get todayLeaderRecords(): RECORD[] {
  //   return this.todayRecords.slice(0, 5)
  // }
  //
  // private get todayFollowerRecords(): RECORD[] {
  //   return this.todayRecords.slice(5)
  // }
}
</script>
