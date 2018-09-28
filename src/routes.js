import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Companies from 'pages/Companies';

export const routes = [
  {
    isExact: true,
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    isProtected: true,
    path: '/companies',
    name: "Companies",
    component: Companies
  },
  {
    path: '',
    component: NotFound
  },
];
