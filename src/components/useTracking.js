import { WDOTInitialization } from 'dop-website-sdk/src'

export function useTracking() {
  WDOTInitialization.setConfig({
    serviceNumber: 0000, // 서비스번호를 입력해주세요
    dotAccessToken: 'asd', // 서비스관리 메뉴의 토큰을 입력해주세요
    combackUserLimitDays: 14,
    dotEndPoint: 'https://trk.analytics.wisetracker.co.kr/web/v1/dataRcv.do',
    adClkEndPoint: 'https://trk.analytics.wisetracker.co.kr/ldsys/v1/clickDataRcv.do',
    adLandingEndPoint: 'https://app.wisetracker.co.kr',
    includeUrl: 'localhost',
    excludeUrl: '',
    referrerExpire: 7,
    firstEventSendMode: false
  })
  WDOTInitialization.init()
  let WDOT = window.WDOT

  const trackScreen = (eventName, pageId) => {
    WDOT.logScreen({
      event: eventName,
      page_id: pageId
    })
  }

  const trackEvent = (eventName, params) => {
    WDOT.logEvent({
      event: eventName,
      ...params
    })
  }

  return { trackScreen, trackEvent }
}