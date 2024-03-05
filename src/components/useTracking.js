import { WDOTInitialization } from 'dop-website-sdk/src'

export function useTracking() {
  WDOTInitialization.setConfig({
    serviceNumber: 20502,
    dotAccessToken:
      'CX24QowM3v0ju5qEU8I/hiqrS29hAlGEJpBXQx09PHFBQ3xlqyERakQJKXLX/9/cHnmjuPOxQo83DsfeBgWZ1w==',
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