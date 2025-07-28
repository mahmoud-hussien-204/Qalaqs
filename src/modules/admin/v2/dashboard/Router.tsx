import { RouteObject } from "react-router";


export default [
    {
        path: '',
        lazy: () => import('./pages/MainDashboard')
    }
] as RouteObject[];