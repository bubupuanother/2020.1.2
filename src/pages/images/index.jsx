import React from 'react'
import imagesLoaded from 'imagesloaded'

const arr = [
  'https://www.baidu.com3333/link?url=5v5Usz6yi2Yxtw0s7peMfok3NdV_Ws8dL4J5YFSt6vgWQX6dZ1tnXY2VofcFrLqAc_ePMqmpuQB_GfccVRL0G5fWdQlhU605ObjS2Gup46mfOdQEEXADCxRD-uwVKMbV-5gyDRsWVifAjpS6Rtk-VYmg6ELgsa56i280ibJ6I_LphZf2oO5OWg3FIy5pNik9qhzSAHeVgDcAuiMRzK3S0-2E7yPUfy8RNcTtBmkec7yA7kUBR5AFo9Bqow5MXU3OV5B1ZMHzZoUWW7Gzc9PaAal5nHCXLQcOSfIx0QyBK5B0R_Sq5wTVbsGxBO-ujurQPMg7jknJ6PwrDkPGiTSDqwlQrOKYmTfjJ3UxVvz3Xobrm10Z_rCG6Nn97pCWQZ-lpKiXGWsdYrDdxnEWJX-hZwE1znDa8_s_lO8jWZdqty1Oq-TeXiHT9aqPvKf5UB9ntWQbDszu5HJZq8JOSyoPiGZ2Th3f5pHP1G3zUl89YRBbY_camqx12CBV3kc7VEOdQ6pVQ5frfhJRMmFT3R4Ym_&wd=&eqid=b87ddf8f000e6d49000000025df42c3e',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2458227883,4095122505&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1761250919,1896060533&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852083094,372235004&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2944705163,3932100810&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3104686528,572431609&fm=26&gp=0.jpg',
]

export default class extends React.PureComponent {
  componentDidMount () {
    const elLoad = imagesLoaded('.pages-images')
    elLoad.on( 'always', () => {
      // 图片加载后执行的方法
      console.log('图片加载完成')
    } )
    elLoad.on( 'done', () => {
      // 图片加载后执行的方法
      console.log('图片加载成功')
    } )
    elLoad.on( 'fail', option => {
      // 图片加载后执行的方法
      console.log('图片加载失败', option)
    } )
  }

  render () {
    return (
      <div className="pages-images">
        {
          arr.map((value, key) => {
            return <img src={value} key={key} />
          })
        }
      </div>
    )
  }
}