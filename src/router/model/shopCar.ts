import { lazy } from 'react';
const home = [
  {
    title: '购物车',
    path: '/v/shopcar',
    component: lazy(() => import('../../view/model/shopCar')),
  },
];
export default home;
