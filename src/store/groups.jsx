import { createSlice } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'



const colors = ["success", "danger", "primary", "info", "warning"]
let i = 0

const initialState = {


  groups: [
    { users: [{ name: "John", group_id: "b", id: "1243" }, { name: "Mark", group_id: "b", id: "124124" }], name: "Football", color: "warning", id: "b" },
    // { users: [{ name: "Ahsan", group_id: "c", id: "325325" }, { name: "Akash", group_id: "c", id: "325" }, { name: "Imran", group_id: "c", id: "323" }, { name: "Faizan", group_id: "c", id: "322" }], name: "Cricket", color: "info", id: "c" }

  ],


  users: [

    // { name: "Mehdi", group_id: "a", id: "91283" },
    // { name: "Raza", group_id: "a", id: "123" },
    { name: "John", group_id: "b", id: "1243" },
    { name: "Mark", group_id: "b", id: "124124" },
    // { name: "Ahsan", group_id: "c", id: "325325" },
    // { name: "Akash", group_id: "c", id: "325" },
    // { name: "Imran", group_id: "c", id: "323" },
    // { name: "Faizan", group_id: "c", id: "322" },


  ],


  // ungrouped_users: [


  // ]


}





export const counterSlice = createSlice({



  name: 'groups',

  initialState,


  reducers: {


    remove_user_from_group: (state, action) => {


      // We are removing the user from his group

      const remaining_members = action.payload.r.users.filter(v => v.id != action.payload.v.id)
      state.groups[action.payload.k].users = remaining_members




      // We are making the  deleted user's id == null
      const deleted_user = state.users?.filter(v => v.id == action.payload.v.id)
      deleted_user[0].group_id = null



    },




    add_user: (state, action) => {

      // We are adding a new User in user list
      const new_user = { name: action.payload.name, group_id: action.payload.group_id, id: Math.floor((1 + Math.random()) * 0x12344) }
      state.users = [...state.users, new_user]


      // We are adding the user in his group's user list
      state.groups.map(v => v.id == action.payload.group_id ? v.users = [...v.users, new_user] : null)


    },





    add_group: (state, action) => {


      // We are creating a group

      state.groups = [...state.groups, { name: action.payload.name, id: action.payload.id, users: action.payload.users, color: colors[i] }]

      // state.ungrouped_users = state.ungrouped_users.filter(ar => !action.payload.users.find(rm => (rm.id === ar.id && ar.name === rm.name)))


      // We are assigning group id to all users

      state.users.map(ar => !action.payload.users.map(rm => (rm.id === ar.id ? ar.group_id = rm.group_id : null)))


      // Here we are updating i so that colors array index gets updated and we get a new color everytime

      i = i + 1



    }




  },


})







export const { remove_user_from_group, add_user, add_group } = counterSlice.actions

export default counterSlice.reducer