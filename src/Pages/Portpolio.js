import React from "react";
import Tittle from "../Components/Title";
import blogs from "../Components/Portpolio";

function Portpolio() {
  return (
    <div>
      <div className="b-tittle">
        <Tittle title={"Portpolio"} span={"Portpolio"} />
      </div>
      <div className="PortpolioPage">
        {blogs.map((blog) => {
          return (
            <div className="Portpolio" key={blog.id}>
              <div className="Portpolio-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="Portpolio-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portpolio;
