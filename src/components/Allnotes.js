import React, { useEffect, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Allnotes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line no-unused-vars
  const { notes, setNotes } = context;

  // useEffect(() => {
  // 	context.update();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      <div className="container">
        <h2 className="text-center my-4">
          &gt;&gt;&gt; All my notes &lt;&lt;&lt;
        </h2>
        <div className="row">
        {notes.map((note) => {
          return (<div className="col-md-4 my-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{note.title}</h5>
                <p class="card-text">
                  {note.description}
                </p>
                <div className="d-flex justify-content-evenly">
                <a href="#" onClick={()=>context.updateNote(note._id)} class="btn btn-success">Update</a>
                <a href="#" onClick={()=>context.deleteNote(note._id)} class="btn btn-danger">Delete</a>
                </div>
              </div>
            </div>
          </div>)
            })}
        </div>
      </div>
    </div>
  );
};

export default Allnotes;
