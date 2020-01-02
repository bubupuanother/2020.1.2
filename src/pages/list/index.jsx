import React from 'react'
import _ from 'loadsh'
import { connect } from 'react-redux'
import { TextList } from '@@'
import { getMenu, getMenuDetail } from '@/actions/textList'
import './styles.less'

export default @connect(state => ({
  menuData: state.menuList.menuData,
}), {
  getMenu, // 分类导航列表
  getMenuDetail, // 分类详情列表
})
class extends React.PureComponent {
  constructor (props) {
    super(props)

    props.getMenu()
      .then(res => {
        const cid = props.match.params.cid
        this.getDetail(cid || _.get(res.payload.data, '[0].cid', ''))
      })
  }

  // 获取分类详情数据
  getDetail = cid => {
    this.props.getMenuDetail({
      cid,
    })
  }

  onClick = cid => {
    this.getDetail(cid)
    this.props.history.push(`/textlist/${cid}`)
  }

  render () {
    const { menuData, match } = this.props

    return (
      <div className="pages-list">
        <TextList 
          data={menuData}
          onClick={this.onClick}
          active={match.params.cid || _.get(menuData, '[0].cid', '')}
        />
        <div className=""></div>
      </div>
    )
  }
}