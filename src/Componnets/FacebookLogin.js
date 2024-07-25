import React from 'react'

function FacebookLogin() {
  return (
<div>
    <div className='container flex justify-center items-center bg-blue-50'>
        <div className='left'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgubD4g7CNT2e-kNMttJaw3otXq-RSAXwFkQ&s'/>
            <p>facebook helps you connect with share with the people in your life.</p>
        </div>
        <div className='right flex flex-col mx-10'>
            <input type='text' placeholder='email or phone no'/>
            <input type='passsword' placeholder='password'/>
            <button className='btn'><i class="fa-thin fa-bed-front"></i>log in</button>
            <span>forgooten password </span>
            <hr/>
            <button className='btn'>create a account</button>

        </div>
    </div>
</div>
  )
}

export default FacebookLogin
