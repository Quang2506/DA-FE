
import React from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const HomePage1 = (props)=> {

    
      

        return (
           <>
               <h1>qưeeeeeee</h1>
                
          </>
        );
 

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage1);
