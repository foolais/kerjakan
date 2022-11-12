import React from "react";
import { UserGlobal } from "../context/GlobalContext";

const ListJobValue = (props) => {
  const { job, index } = props;
  const { truncateString, rupiah, handleEdit, handleDelete } = UserGlobal();
  return (
    <tr
      key={job?.id}
      className="bg-white border-b hover:bg-gray-50  text-black text"
    >
      <th scope="row" className="py-4 px-3 font-medium whitespace-nowrap">
        {index + 1}
      </th>
      <td className="py-4">{job?.company_name}</td>
      <td className="py-4 px-4">{job?.company_city}</td>
      <td className="py-4 px-3">{job?.title}</td>
      <td className="py-4 px-3">{job?.job_tenure}</td>
      <td className="py-4 px-3">{job?.job_type}</td>
      <td className="py-4 px-3">
        {job?.job_status === 1
          ? "Dibuka"
          : job?.job_status === 2
          ? "Ditutup"
          : null}
      </td>
      <td className="py-4 px-3">
        {truncateString(job?.company_image_url, 10)}
      </td>
      <td className="py-4 px-3">{truncateString(job?.job_description, 25)}</td>
      <td className="py-4 px-3">
        {truncateString(job?.job_qualification, 25)}
      </td>
      <td className="py-4 px-3">{rupiah(job?.salary_min)}</td>
      <td className="py-4 px-3">{rupiah(job?.salary_max)}</td>

      <td className="py-4 px-3">
        <div className="flex">
          <button
            onClick={handleEdit}
            value={job?.id}
            className="bg-yellow-300 p-2 rounded-lg mr-4 text-white hover:bg-yellow-400"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            value={job?.id}
            className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListJobValue;
