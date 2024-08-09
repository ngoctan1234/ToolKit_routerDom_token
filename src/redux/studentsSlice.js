// import {createSlice} from "@reduxjs/toolkit"

// const initialState={
//     students:[
//         {
//             id:1,
//             name:"Lê Văn Mèo",
//             checked:true
//         },
//         {
//             id:2,
//             name:"Lê Văn Nai",
//             checked:true
//         },
//         {
//             id:3,
//             name:"Lê Thỏ",
//             checked:false
//         },
//         {
//             id:4,
//             name:"Lê Gà",
//             checked:false
//         }
//     ],
//     checkAll:false
// }

// const studentsSlice=createSlice({
//     name:"students",
//     initialState,
//     reducers:{
//         addStudent(state,action){
//             const newId = 5;
//             //state.students.length>0 ? Math.max(state.students.map(student => student.id).filter(id => typeof id === 'number')) + 1 : 1;
//             state.students=[...state.students,{id:newId,name:action.payload,checked:false}]
//         },
//         deleteStudent(state,action){
//             state.students=state.students.filter(item=>item.id!==action.payload)
//         },
//         toggleStudent(state,action){
//             state.students=state.students.map(item=>item.id===action.payload?{...item,checked:!item.checked}:item)
//         },
//         reCheckAll(state){
//             state.checkAll=!state.checkAll
//             if(state.checkAll){
//                 state.students=state.students.map(item=>({...item,checked:true}))
//             }
//         }
//     }
// })
// export const {addStudent,deleteStudent,toggleStudent,reCheckAll} = studentsSlice.actions
// export default studentsSlice.reducer