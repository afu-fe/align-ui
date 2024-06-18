/*
 * @Author: cuiwujie 
 * @Date: 2024-04-02 17:55:43
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-04-07 11:09:45
 * @FilePath: /align-ui-doc/src/portal/portal-consumer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import type React from 'react'
import { Component } from 'react'

import type { PortalMethods } from './portal-host'

export type PortalConsumerProps = {
  manager: PortalMethods
  children: React.ReactNode
}

export default class PortalConsumer extends Component<PortalConsumerProps> {
  key: any

  componentDidMount() {
    this.checkManager()

    // // Delay updating to prevent React from going to infinite loop
    // await Promise.resolve()

    this.key = this.props.manager.mount(this.props.children)
  }

  componentDidUpdate() {
    this.checkManager()

    this.props.manager.update(this.key, this.props.children)
  }

  componentWillUnmount() {
    this.checkManager()

    this.props.manager.unmount(this.key)
  }

  render() {
    return null
  }

  private checkManager() {
    if (!this.props.manager) {
      throw new Error(
        'Looks like you forgot to wrap your root component with `Provider` component from `align-ui`.\n\n' +
          "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
          'https://git.corpautohome.com/afu/infra/align-ui/component/basic/portal',
      )
    }
  }
}
