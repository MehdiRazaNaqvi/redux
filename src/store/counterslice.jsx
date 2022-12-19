import { createSlice } from '@reduxjs/toolkit'

import { current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import getStoredState from 'redux-persist/es/getStoredState'

const colors = ["success", "danger", "primary", "info", "warning"]
let i = 0

const initialState = {


  groups: [
    // { users: [{ name: "John", group_id: "b", id: "1243" }, { name: "Mark", group_id: "b", id: "124124" }], name: "Football", color: "warning", id: "b" },
    // { users: [{ name: "Ahsan", group_id: "c", id: "325325" }, { name: "Akash", group_id: "c", id: "325" }, { name: "Imran", group_id: "c", id: "323" }, { name: "Faizan", group_id: "c", id: "322" }], name: "Cricket", color: "info", id: "c" }

  ],


  users: [

    // { name: "Mehdi", group_id: "a", id: "91283" },
    // { name: "Raza", group_id: "a", id: "123" },
    // { name: "John", group_id: "b", id: "1243" },
    // { name: "Mark", group_id: "b", id: "124124" },
    // { name: "Ahsan", group_id: "c", id: "325325" },
    // { name: "Akash", group_id: "c", id: "325" },
    // { name: "Imran", group_id: "c", id: "323" },
    // { name: "Faizan", group_id: "c", id: "322" },


  ],




}





export const counterSlice = createSlice({



  name: 'counter',

  initialState,


  reducers: {


    remove_user_from_group: (state, action) => {


      // We are removing the user from his group

      const remaining_members = action.payload.r.users.filter(v => v.id != action.payload.v.id)
      state.groups[action.payload.k].users = remaining_members



      // We are making the  deleted user's group_id == null
      let deleted_user = state.users?.filter(v => v.id == action.payload.v.id)[0]
      deleted_user = { name: deleted_user.name, group_id : null, id: deleted_user.id }

      
      state.users = state.users.filter(v => v.id != deleted_user.id)

      state.users = [...state.users , deleted_user]
      


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



      // We are assigning group id to all users

      state.users.map(ar => !action.payload.users.map(rm => (rm.id === ar.id ? ar.group_id = rm.group_id : null)))


      // Here we are updating i so that colors array index gets updated and we get a new color everytime

      i = i + 1



    },



    // IN THIS FUNCTION WE ARE ASSIGNING RANDOM USER TO RANDOM GROUP
    assign_group: (state, action) => {

      const user = state.users.filter(r => r.group_id == null || r.group_id == undefined)[Math.floor(Math.random() * Object.keys(state.users.filter(v => v.group_id == null || v.group_id == undefined)).length)]
      const group = state.groups[parseInt(Object.keys(state.groups)[Math.floor(Math.random() * Object.keys(state.groups).length)])]



      if (user && group) {
        user.group_id = group.id
        group.users = [...group.users, user]

        toast.success(`${user.name} added to ${group.name}`)
      }
      else if (!user) {
        toast.error("There are no free users")
      }
      else if (!group) {
        toast.error("There are no groups available")
      }

    },



    de_assign_group: (state, action) => {

      const user = state.users.filter(r => r.group_id != null && r.group_id != undefined)[Math.floor(Math.random() * Object.keys(state.users.filter(v => v.group_id != null && v.group_id != undefined)).length)]
      // const group = state.groups[parseInt(Object.keys(state.groups)[Math.floor(Math.random() * Object.keys(state.groups).length)])]



      if (user) {
        const group = state.groups.filter(v => user.group_id == v.id)[0]

        group.users = group.users.filter(v => v.id != user.id)
        user.group_id = null

        toast.success(`${user.name} removed from ${group.name}`)


      }
      else if (!user) {
        toast.error("There are no users in any group")
      }
     

    },




    // DELETING USER FROM USER LIST
    delete_user: (state, action) => {

      state.users = state.users.filter(v => v.id != action.payload.id)

      const user_group = state.groups.filter(v => v.id == action.payload.group_id)[0]

      if (user_group) {
        user_group.users = user_group.users.filter(v => v.id != action.payload.id)
      }






    },



    // DELETING WHOLE GROUP AND MAKING THEIR USERS FREE AGAIN
    delete_group: (state, action) => {

      state.groups = state.groups.filter(v => v.id != action.payload.id)


      state.users.map(ar => !action.payload.users.map(rm => (rm.id === ar.id ? ar.group_id = null : null)))


    },








  },


})







export const { remove_user_from_group, add_user, add_group, assign_group, delete_user, delete_group, de_assign_group } = counterSlice.actions

export default counterSlice.reducer