import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';


const Layout =  () => {
        return (
            <div classname='App'>
                <Sidebar />
                <div className='page'>
                    <span className='tags top-tags'>&lt;body&gt;</span>
                    <Outlet />
                    <span className='tags bottom-tags'>&lt;/body&gt;</span>
                    <span className='tags bottom-tag-html'>&lt;/html&gt;</span>

                </div>
            </div>
        )
}


export default Layout