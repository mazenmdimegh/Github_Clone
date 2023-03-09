import React from 'react'
function RightSide() {
  return (
    <div className='rightSide'>
      <form>
        <div class="form-row border-bottom py-3">
          <div class="form-group col-md-6">
            <input type="text" class="form-control" id="inputCity" placeholder='Find a repository...' />
          </div>

          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

            <div class="btn-group btn1" role="group">
              <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">Dropdown link</a>
                <a class="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
            <div class="btn-group" role="group">
              <button id="btnGroupDrop2" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                <a class="dropdown-item" href="#">Dropdown link</a>
                <a class="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RightSide