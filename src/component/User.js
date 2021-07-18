import React from 'react'

function User({data , average}) {
    return (
        <div>
              <div className="d-flex container-fluid">
                  <div className="imgcontainer d-flex justify-content-center my-3 align-self-center">
                    <img src={data.pic} className="img-fluid" alt="user icon"/>
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
                  </div>
                </div>
                <hr/>
        </div>
    )
}

export default User
