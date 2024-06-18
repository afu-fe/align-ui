import React, { Component } from 'react';
import { View, Icon } from 'align-ui';

function sigleIcon(type:string) {
  return (
    <View containerClass={'flex-col, item-center, w-1/2,mb-10'}>
      <Icon type={type} size={30} />
      {type}
    </View>
  );
}

function Demo() {
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>Icon 图标</View>
      <View containerClass={'flex-wrap'}>
        {sigleIcon('success')}
        {sigleIcon('success_no_circle')}
        {sigleIcon('info')}
        {sigleIcon('warn')}
        {sigleIcon('waiting')}
        {sigleIcon('cancel')}
        {sigleIcon('download')}
        {sigleIcon('search')}
        {sigleIcon('back')}
        {sigleIcon('delete')}
        {sigleIcon('clear')}
        {sigleIcon('adjust')}
        {sigleIcon('blackRightShift')}
        {sigleIcon('close')}
        {sigleIcon('explain_linear')}
        {sigleIcon('explain_plane')}
        {sigleIcon('fall')}
        {sigleIcon('feeds_close')}
        {sigleIcon('fold')}
        {sigleIcon('group')}
        {sigleIcon('hook')}
        {sigleIcon('fire')}
        {sigleIcon('landscape')}
        {sigleIcon('module_loading')}
        {sigleIcon('more_blue')}
        {sigleIcon('more_gray')}
        {sigleIcon('more')}
        {sigleIcon('pdf')}
        {sigleIcon('pin')}
        {sigleIcon('plane')}
        {sigleIcon('popupunfold')}
        {sigleIcon('quotation_waiting')}
        {sigleIcon('radio_jump')}
        {sigleIcon('rightshift')}
        {sigleIcon('rise')}
        {sigleIcon('safety')}
        {sigleIcon('sell_disabled')}
        {sigleIcon('sell')}
        {sigleIcon('share')}
        {sigleIcon('trade_detail')}
        {sigleIcon('trade_dingtou_disabled')}
        {sigleIcon('trade_dingtou')}
        {sigleIcon('trade_hide')}
        {sigleIcon('trade_tradingrecord')}
        {sigleIcon('trade_visible')}
        {sigleIcon('unfold')}
        {sigleIcon('whiteHook')}
      </View>
    </>
  );
}
export default Demo;