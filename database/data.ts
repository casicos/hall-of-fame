import moment from 'moment'
import {
  User,
  UserId,
  UserTitle,
  UserState,
  Record as Score,
} from '~/database/scheme'

export const records: {
  [season: number]: Partial<Record<UserId, Array<Score>>>
} = {
  5: {
    [UserId.천사]: [
      {
        accumulated: 3987089,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-05',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-04',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.송아지]: [
      {
        accumulated: 3098324,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-05',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.김상우]: [
      {
        accumulated: 2317500,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-05',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.졤졤]: [
      {
        accumulated: 2213755,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-05',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.iubns]: [
      {
        accumulated: 2025340,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-05',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.귀염단]: [
      {
        accumulated: 1951916,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.경무1]: [
      {
        accumulated: 1892841,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.밝음]: [
      {
        accumulated: 1819659,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.가디언즈]: [
      {
        accumulated: 1778160,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.룽래]: [
      {
        accumulated: 1725627,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.또이]: [
      {
        accumulated: 1602913,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.그래고리타]: [
      {
        accumulated: 1429672,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.황인욱]: [
      {
        accumulated: 1370701,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.웅레]: [
      {
        accumulated: 1197147,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.하늘]: [
      {
        accumulated: 1131727,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.지구오형]: [
      {
        accumulated: 1073840,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.아린]: [
      {
        accumulated: 1071100,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.웨금]: [
      {
        accumulated: 1061464,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.피아노협주곡]: [
      {
        accumulated: 1030253,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.구라타]: [
      {
        accumulated: 909225,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.바토리]: [
      {
        accumulated: 758841,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.나원래이런사람이야]: [
      {
        accumulated: 716811,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.윤랑]: [
      {
        accumulated: 653059,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.여름]: [
      {
        accumulated: 648099,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.이응2]: [
      {
        accumulated: 612266,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.레몬]: [
      {
        accumulated: 562671,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.Love]: [
      {
        accumulated: 0,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.아이린]: [
      {
        accumulated: 0,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.아마]: [
      {
        accumulated: 0,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
    [UserId.혹여]: [
      {
        accumulated: 0,
        manualTime: '2020-11-07',
        scored: 0,
        eventTime: 0,
      },
      {
        accumulated: 0,
        manualTime: '2020-11-06',
        scored: 0,
        eventTime: 0,
      },
    ],
  },
}

// manualTime → eventTime with sorting desc, scoring
for (const seasonRecords of Object.values(records)) {
  for (const records of Object.values(seasonRecords)) {
    if (records) {
      for (const record of records) {
        record.eventTime = moment(record.manualTime).unix() * 1000
      }

      records.sort((a, b) => b.eventTime - a.eventTime)

      // scoring by accumulated score
      for (const [recordIndex, record] of Object.entries(records)) {
        const nextRecordIndex = parseInt(recordIndex) + 1
        if (records.length <= nextRecordIndex) break
        const nextRecord = records[nextRecordIndex]
        record.scored = record.accumulated - nextRecord.accumulated
      }
    }
  }
}

export const users: Record<UserId, User> = {
  [UserId.천사]: {
    id: UserId.천사,
    name: '천사',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.GuildMaster],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.송아지]: {
    id: UserId.송아지,
    name: '송아지',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.iubns]: {
    id: UserId.iubns,
    name: 'iubns',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.Love]: {
    id: UserId.Love,
    name: 'Love',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.가디언즈]: {
    id: UserId.가디언즈,
    name: '가디언즈',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.경무1]: {
    id: UserId.경무1,
    name: '나는경무1',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.구라타]: {
    id: UserId.구라타,
    name: '구라타',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.귀염단]: {
    id: UserId.귀염단,
    name: '귀염단',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.그래고리타]: {
    id: UserId.그래고리타,
    name: '그래고리타',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.김상우]: {
    id: UserId.김상우,
    name: '김상우',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.나원래이런사람이야]: {
    id: UserId.나원래이런사람이야,
    name: '나원래이런사람이야',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.또이]: {
    id: UserId.또이,
    name: '또이',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.레몬]: {
    id: UserId.레몬,
    name: '레몬',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.룽래]: {
    id: UserId.룽래,
    name: '룽래',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.바토리]: {
    id: UserId.바토리,
    name: '바토리',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.밝음]: {
    id: UserId.밝음,
    name: '밝음',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.아린]: {
    id: UserId.아린,
    name: '아린',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.아마]: {
    id: UserId.아마,
    name: '아마',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.아이린]: {
    id: UserId.아이린,
    name: '아이린',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.여름]: {
    id: UserId.여름,
    name: '여름',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.웅레]: {
    id: UserId.웅레,
    name: '웅레',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.웨금]: {
    id: UserId.웨금,
    name: '웨금',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.윤랑]: {
    id: UserId.윤랑,
    name: '윤랑',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.이응2]: {
    id: UserId.이응2,
    name: '이응2',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.졤졤]: {
    id: UserId.졤졤,
    name: '졤졤',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.지구오형]: {
    id: UserId.지구오형,
    name: '지구오형',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.피아노협주곡]: {
    id: UserId.피아노협주곡,
    name: '피아노협주곡',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.하늘]: {
    id: UserId.하늘,
    name: '하늘',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
  [UserId.혹여]: {
    id: UserId.혹여,
    name: '혹여',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 1,
    state: UserState.Participated,
  },
  [UserId.황인욱]: {
    id: UserId.황인욱,
    name: '황인욱',
    seasons: [],
    headerTitleIndex: 0,
    titles: [UserTitle.Newbie],
    warning: 0,
    state: UserState.Participated,
  },
}
