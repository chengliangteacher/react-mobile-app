import { lazy } from 'react';
const home = [
  {
    title: '我的',
    path: '/v/mine',
    component: lazy(() => import('../../view/model/mine')),
  },
];
export default home;
