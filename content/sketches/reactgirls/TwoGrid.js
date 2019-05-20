import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../../src/utils/breakpoints'

const TwoGrid = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { gridTemplateColumns: '1fr 1fr' },
        gridTemplateColumns: '1fr',
        display: 'grid',
        gridGap: '20px',
      })}>
      {props.children}
    </div>
  )
}

export default TwoGrid
