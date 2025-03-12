import React, { useState } from "react";

const AddContact = () => { 
    const [name, setName ] = useState("")

    return(
        <div>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h1 className="text-center mt-5">
            {editingContact ? "Edit contact" : "Add a new contact"}
          </h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                defaultValue={editingContact?.name || ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                defaultValue={editingContact?.email || ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone"
                defaultValue={editingContact?.phone || ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address"
                defaultValue={editingContact?.address || ""}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              save
            </button>
          </form>
          <div className="mt-3">
            <button className="btn btn-link p-0" onClick={handleHideForm}>
              or get back to contacts
            </button>
          </div>
        </div>
        </div>
     )
}
export default AddContact