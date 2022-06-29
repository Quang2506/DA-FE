import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import '../../scss/CustomForm.scss'
import * as actions from "../../store/actions"



const UserRedux = (props) =>{
console.log('props',props)


       useEffect(()=>{
        //props.dispatch(actions.fetchGenderStart())
        props.getGenderStart()
        })

    return(
        <div class="container">
        <div class="container-content">
            <div class="row">
                <form action="/post-crud" method="POST">
                    <div class="form-row align-center">
                        <div class="form-title col-12 mt-3">
                            <h3>Create new user</h3>
                        </div>
                        <div class="display-flex-form ">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control"
                                name="email" placeholder="Email"/>
                        </div>
                        <div class="display-flex-form ">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control"
                                name="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="form-row align-center">
                        <div class="display-flex-form ">
                            <label>First name</label>
                            <input type="text" class="form-control"
                                name="firstName" placeholder="First name"/>
                        </div>
                        <div class="display-flex-form ">
                            <label>Last name</label>
                            <input type="text" class="form-control"
                                name="lastName" placeholder="Last name"/>
                        </div>
                    </div>
                    <div class="display-flex-form">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" name="address"
                            placeholder="1234 Main St"/>
                    </div>

                    <div class="form-row">
                        <div class="display-flex-form ">
                            <label for="inputCity">Phone number</label>
                            <input type="text" class="form-control"
                                name="phonenumber"/>
                        </div>

                        <div class="display-flex-form">
                            <label for="inputCity">Avatar</label>
                            <input type="text" class="form-control"
                                name="avata"/>
                        </div>
                        
                        <div className="display-flex-form col-md-10 margin-left-30">
                        <div class=" col-md-3">
                            <label for="inputState">Sex</label>
                            <select name="gender" class="form-control">
                                <option value="1">Male</option>
                                <option value="0">Female</option>

                            </select>
                        </div>
                        <div class=" col-md-3">
                            <label for="inputZip">Role</label>
                            <select name="roleId" class="form-control">
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>

                            </select>
                        </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>


        </div>


    </div>
    )
}
const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart:()=>dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);