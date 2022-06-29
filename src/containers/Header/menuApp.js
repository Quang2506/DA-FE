export const adminMenu = [
    { 
        //Quản lý người dùng
        name: 'menu.admin.manage-user',
         menus: [

            {
               name: 'menu.admin.manage-doctor',link:'/system/user-manage'
               
            },
            {
                name:'menu.admin.manage-admin',link:'#'
            },
            {
                name:'menu.admin.crud',link:'/system/user-manage'
            },
            {
                name:'menu.admin.crud-redux',link:'/system/user-redux'
            }
        ]
    },
    { 
        //Quản lý  phòng khám
        name: 'menu.admin.clinic',
         menus: [

            {
               name: 'menu.admin.manage-clinic',link:'/system/clinic'
               
            },
           
        ]
    },
    { 
        //Quản lý  chuyên khoa
        name: 'menu.admin.specialty',
         menus: [

            {
               name: 'menu.admin.manage-specialty',link:'/system/specialty'
               
            },
           
        ]
    },
    { 
        //Quản lý  cẩm nang
        name: 'menu.admin.handBook',
         menus: [

            {
               name: 'menu.admin.manage-handBook',link:'/system/handBook'
               
            },
           
        ]
    },
];