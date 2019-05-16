import LoginContainer from '../Components/Containers/LoginContainer'
import DashboardContainer from '../Components/Containers/DashboardContainer'
import withGuardValidate from '../Components/HOC/withGuardValidate'
export default [
  {
    id: 1,
    component: LoginContainer,
    exact: true,
    path: '/'
  },
  {
    id: 2,
    component: withGuardValidate(DashboardContainer),
    exact: true,
    path: '/dashboard'
  }
]
