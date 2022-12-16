import { createSlice } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'

import { current } from '@reduxjs/toolkit'


const colors = ["warning", "success", "info", "danger", "primary"]

const initialState = {


  groups: [
    // { users: [{ name: "John", group_id: "b", id: "1243" }, { name: "Mark", group_id: "b", id: "124124" }], name: "Group 2", color: "success", id: "b" },
    // { users: [{ name: "Ahsan", group_id: "c", id: "325325" }, { name: "Akash", group_id: "c", id: "325" }, { name: "Akash", group_id: "c", id: "323" }, { name: "Akash", group_id: "c", id: "322" }], name: "Group 3", color: "info", id: "c" }

  ],


  users: [

    // { name: "Mehdi", group_id: "a", id: "91283" },
    // { name: "Raza", group_id: "a", id: "123" },
    // { name: "John", group_id: "b", id: "1243" },
    // { name: "Mark", group_id: "b", id: "124124" },
    // { name: "Ahsan", group_id: "c", id: "325325" },
    // { name: "Akash", group_id: "c", id: "325" },
    // { name: "Akash", group_id: "c", id: "323" },
    // { name: "Akash", group_id: "c", id: "322" },

  ],


  ungrouped_users: [


  ]


}





export const counterSlice = createSlice({



  name: 'counter',

  initialState,


  reducers: {



    remove_user_from_group: (state, action) => {



      const remaining_members = action.payload.r.users.filter(v => v.id != action.payload.v.id)
      state.groups[action.payload.k].users = remaining_members


      // const deleted_user = state.users.filter(v => v.name == action.payload.v.name)



      const deleted_user = state.users?.filter(v => v.id == action.payload.v.id)

      deleted_user[0].group_id = null


      state.ungrouped_users = [...state.ungrouped_users, deleted_user[0]]

    },




    add_user: (state, action) => {

      const new_user = { name: action.payload.name, group_id: action.payload.group_id, id: Math.floor((1 + Math.random()) * 0x12344) }
      state.users = [...state.users, new_user]

      state.groups.map(v => v.id == action.payload.group_id ? v.users = [...v.users, new_user] : null)


    },





    add_group: (state, action) => {

      state.groups = [...state.groups, { name: action.payload.name, id: Math.floor((1 + Math.random()) * 0x12344), users: action.payload.users, color: colors[Math.floor((0 + Math.random()) * 0x5)] }]

      state.ungrouped_users = state.ungrouped_users.filter(ar => !action.payload.users.find(rm => (rm.id === ar.id && ar.name === rm.name)))

    }




  },


})







export const { remove_user_from_group, add_user, add_group } = counterSlice.actions

export default counterSlice.reducer