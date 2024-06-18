import React, { Component, useState } from 'react';
import { Tabs, View, Text } from 'align-ui';

function Demo() {
  const [tabs, setTabs] = useState([
    'tab1',
    'tab2',
    'tab3',
    'tab4',
    'tab5',
    'tab6',
    'tab7',
    'tab8',
    'tab9',
    'tab10',
    'tab11',
    'tab12',
    'tab13',
    'tab14',
    'tab15',
    'tab16',
    'tab17',
    'tab18',
    'tab19',
    'tab20',
  ]);
  return (
    <Tabs title={tabs}>
      {tabs.map((item, index) => {
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              {item}
            </Text>
          </View>
        );
      })}
    </Tabs>
  );
}
export default Demo;