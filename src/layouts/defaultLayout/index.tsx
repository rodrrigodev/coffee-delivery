import { Outlet } from 'react-router-dom'
import { Home } from "../../pages/Home";

export function DefaultLayout(){
    return(
        <div>
            <Home/>
            <Outlet/>
        </div>
    )
}