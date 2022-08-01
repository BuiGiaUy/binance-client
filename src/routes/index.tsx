//Layouts
import HeaderOnly from '../components/Layouts/HeaderOnly';

//Pages
import Home from './../pages/Home';
import Markets from './../pages/Markets';
import Login from './../pages/Login';
import Search from './../pages/Search';
import Register from './../pages/Register';
import Person from '#/pages/Register/Person';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/markets', component: Markets },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
    { path: '/register-person', component: Person, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

export { publicRoutes };
