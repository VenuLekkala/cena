import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./MockDataSource.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";



// Creating styles
const useStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	table: {
		minWidth: 650,
	},
	snackbar: {
		bottom: "104px",
	},
});

const TabFive = () => {
 
   	// Creating style object
    const classes = useStyles();

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fileName: "",
    NoOfContributions: "",
    UploadStatus: "",
  });

  const [editFormData, setEditFormData] = useState({
    fileName: "",
    NoOfContributions: "",
    UploadStatus: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fileName: editFormData.fileName,
      NoOfContributions: editFormData.NoOfContributions,
      UploadStatus: editFormData.UploadStatus,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      // id: editContactId,
      fileName: editFormData.fileName,
      NoOfContributions: editFormData.NoOfContributions,
      UploadStatus: editFormData.UploadStatus,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fileName: editFormData.fileName,
      NoOfContributions: editFormData.NoOfContributions,
      UploadStatus: editFormData.UploadStatus,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleAddFormSubmit}>
      <button onClick={handleAddFormSubmit}><AddBoxIcon onClick={handleAddFormSubmit}/></button>
      
      
        <input
          type="text"
          name="fileName"
          required="required"
          placeholder="Enter a file name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="NoOfContributions"
          required="required"
          placeholder="Enter No. Of Contributions..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="UploadStatus"
          required="required"
          placeholder="Enter upload status..."
          onChange={handleAddFormChange}
        />
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table className={classes.table}
		size="small"
		aria-label="a dense table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>No. Of Contributions</th>
              <th>Upload Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      
    </div>
  );
};

export default TabFive;