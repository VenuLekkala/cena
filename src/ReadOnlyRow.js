import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fileName}</td>
      <td>{contact.NoOfContributions}</td>
      <td>{contact.UploadStatus}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <CreateIcon/>          
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
        <DeleteOutlineIcon />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
