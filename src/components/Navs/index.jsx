import React from 'react'
import cs from 'classnames'
import './styles.less'

export default class Navs extends React.PureComponent {
  render () {
    const { data, className } = this.props
    
    return (
      <div className={cs('common-navs', {[className]: className})}>
        {
          data.map((nav, key) => (
            <div className="nav" key={key}>
              <img src={`http:${nav.image}`} />
              <h3>{nav.title}</h3>
            </div>
          ))
        }
      </div>
    )
  } 
}