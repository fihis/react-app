const users = (state = {users: []}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.user],
      }
    case 'DELETE_USER':
      return {
        ...state, 
        users: state.users.filter(id =>
        (id !== state.users.id)
      )}
    default:
      return state
  }
}

export default users
