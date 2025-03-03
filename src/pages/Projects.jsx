import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/joshuauaua/repos")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(()=>{

        }, 3)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <section>
          <h1>Mina projekt!</h1>
          <div className="project-section">
          <ClockLoader color="#5a0000" size={31} />
        </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <main>
        <section>
          <h1>Mina projekt!</h1>
          <div className="project-section">
            {projects.map((p) => {
              return (
                <article className="card" key={p.name}>
                  <div className="card-head">
                    <img src="https://picsum.photos/200/300" />
                  </div>
                  <div className="card-body">
                    <h3>{p.name}</h3>
                    <p>
                      Programming Language: {p.language || "Unknown language"}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
