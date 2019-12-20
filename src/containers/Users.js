import { connect } from 'react-redux'
import { addUserA, deleteUserA } from './usersActions'
import App from '../App'

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUserA(user)),
  deleteUser: id => dispatch(deleteUserA(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
