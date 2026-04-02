import React from 'react';
import StaffItem from './StaffItem';

const StaffList = ({ staffs  }) => (
  <>
   <input 
        className="form-control mb-3" 
        placeholder="lọc danh sách..." 
        
      /> 
  <div className="table-responsive">
    <table className="table table-hover align-middle border text-start">
      <thead className="table-light">
        <tr>
          <th>Tên hội thảo</th><th>Diễn giả</th><th>Email</th><th>Ngày tổ chức</th><th>Địa điểm</th>
        </tr>
      </thead>
      <tbody>
        {staffs.map((item, index) => (
          <StaffItem 
            key={item.id} 
            staff={item} 
            index={index} 
           
          />
        ))}
      </tbody>
    </table>
  </div>
  </>
);
export default StaffList;