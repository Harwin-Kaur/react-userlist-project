import React from 'react'

export const UserForm = () => {
  return (
    <div className='w-50 shadow-lg p-5 m-auto mt-5 rounded'>
      <form action="">
        <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
</div>
      </form>
    </div>
  )
}

export default UserForm
