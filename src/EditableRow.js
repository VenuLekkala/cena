import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a file name..."
          name="fileName"
          value={editFormData.fileName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter no.of contributions..."
          name="NoOfContributions"
          value={editFormData.NoOfContributions}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter upload status..."
          name="UploadStatus"
          value={editFormData.UploadStatus}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit"><DoneIcon /></button>
        <button type="button" onClick={handleCancelClick}>
          <ClearIcon/>
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
