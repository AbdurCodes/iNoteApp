import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const currentNotes = [
        {
          "_id": "653f4179eb54eb257d617800",
          "title": "my first note",
          "description": "This is my first note and i am very happy",
          "tag": "general",
          "date": "2023-10-30T05:39:05.693Z",
          "__v": 0
        },
        {
          "_id": "653f41a3e3b98b5d65ad1edf",
          "title": "my sec note",
          "description": "This is my sec note and i am very happy",
          "tag": "general",
          "date": "2023-10-30T05:39:47.781Z",
          "__v": 0
        },
        {
          "_id": "653f41e5e3b98b5d65ad1ee1",
          "title": "my3",
          "description": "This is my sec note and i am very happy",
          "tag": "general",
          "date": "2023-10-30T05:40:53.830Z",
          "__v": 0
        },
        {
          "_id": "653f4b19baf0275cbff69e0a",
          "title": "my 4th note",
          "description": "This is my 4th note and i am very happy",
          "tag": "general",
          "date": "2023-10-30T06:20:09.034Z",
          "__v": 0
        },
        {
          "_id": "653f50e3ece134578cf1f518",
          "title": "my 5th note",
          "description": "This is my 5th note and i am very happy",
          "tag": "general",
          "date": "2023-10-30T06:44:51.251Z",
          "__v": 0
        },
        {
          "_id": "653f522f62400ab2295eb869",
          "user": "653e2309af58fd3a21879df1",
          "title": "my 6th note",
          "description": "This is my 6th note and i am very happy",
          "tag": "general",
          "date": "2023-10-30T06:50:23.020Z",
          "__v": 0
        },
        {
          "_id": "653f533962400ab2295eb86c",
          "user": "653e2309af58fd3a21879df1",
          "title": "test note",
          "description": "This is a test note",
          "tag": "general",
          "date": "2023-10-30T06:54:49.601Z",
          "__v": 0
        },
        {
          "_id": "653f536ece808853dbe9748f",
          "title": "anotehr test note",
          "description": "This is anotehr test note",
          "tag": "general",
          "date": "2023-10-30T06:55:42.739Z",
          "__v": 0
        },
        {
          "_id": "653f5400921bb4e2fb0d12fc",
          "user": "653e2309af58fd3a21879df1",
          "title": "final test note",
          "description": "This is final test note",
          "tag": "general",
          "date": "2023-10-30T06:58:08.156Z",
          "__v": 0
        },
        {
          "_id": "653f54b3872051c514b91a6d",
          "user": "653e2309af58fd3a21879df1",
          "title": "really final test note",
          "description": "This is really final test note",
          "tag": "general",
          "date": "2023-10-30T07:01:07.330Z",
          "__v": 0
        },
        {
          "_id": "653f55eb33bb1b5bed5cd2f4",
          "user": "653e2309af58fd3a21879df1",
          "title": "ffffffffffff really final test note",
          "description": "fffffffffff This is really final test note",
          "tag": "general",
          "date": "2023-10-30T07:06:19.703Z",
          "__v": 0
        }
    ]

    const [notes, setNotes] = useState(currentNotes)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}





// const NoteState = (props) => {
//     const s1 = {
//         page: "About",
//         app: "iNoteBook",
//     }

//     const [state, setState] = useState(s1);
//     const update = () => {
//         setTimeout(() => {
//             setState({
//                 page: ">About<",
//                 app: ">iNoteBook<",
//             });
//         }, 3000);
//     }

//     return (
//         <NoteContext.Provider value={{state, update}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

export default NoteState;