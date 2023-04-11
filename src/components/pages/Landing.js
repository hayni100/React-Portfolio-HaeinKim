import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import styles from "./styles.module.css";


export default function Landing() {


  const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2300, friction: 800 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };
  const [open, set] = useState(true);

  return (

      <div className={styles.container} reload={() => set((state) => !state)}>
        <Trail open={open}>
          <span>Haein</span>
          <h1
            class="title"
            style={{
              color: "black",
            }}
          >
            Full Stack Web Developer
          </h1>
          <span>Kim</span>
          <span></span>
        </Trail>
      </div>
  );
}
