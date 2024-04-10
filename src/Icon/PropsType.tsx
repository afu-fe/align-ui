export type IconType =
  | 'success'
  | 'success_no_circle'
  | 'info'
  | 'warn'
  | 'waiting'
  | 'cancel'
  | 'download'
  | 'search'
  | 'clear'
  | 'back'
  | 'delete'
  | 'adjust'
  | 'blackRightShift'
  | 'close'
  | 'explain_linear'
  | 'explain_plane'
  | 'fall'
  | 'feeds_close'
  | 'fold'
  | 'group'
  | 'hook'
  | 'fire'
  | 'landscape'
  | 'module_loading'
  | 'more_blue'
  | 'more_gray'
  | 'more'
  | 'pdf'
  | 'pin'
  | 'plane'
  | 'popupunfold'
  | 'quotation_waiting'
  | 'radio_jump'
  | 'rightshift'
  | 'rise'
  | 'safety'
  | 'sell_disabled'
  | 'sell'
  | 'share'
  | 'trade_detail'
  | 'trade_dingtou_disabled'
  | 'trade_dingtou'
  | 'trade_hide'
  | 'trade_tradingrecord'
  | 'trade_visible'
  | 'unfold'
  | 'whiteHook';

export interface IconProps {
  containerClass?: string;
  type: IconType;
  size?: number | string;
  color?: string;
}

export const iconTypeMap: { [key: string]: string } = {
  success: 'SUCCESS',
  success_no_circle: 'SUCCESS_NO_CIRCLE',
  info: 'INFO',
  warn: 'WARN',
  waiting: 'WAITING',
  cancel: 'CANCEL',
  download: 'DOWNLOAD',
  search: 'SEARCH',
  clear: 'CLEAR',
  back: 'BACK',
  delete: 'DELETE',
  adjust: 'ADJUST',
  blackRightShift: 'BLACK_RIGHT_SHIFT',
  close: 'CLOSE',
  explain_linear: 'EXPLAIN_LINEAR',
  explain_plane: 'EXPLAIN_PLANE',
  fall: 'FALL',
  feeds_close: 'FEEDS_CLOSE',
  fold: 'FOLD',
  group: 'GROUP',
  hook: 'HOOK',
  fire: 'FIRE',
  landscape: 'LANDSCAPE',
  module_loading: 'MODULE_LOADING',
  more_blue: 'MORE_BLUE',
  more_gray: 'MORE_GRAY',
  more: 'MORE',
  pdf: 'PDF',
  pin: 'PIN',
  plane: 'PLANE',
  popupunfold: 'POPUPUNFOLD',
  quotation_waiting: 'QUOTATION_WAITING',
  radio_jump: 'RADIO_JUMP',
  rightshift: 'RIGHTSHIFT',
  rise: 'RISE',
  safety: 'SAFETY',
  sell_disabled: 'SELL_DISABLED',
  sell: 'SELL',
  share: 'SHARE',
  trade_detail: 'TRADE_DETAIL',
  trade_dingtou_disabled: 'TRADE_DINGTOU_DISABLED',
  trade_dingtou: 'TRADE_DINGTOU',
  trade_hide: 'TRADE_HIDE',
  trade_tradingrecord: 'TRADE_TRADINGRECORD',
  trade_visible: 'TRADE_VISIBLE',
  unfold: 'UNFOLD',
  whiteHook: 'WHITE_HOOK',
};