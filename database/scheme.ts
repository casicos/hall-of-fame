export enum UserId {
  천사,
  송아지,
  졤졤,
  룽래,
  귀염단,
  웨금,
  iubns,
  또이,
  하늘,
  아린,
  나원래이런사람이야,
  여름,
  지구오형,
  구라타,
  황인욱,
  김상우,
  아마,
  아이린,
  혹여,
  피아노협주곡,
  윤랑,
  경무1,
  웅레,
  Love,
  밝음,
  그래고리타,
  레몬,
  가디언즈,
  이응2,
  바토리,
}

export enum UserTitle {
  Newbie = '뉴페이스',
  GuildMaster = '길드마스터',
}

export enum UserState {
  Participated,
  Escaped,
}

export interface RECORD {
  RECORD_SEQ: number
  USER_SEQ: number
  ACCUMULATED: number
  SCORE: number
  CREATE_TIME: string
  REMARK?: string
}

export interface USER {
  USER_SEQ: number
  USER_STATE_SEQ: number
  USER_TITLE_SEQ: number
  NAME: string
  SCORE: string
  CREATE_TIME: string
  UPDATE_TIME: string
}
