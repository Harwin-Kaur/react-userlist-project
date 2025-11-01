import React from 'react'

export const UserForm = () => {
  return (
    <div className='w-50 shadow-lg p-3 m-auto mt-5 rounded'>
      <form action="">
        <div className="row g-2">
  <div className="col-md-3">
    <select className="form-select" id="inputState" name='gender' required defaultValue="">
      <option selected>Choose...</option>
      <option value="m">Male</option>
      <option value="f">Female</option>
    </select>
  </div>
  <div className="col-md-6">
    <input name='name' type="text" className="form-control" placeholder="User name" aria-label="User name" required/>
  </div>
      <div className='col-md-3 d-grid'>
    <button className='button.btn.btn-primary'>Add User</button>

      </div>
</div>
      </form>
    </div>
  )
}

export default UserForm
