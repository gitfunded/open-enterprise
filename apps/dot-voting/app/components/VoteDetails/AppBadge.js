import React from 'react'
import PropTypes from 'prop-types'
import { GenerateBadge } from '../../utils/vote-styled-components'
import { GU, IconCheck, textStyle, useTheme } from '@aragon/ui'

const AppBadge = ({ iconSrc, label, youVoted }) => {
  const theme = useTheme()
  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin-bottom: ${2 * GU}px;
      `}
    >
      <GenerateBadge
        iconSrc={iconSrc}
        label={label}
      />
      {youVoted && (
        <div
          css={`
            display: inline-grid;
            grid-template-columns: auto auto;
            grid-gap: ${0.5 * GU}px;
            align-items: center;
            justify-content: center;
            height: 20px;
            width: auto;
            border-radius: 100px;
            padding: 0 ${1 * GU}px;
            background: ${theme.infoSurface.alpha(0.08)};
            color: ${theme.info};
            ${textStyle('label2')};
          `}
        >
          <IconCheck size="tiny" /> Voted
        </div>
      )}
    </div>
  )
}

AppBadge.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  youVoted: PropTypes.bool.isRequired,
}

export default AppBadge
