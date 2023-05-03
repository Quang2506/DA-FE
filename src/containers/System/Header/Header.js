import React from 'react';
import { connect } from 'react-redux';

import * as actions from "../../../store/actions";
import Navigator from '../../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
const Header = (props) => {

 
    const { processLogout, userInfo } = props;


    return (
        <div className="header-container">
            {/* thanh navigator */}
            <div className="header-tabs-container">
                <Navigator menus={adminMenu} />
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
