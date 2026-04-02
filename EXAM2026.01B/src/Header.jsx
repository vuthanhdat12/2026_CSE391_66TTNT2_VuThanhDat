import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 mb-4">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">HộiThảoHub</a>
        
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Trang chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Danh sách</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">giới thiệu </a>
            </li>
          </ul>
          
          <form className="d-flex border rounded p-1 bg-white" style={{ maxWidth: '300px' }}>
            <input 
              className="form-control form-control-sm border-0 shadow-none" 
              type="search" 
              placeholder="Tìm kiếm..." 
            />
           
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;