/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from 'react'
import { FootWrapper } from './style'
import { footerImages, footerLinks } from '../../services/local-data'
const Footer = memo(() => {
  return (
    <FootWrapper>
      <div className='foot'>
        <div className='foot-content'>
          <div className='foot-content-top'>
            {footerImages.map((item) => { 
              return (
                <div className='top-content' key={item.link}>
                  <a href={item.link}/>
                  <span>{item.title}</span>
                </div>
              )
            })}
          </div>
          <div className='foot-content-bottom'>
            <div className='bottom-links'>
              {footerLinks.map((item) => {
                return (
                  <a href={item.link} key={item.link}>{item.title}</a>
                )
              })}
            </div>
            <div className='report'>
              <a href="https://jubao.163.com/">廉政举报</a>
              <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
              <span>客服热线：95163298</span>
            </div>
            <div className='license'>
              <span>互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198</span>
              <a href="https://beian.miit.gov.cn/">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
            </div>
            <div className='copy'>
              <span>网易公司版权所有©1997-2024</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a href="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/32300744195/95ef/ee4a/a6ec/c561df43b2bdbf560e3517cd6f529150.png">浙网文[2021] 1186-054号</a>
              <span />
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">浙公网安备 33010802013307号</a>
            </div>
          </div>
        </div>
      </div>

    </FootWrapper>
  )
})

export default Footer