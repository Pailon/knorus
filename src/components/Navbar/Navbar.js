import React from 'react'
const NavBar = props =>{
    return(
        <div className={'header'}>
            <div className={'menu'}>
                <div className="icon"><img src={require('../../img/icon_1.png')} alt={'1'}/></div>
                <div className="icon"><img src={require('../../img/icon_2.png')} alt={'2'}/></div>
                <div className="icon"><img src={require('../../img/icon_3.png')} alt={'3'}/></div>
                <div className="icon"><img src={require('../../img/icon_4.png')} alt={'4'}/></div>
                <div className="icon"><img src={require('../../img/icon_5.png')} alt={'5'}/></div>
                <div className="logo"><img src={require('../../img/main_logo.png')} alt={'logo'}/></div>
                <span className={'nav_text'}>Политология (для вузов силовых ведомств).<br/> Учебник</span>
                <div className="icon"><img src={require('../../img/icon_6.png')} alt={'6'}/></div>
                <div className="icon"><img src={require('../../img/icon_7.png')} alt={'6'}/></div>
            </div>
        </div>
    )
}

export default NavBar