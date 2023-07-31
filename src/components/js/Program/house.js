import pro_list from "../../js/program_public";
import post from "../../../routes/css/program.module.css";
import { useState } from "react";

function Program_house() {
  const [program, setProgram] = useState(pro_list);
  return (
    <div className={post.post}>
      {program.map((event) => {
        if (event.category === "주거") {
          return (
            <a
              href={event.url}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className={post.box}
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    paddingBottom: "10px",
                    borderBottom: "1px solid lightgray",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #66C109",
                      color: "#66C109",
                      fontSize: "0.8rem",
                    }}
                  >
                    자립 지원 / {event.category_description}
                  </div>
                  <div style={{ fontSize: "0.9rem" }}>
                    마감 일자 {event.deadline}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    margin: "10px 0px 10px",
                  }}
                >
                  {event.title}
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    width: "330px",
                    height: "40px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    fontSize: "0.9rem",
                  }}
                >
                  {event.content}
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    fontSize: "0.8rem",
                    top: "185px",
                  }}
                >
                  <div
                    style={{
                      paddingRight: "5px",
                      borderRight: "2px solid gray",
                    }}
                  >
                    {event.agency}
                  </div>
                  <div style={{ marginLeft: "7px" }}>{event.region}</div>
                </div>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
}

export default Program_house;
