import React, { useEffect, useState } from 'react';
//import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../../scss/System/UserManage.scss';
import '../../scss/cutom.scss';
import * as actions from "../../store/actions"
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Modal } from 'antd';

// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser


// Finish!



const TableUser = (props) => {

    const { confirm } = Modal;

    const showDeleteConfirm = (item) => {
        confirm({

            icon: <ExclamationCircleFilled />,
            content: 'Xóa người dùng!',
            okText: 'Đồng Ý',
            okType: 'danger',
            cancelText: 'Không',
            onOk() {
                props.deleteUser(item)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    

    const getDataUser = async () => {

        await props.getAllUser()




    }


    useEffect(() => {

        getDataUser();


    }, [])
    useEffect(() => {



        getDataUser()



    }, [props.dataUser !== props.dataUser])

    const handleDeleteUser = (item) => {

        showDeleteConfirm(item);


    }

    const handleEditUser = (user) => {
        props.getInforUserEdit(user)

    }


    return (
        <div className='users.container '>


            <div className='users-table mt-3 mx-3'>


                <table id="customers">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.dataUser ? props.dataUser.map(item => (
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.address}</td>
                                <td>{item.phonenumber}</td>
                                <td>{item.email}</td>
                                <td className='display-flex-start'>
                                    <button
                                        className='btn btn-primary btn-edit-size mgl-10'
                                        onClick={() => handleEditUser(item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-delete-size mgl-10"
                                        onClick={() => handleDeleteUser(item)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        )) : ''}
                    </tbody>


                </table>

               
            </div>

        </div>

    );


}

const mapStateToProps = state => {

    return {
        dataUser: state.admin.dataUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUser: () => dispatch(actions.fetchAllUserStart()),
        deleteUser: (item) => dispatch(actions.deleteUserRedux(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUser);
