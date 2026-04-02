import React from 'react';

const StaffItem = ({ staff,   }) => (
  <tr>
    <td className="fw-bold">{staff.name}</td>
    <td>{staff.gia}</td>
    <td>{staff.email}</td>
    <td>{staff.ngay}</td>
    <td>{staff.dia}</td>
    {/* <td><span className="badge bg-info text-dark">{staff.position}</span></td>
    <td>
      <button className="btn btn-sm btn-warning me-2 shadow-sm" onClick={() => onEdit(staff)}>Sửa</button>
      <button className="btn btn-sm btn-danger shadow-sm" onClick={() => onDelete(staff.id)}>Xóa</button>
    </td> */}
  </tr>
);
export default StaffItem;