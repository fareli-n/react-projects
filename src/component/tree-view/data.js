 export const menus = 
        [{
            label: "Home",
                to: "/",
        },
        {
                label: "Profile",
                to: "/profile",
                children: [
                    {
                        label: "Detail",
                        to: "details",
                        children : [
                            {label: "Detail 1",
                                to: "pass the link",
                            children :[]
                            },
                            {
                                label: "Detail 2",
                                to: "pass the link",
                                children: []   
                            }
                        ]
                        
                    },
                    {
                        label: "Settings",
                        to: "pass the link",
                        children: [ {label: "setting 1",
                            to: "pass the link",
                        children :[]
                        },
                        {
                            label: "setting 2",
                            to: "pass the link",
                            children: []   
                        }]
                    },
                    {
                        label: "Account",
                        to: "account",
                        children: []
                    }
                ]
        },
        {
                label: "Login",
                to: "login",
                children: [{
                    label: "Password",
                    to: "password",
                    children: []
                }]
        },
        {
                label: "Register",
                to: "register",
                children: []
        }
         ]
export default menus;