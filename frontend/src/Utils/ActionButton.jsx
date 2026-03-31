import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";

function ActionButton({ id, editUrl, deleteUrl, onDeleteSuccess }) {
  const { handleDelete } = useAxios();
  // onDeleteSuccess(id);

  const manageDelete = async () => {
    handleDelete(deleteUrl, id);
    onDeleteSuccess(id);
  };
  return (
    <>
      {editUrl && (
        <Link
          to={`${editUrl}/${id}`}
          className="px-3 mt-3 py-1.5 text-sm md:text-base 
          bg-blue-100 text-blue-700 border border-blue-500 
          rounded hover:bg-blue-500 hover:text-white transition me-2"
        >
          Edit
        </Link>
      )}

      {deleteUrl && (
        <button
          type="button"
          onClick={manageDelete}
          className="px-3 mt-3 py-1.5 text-sm md:text-base 
          bg-red-100 text-red-700 border border-red-500 
          rounded hover:bg-red-500 hover:text-white transition"
        >
          Delete
        </button>
      )}
    </>
  );
}

export default React.memo(ActionButton);
