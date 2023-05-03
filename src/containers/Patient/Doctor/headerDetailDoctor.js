import React from 'react';
import { connect } from 'react-redux';
import '../../../scss/Home/Patient/Doctor/headerDetaillDoctor.scss';
const HeaderDetailDoctor = (props) => {

 
    


    return (
        <div  className="header-container">
         
            <div className="header-tabs-container">
               
            </div>
          
         
            
        </div>
    );


}

const mapStateToProps = state => {
    return {
      
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDetailDoctor);
