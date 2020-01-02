import React from 'react'
import cs from 'classnames'
import './styles.less'

export default class TextList extends React.Component {
  state = {
    active: true,
  }
  
  render () {
    const { data, onClick = () => {}, active = [] } = this.props

    return (
      <div className="common-text-list">
        {
          data.map((menu, key) => {
            return (
              <div
                className={cs('nav', {active: active === menu.cid})}
                key={key}
                onClick={() => onClick(menu.cid)}
              >
                {menu.title}
              </div>
            )
          })
        }
      </div>
    )
  }
}
