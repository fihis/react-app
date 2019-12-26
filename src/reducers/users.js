const users = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.user],
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => (action.id !== user.id))
      }
    case 'SET_ACTIVE_USER':
      return {
        ...state,
        activeUser: action.user
      };
    default:
      return state
  }
}

// export const fillPersonalInfoReducer = handleActions<FillPersonalInfoStateProps, any>(
//   {
//     [ACTIONS.TOGGLE_FILL_PERSONAL_INFORMATION_MODAL]: (state: FillPersonalInfoStateProps) => ({
//       ...state,
//       isShowFillPersonalInformation: !state.isShowFillPersonalInformation
//     }),
//     [ACTIONS.SET_PERSONAL_INFORMATION]: (state: FillPersonalInfoStateProps,
//       { payload }: Action<PersonalInformation>) => ({
//         ...state,
//         personalInformation: payload
//       }),
//     [ACTIONS.SET_ACTIVE_SUBMIT]: (state: FillPersonalInfoStateProps, { payload }: Action<boolean>) => ({
//       ...state,
//       isDisableSubmit: payload
//     })
//   },
//   fillPersonalInfoState
// );


export default users
