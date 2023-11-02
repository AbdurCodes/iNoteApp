import React from "react";

const Addnote = () => {
  return (
    <div>
      <h2 className="container my-3 text-center">&gt;&gt;&gt; Add a note &lt;&lt;&lt;</h2>
      <form className="container my-3">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Type your note here
          </label>
          <textarea
            type="email"
            style={{height: '220px'}}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
 
        </div>

        <button type="submit" className="btn btn-primary">
          Save note
        </button>
      </form>
    </div>
  );
};

export default Addnote;