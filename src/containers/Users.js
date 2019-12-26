import { connect } from 'react-redux'
import { addUserA, deleteUserA, getUserA } from './usersActions'
import App from '../App'

const mapStateToProps = state => ({
  users: state.users,
  activeUser: state.users.activeUser
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUserA(user)),
  deleteUser: id => dispatch(deleteUserA(id)),
  getUser: id => dispatch(getUserA(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
