import React from 'react';
import { FaSackDollar } from 'react-icons/fa6';
import { HiCurrencyDollar } from 'react-icons/hi2';
// Icon Imports
import {
  MdFastfood,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPerson,
  MdStackedBarChart,
} from 'react-icons/md';
import { PiListHeartBold } from 'react-icons/pi';
// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
// Auth Imports
import SignIn from 'views/auth/SignIn';

import { ShoppingList } from './views/admin/shopping-list/index';
import { Statistics } from './views/admin/statistics/index';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: 'Shopping list',
    layout: '/admin',
    path: 'shopping-list',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <ShoppingList />,
    secondary: true,
  },

  {
    name: 'Monthly payments',
    layout: '/admin',
    path: 'payments',
    icon: <HiCurrencyDollar className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Statistics',
    layout: '/admin',
    path: 'statistics',
    icon: <MdStackedBarChart className="h-6 w-6" />,
    component: <Statistics />,
    secondary: true,
  },
  {
    name: 'Meal prep',
    layout: '/admin',
    path: 'meal-prep',
    icon: <MdFastfood className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Future expanses',
    layout: '/admin',
    path: 'future-expanses',
    icon: <FaSackDollar className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Wish list',
    layout: '/admin',
    path: 'wish-list',
    icon: <PiListHeartBold className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
