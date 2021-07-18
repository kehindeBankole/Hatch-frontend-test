import React, { useContext, useEffect, useState } from "react";
import { SuperContext } from "../context/context";
import User from "../component/User";
function Home() {
  const context = useContext(SuperContext);
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  useEffect(() => {
    context.fetch();
       // eslint-disable-next-line
  }, []);
  useEffect(() => {
    context.search(name);
    //context.getregion(name);
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
            <React.Fragment key={key}>
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
                />
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default Home;
