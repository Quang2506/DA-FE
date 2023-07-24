import React from 'react';
import { connect } from 'react-redux';

import * as actions from "../../../store/actions";
import Navigator from '../../../components/Navigator';
import { adminMenu,doctorMenu } from './menuApp';
import './Header.scss';
import { checkAuth } from '../../../utils';
const Header = (props) => {

 
    const { processLogout, userInfo } = props;


    return (
        <div className="header-container">
            {/* thanh navigator */}
            <div className="header-tabs-container">
                {userInfo&&userInfo.roleId===checkAuth.ADMIN?(<Navigator menus={adminMenu} />):''}
                {userInfo&&userInfo.roleId===checkAuth.DOCTOR?(<Navigator menus={doctorMenu} />):''}
                
            </div>
          
            {userInfo.email !== null && userInfo.email !== "" ? <div className="i4-UserLogin"><span>Xin Chào:  </span><span>{userInfo.email}</span></div>:''  }
            {/* nút logout */}

            <div className="btn btn-logout" onClick={processLogout}>
                <i className="fas fa-sign-out-alt"></i>
            </div>
        </div>
    );


}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
