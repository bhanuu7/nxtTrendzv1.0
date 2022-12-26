import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const VerifiedPath = props => {
  const jwtToken = Cookies.get('jwt-token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Redirect {...props} />
}

export default VerifiedPath
