const users = (state = {users: []}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      //console.log(state.users)
      return {
        ...state,
        users: [...state.users, action.user],
      }
    case 'DELETE_USER':
      //добавлять к объекту юзера айди
      console.log(state.users)
      return {
        ...state, 
        users: state.users.filter((user, i) =>
        
        {
          console.log(typeof(action.id));
          console.log(typeof(i));
          console.log(action.id,i);
          //как избежать ту стринг??
          return (action.id !== i.toString())}
        //(id !== state.users[i].id)
      )}
    default:
      return state
  }
}

export default users
