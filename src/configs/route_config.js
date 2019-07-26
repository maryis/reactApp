import MasterPage1 from '../containers/layout1/MasterPage';
import MasterPage2 from '../containers/layout2/MasterPage';
import {Home} from "../pages/Home";
import Slider from "../pages/Slider";
import Report from "../pages/Report";
import UpdateReport from "../pages/UpdateReport";
import Login from "../pages/Login";

export const router_config=[
    {
        path: '/',
        exact: true,
        Component : Home,
        Master: MasterPage1,
        title: 'HomePage',
        splitter: ' | '

    },
    {
        path: '/report',
        exact: true,
        Component : Report,
        Master: MasterPage1,
        title: 'Report',
        splitter: ' | '

    },
    {
        path: '/update',
        exact: true,
        Component : UpdateReport,
        Master: MasterPage1,
        title: 'Update',
        splitter: ' | '


    },
    {
        path: '/slider',
        exact: true,
        Component : Slider,
        Master: MasterPage2,
        title: 'Slider',
        splitter: ' | '


    },
    {
        path: '/login',
        exact: true,
        Component : Login,
        title: 'Logout'

    }
]