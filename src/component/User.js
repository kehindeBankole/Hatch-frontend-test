import React from "react";

function User({ data, average , display ,handleClick , stats , clicked}) {
  return (
    <div>
      <div className="d-flex container-fluid">
       <div className="d-flex" style={{width:'100%'}}>
       <div className="imgcontainer d-flex justify-content-center my-3">
          <img src={data.pic} className="img-fluid" alt="user icon" />
        </div>
        <div className="content align-center mx-5">
          <h1>
            {data.firstName} {data.lastName}
          </h1>
          <div className=" mx-3">
            <p>Email : {data.email}</p>
            <p>company : {data.company}</p>
            <p>skill : {data.skill}</p>
            <p>average : {average}</p>
          </div>
          <div className="stats mt-4 mx-3" style={{display:display}}>
        {stats}
      </div>
        </div>
       </div>
        <div className="ml-auto justify-content-end flex-grow-1">
        <button className="" type="submit" onClick={handleClick}>
          <img src={!clicked ? '/plus.png':'/dash.png'} width="30" height="30" />
        </button>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default User;
