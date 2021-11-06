import React, { useEffect, useState } from "react";

import { getLocalUsers, getContentItems } from "../utils/request";

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
  const [content, setContent] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getLocalUsers().then((res) => {
      setUsers(res.items);
    });
  }, []);

  return (
    <React.Fragment>
      <div style={styles.wrapper}>
        <section className="card-deck">
            {users.map((item, idx) => (
              <li key={idx}>{item.name}</li>
            ))}       
        </section>
      </div>
    </React.Fragment>
  );
};

export default Mainpanel;
