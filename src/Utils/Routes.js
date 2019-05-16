import LoginContainer from '../Components/Containers/LoginContainer';
import DashboardContainer from '../Components/Containers/DashboardContainer';
export default [
  {
    id: 1,
    component: LoginContainer,
    exact: true,
    path: '/'
  },{
    id: 2,
    component: DashboardContainer,
    exact: true,
    path: '/dashboard'
  },
];
