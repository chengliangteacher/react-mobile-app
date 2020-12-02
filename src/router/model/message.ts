import { lazy } from 'react';
const home = [
  {
    title: '消息',
    path: '/v/message',
    component: lazy(() => import('../../view/model/message')),
  },
];
export default home;
