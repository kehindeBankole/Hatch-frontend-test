import React, { useContext, useEffect, useState } from "react";
import { SuperContext } from "../context/context";
import User from "../component/User";
function Home() {
  const context = useContext(SuperContext);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleClick(uid) {
    id === uid ? setId(null) : setId(uid);
  }

  useEffect(() => {
    context.fetch();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    context.search(name);
    // eslint-disable-next-line
  }, [name, context.data]);
  return (
    <div className="py-3">
      <form className="container-fluid">
        <div className="mb-3">
          <input
            type="text"
            onChange={handleChange}
            className="py-3"
            id="searchform"
            aria-describedby="emailHelp"
            placeholder="search by name"
          />
        </div>
      </form>
      <div className="row ">
        {context.filter &&
          context.filter.map((data, key) => (
            <React.Fragment key={data.id}>
              <div className="col-lg-12">
                <User
                  data={data}
                  average={
                    data.grades
                      .map((data) => Number(data))
                      .reduce((acc, val) => acc + val) /
                      data.grades.length +
                    "%"
                  }
                  display={id === data.id ? "block" : "none"}
                  handleClick={() => handleClick(data.id)}
                  clicked={id === data.id ? true : false}
                  stats={data.grades.map((grade, index) => (
                    <p>
                      {`Test ${++index}`} : {grade + "%"}
                    </p>
                  ))}
                />
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default Home;
