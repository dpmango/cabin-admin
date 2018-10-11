import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Companies from 'pages/Companies';
import Company from 'pages/Company';

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
    isProtected: true,
    path: '/company/:id',
    name: "Company",
    component: Company
  },
  {
    path: '',
    component: NotFound
  },
];
