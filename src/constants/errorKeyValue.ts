export enum EErrorNo {
  /* 0 ~ 20 : Common Error */
  COMMON_ERROR_START = 0,
  NO_ERROR = COMMON_ERROR_START,
  COMMON_ERROR_FINISH = 20,

  /* 21 ~ 40 : Input Error */
  INPUT_ERROR_START = COMMON_ERROR_FINISH + 1,
  INPUT_ERROR_EMPTY_ID,
  INPUT_ERROR_EMPTY_PWD,
  INPUT_ERROR_FINISH = 40,
}

export const errorMsgMap = new Map<EErrorNo, string>();
errorMsgMap.set(EErrorNo.NO_ERROR, "에러 X");

errorMsgMap.set(EErrorNo.INPUT_ERROR_EMPTY_ID, "아이디가 비어져 있습니다");
errorMsgMap.set(EErrorNo.INPUT_ERROR_EMPTY_PWD, "비밀번호가 비어져 있습니다");
