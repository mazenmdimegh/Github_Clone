import React from 'react'
import RepoDetails from '../../components/RepoDetails/RepoDetails'


export interface RightSideProps {
  data: Record<string, any>;
}


function RightSide(props: RightSideProps) {
  const { data } = props;
  console.log("from child data",data)

  return (
    <div className='rightSide'>
      <form>
        <div className="form-row border-bottom py-3">
          <div className="form-group">
            <input type="text" className="form-control" id="inputCity" placeholder='Find a repository...' />
          </div>

          <div className="btn-groupp" role="group" aria-label="Button group with nested dropdown">

            <div className="btn-groupp btn1" role="group">
              <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">Dropdown link</a>
                <a className="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
            <div className="btn-groupp" role="group">
              <button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
                <a className="dropdown-item" href="#">Dropdown link</a>
                <a className="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
          </div>
        </div>
      </form>
      <RepoDetails/>
      <RepoDetails/>
      <RepoDetails/>
    </div>
  )
}

export default RightSide