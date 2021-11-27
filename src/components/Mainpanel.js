import React, { useEffect, useState } from "react";

import { getLocalUsers } from "../utils/request";

const styles = {
  dashCard: {
    padding: "2px",
    borderColor: "#000",
    borderStyle: "solid",
    height: "20vh",
    flexGrow: 2,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    display: "flex",
  },
};



const Mainpanel = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getLocalUsers().then((res) => {
      setUsers(res.items);
      setLoading(false);
    });
  }, []);
  const ShowUsers = () =>  {
    return users.map((item, idx) => <div key={idx}>{item.name}</div>);
  };

  return (
    <React.Fragment>
      <div style={styles.wrapper}>
        <section className="card-deck">
          {loading ? <h2> loading... </h2> : <ShowUsers />}
        </section>
      </div>
    </React.Fragment>
  );
};

export default Mainpanel;
