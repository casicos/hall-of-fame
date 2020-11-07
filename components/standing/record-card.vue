<template>
  <v-card class="ma-2 prefix" width="325" :height="height" elevation="2">
    <v-img v-if="!dense" height="110" :src="prefixImage($vnode.key)"> </v-img>
    <v-card-text class="mt-2">
      <div class="font-weight-bold headline ml-8">
        {{ user.name }} <strong>{{ ` #${$vnode.key}` }}</strong>
      </div>
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="(record, recordIndex) in records.slice(
            0,
            this.recordTrackingCount
          )"
          :key="recordIndex"
          :color="record.scored > 0 ? 'green' : 'grey'"
          small
        >
          <div>
            <div class="font-weight-normal">
              <strong>{{ `+ ${formattedNumber(record.scored)} 점` }}</strong>
            </div>
            <div>
              {{ formattedNumber(record.accumulated) + ' 점' }}
              <i>@{{ formattedEventTime(record.eventTime) }}</i>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import moment from 'moment'
import { User, Record as Score, UserId } from '~/database/scheme'

export interface RecordCardScore extends Score {
  ownerId: UserId
}

@Component({
  name: 'RecordCard',
})
export default class RecordCard extends Vue {
  @Prop({ default: undefined })
  private readonly user!: User

  @Prop({ default: [] })
  private readonly records!: Array<Score>

  @Prop({ default: false })
  private readonly dense!: boolean

  private readonly recordTrackingCount = this.dense ? 2 : 3
  private readonly height =
    210 + 70 * this.recordTrackingCount - (this.dense ? 100 : 0)

  private formattedEventTime(eventTime: number) {
    return moment(eventTime).format('YYYY-MM-DD')
  }

  private formattedNumber(number: number) {
    return number.toLocaleString()
  }

  private prefixImage(rank: string | number) {
    switch (rank) {
      case 1:
        return 'https://cdn.pixabay.com/photo/2018/11/22/15/10/king-3832148__340.jpg'
      case 2:
        return 'https://cdn.pixabay.com/photo/2018/06/13/13/20/lion-3472776__340.jpg'
      case 3:
        return 'https://media.istockphoto.com/photos/kitten-with-mirror-on-white-background-kitten-looks-in-a-mirror-of-a-picture-id1035037224?b=1&k=6&m=1035037224&s=170667a&w=0&h=C2y0udSq7eF2GRao094ZKuO6ELu4o6dGaopHmFD9fy8='
      case 4:
        return 'https://cdn.pixabay.com/photo/2017/04/05/12/16/cat-2204851__340.jpg'
      case 5:
        return 'https://cdn.pixabay.com/photo/2017/10/06/14/33/cat-2823286__340.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.prefix {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(25, 25, 25, 0.8));
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
