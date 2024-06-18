import React from 'react';
import { ExpandTxt, View } from 'align-ui';

function Demo() {
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>ExpandTxt 折叠文字</View>
      <View>默认更多是5行</View>
      <ExpandTxt content="《琵琶行》是唐代诗人白居易创作的长篇叙事诗。此诗通过对琵琶女高超弹奏技艺和她不幸经历的描述，揭露了封建社会官僚腐败、民生凋敝、人才埋没等不合理现象，表达了诗人对她的深切同情，也抒发了诗人对自己无辜被贬的愤懑之情。全诗叙事与抒情紧密结合，塑造出完整鲜明的人物形象；语言流转匀称，优美和谐，特别是描绘琵琶的演奏，比喻贴切，化虚为实，呈现出鲜明的音乐形象" />
      <View containerClass={'mt-10'}>展开在右侧</View>
      <ExpandTxt
        content="《琵琶行》是唐代诗人白居易创作的长篇叙事诗。此诗通过对琵琶女高超弹奏技艺和她不幸经历的描述，揭露了封建社会官僚腐败、民生凋敝、人才埋没等不合理现象，表达了诗人对她的深切同情，也抒发了诗人对自己无辜被贬的愤懑之情。全诗叙事与抒情紧密结合，塑造出完整鲜明的人物形象；语言流转匀称，优美和谐，特别是描绘琵琶的演奏，比喻贴切，化虚为实，呈现出鲜明的音乐形象"
        numberOfLines={1}
        expandLabel={'查看详情'}
        foldLabel={''}
      />
      <View containerClass={'mt-10'}>展开在下边</View>
      <ExpandTxt
        content="《琵琶行》是唐代诗人白居易创作的长篇叙事诗。此诗通过对琵琶女高超弹奏技艺和她不幸经历的描述，揭露了封建社会官僚腐败、民生凋敝、人才埋没等不合理现象，表达了诗人对她的深切同情，也抒发了诗人对自己无辜被贬的愤懑之情。全诗叙事与抒情紧密结合，塑造出完整鲜明的人物形象；语言流转匀称，优美和谐，特别是描绘琵琶的演奏，比喻贴切，化虚为实，呈现出鲜明的音乐形象"
        numberOfLines={1}
        expandLabel={'查看详情'}
        expandPosition={'bottom'}
        foldLabel={''}
      />
    </>
  );
}
export default Demo;