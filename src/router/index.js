import * as VueRouter from "vue-router";
import Preview from "../views/preview.vue"
import Editview from "../views/Editview.vue"

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes:[
        {
            path:"/",
            name:"Preview",
            component:Preview,
        },
        {
            path:"/Editview",
            name:"Editview",
            component:Editview,
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/'
        }
    ]
})