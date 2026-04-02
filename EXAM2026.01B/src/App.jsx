import React, { useState, useEffect } from 'react';
import initialStaff from './data';
import Header from './Header';
import StaffList from './StaffList';
import StaffForm from './StaffForm';

function App() {
  
  const [staffs, setStaffs] = useState(() => {
    const savedData = localStorage.getItem('staff_db');
    
    return savedData ? JSON.parse(savedData) : initialStaff;
  });

  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  
  useEffect(() => {
    localStorage.setItem('staff_db', JSON.stringify(staffs));
  }, [staffs]); 

  
  const generateId = () => "NV" + Math.random().toString(36).substr(2, 5).toUpperCase();

  const handleSave = (data) => {
    if (editData) {
     
      setStaffs(staffs.map(s => s.id === editData.id ? { ...data, id: editData.id } : s));
    } else {
      
      setStaffs([...staffs, { ...data, id: generateId() }]);
    }
    handleCloseForm();
  };

  const handleEdit = (staff) => {
    setEditData(staff);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa nhân sự này?")) {
      setStaffs(staffs.filter(s => s.id !== id));
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditData(null);
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Header />
      <div className="container bg-white p-4 shadow-sm rounded mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold m-0 text-primary">Bảng diều phối hội thảo</h3>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ Thêm mới</button>
        </div>
        <StaffList staffs={staffs} onDelete={handleDelete} onEdit={handleEdit} />
      </div>

      {showForm && (
        <StaffForm onSave={handleSave} onCancel={handleCloseForm} editData={editData} />
      )}
    </div>
  );
}

export default App;