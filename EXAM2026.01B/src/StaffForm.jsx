import React, { useState } from 'react';

const StaffForm = ({ onSave, onCancel, editData }) => {
  const [formData, setFormData] = useState(editData || {
    name: '', email: '', gia: '', ngay: '',đia:''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!formData.name.trim()) err.name = "Tên hội thảo không được trống";
    else if (formData.name.length > 60) err.name = "tối đa 30 ký tự";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) err.email = "Email sai định dạng";
    if(!formData.ngay ) err.ngay = "vui lòng đúng ngày chọn ngày";
    if(!formData.dia) err.dia = "vui lòng nhập địa diểm";
    if(!formData.gia) err.gia = "Vui lòg nhập tên diễn giă"
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <form className="modal-content border-0 shadow-lg" onSubmit={(e) => { 
          e.preventDefault(); 
          if(validate()) onSave(formData); 
        }}>
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{editData ? "Cập nhật nhân sự" : "Thêm hội thảo"}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onCancel}></button>
          </div>
          <div className="modal-body row g-3 text-start">
            <div className="col-md-6">
              <label className="form-label fw-bold">Tên hội thảo</label>
              <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <div className="invalid-feedback">{errors.name}</div>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Diễn Giả</label>
              <input className={`form-control ${errors.gia ? 'is-invalid' : ''}`} 
                value={formData.gia} onChange={e => setFormData({...formData, gia: e.target.value})} />
              <div className="invalid-feedback">{errors.gia}</div>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Email</label>
              <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <div className="invalid-feedback">{errors.email}</div>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Ngày tổ chức</label>
              <input type = "date" className={`form-control ${errors.ngay ? 'is-invalid' : ''}`} 
                value={formData.ngay} onChange={e => setFormData({...formData, ngay: e.target.value})} />
              <div className="invalid-feedback">{errors.ngay}</div>
            </div>
            <div className="col-md-12">
              <label className="form-label fw-bold">Địa Điểm</label>
              <input className={`form-control ${errors.dia ? 'is-invalid' : ''}`} 
                value={formData.dia} onChange={e => setFormData({...formData, dia: e.target.value})} />
              <div className="invalid-feedback">{errors.dia}</div>
            </div>
           
          </div>
          <div className="modal-footer bg-light">
            <button type="submit" className="btn btn-success px-4">Lưu dữ liệu</button>
            <button type="button" className="btn btn-secondary px-4" onClick={onCancel}>Hủy</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default StaffForm;