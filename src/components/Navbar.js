import React, { useState, useEffect } from 'react';
import { useSharedVariable } from './SharedVariableContext';
function Navbar() {
    const { sharedVariable } = useSharedVariable();

  return (
    <><nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height: '50px'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Patent Rights</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:'250px', marginRight:'20px'}}>
  <div class="progress-bar" style={{width: `${sharedVariable}%`}}>{sharedVariable}</div>
</div>
  </nav></>
  )
}

export default Navbar