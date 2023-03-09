import React from 'react'
import avatar from '../../assets/images/mazen.jpg'
import { Icon } from '@iconify/react';
function LeftSIde() {
  return (
    <div className='mx-5 LeftSIdeWrapper'>
    <img className='avatar' src="https://avatars.githubusercontent.com/u/87076261?v=4" alt="Avatar"/>
    <p className='text-secondary'>Mazen mdimegh</p>
    <button type="button" class="btn btn-outline-secondary btn-sm btn-block Edit mb-3">Edit profile</button>
    <p><Icon icon="mdi:user-supervisor" width="25"/>  1 follower · 1 following</p>
    <br></br>
    <div className='border-top  py-3' >
        <h5>Highlights</h5>
        <Icon icon="octicon:star-16" width="20" />
    </div>
    </div>
  )
}

export default LeftSIde