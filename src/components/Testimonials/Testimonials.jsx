import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi commodi fugit eveniet quasi earum ab vitae officia. Quae earum exercitationem nulla eius esse cumque dignissimos rem quia, in nesciunt!"
          </p>
          <img
            src="https://i.pinimg.com/736x/b1/b2/3a/b1b23ae634b3efa9a4af4a4613d1b214.jpg?fbclid=IwAR0VC1e6LVi8HItXExYv9BXS96Ebs5b7ZxA-d-uvQsKMvUqubz8Y4zQpsvs"
            alt=""
          />
          <h4>Now</h4>
          <p className={styles.bio}>full-stack</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi commodi fugit eveniet quasi earum ab vitae officia. Quae earum exercitationem nulla eius esse cumque dignissimos rem quia, in nesciunt!"
          </p>
          <img
            src="https://i.pinimg.com/736x/b3/17/f3/b317f39796d1974de83f01f4ffeb32c3.jpg?fbclid=IwAR2M8aA7fB4UqSLQs0U512wYwWYWz2HNtU5OvRSTZD4LRtF3fOlcYfdeo9I"
            alt=""
          />
          <h4>Owen</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi commodi fugit eveniet quasi earum ab vitae officia. Quae earum exercitationem nulla eius esse cumque dignissimos rem quia, in nesciunt!"
          </p>
          <img
            src="https://i.pinimg.com/736x/73/63/9b/73639b81db785c57a0fb3edd8611d41b.jpg?fbclid=IwAR2wJIAipPrE8ACqMMgUvwcnCs_VB9_oaeEWnG4pGU2nt2iPNh9-9lFmpIQ"
            alt=""
          />
          <h4>Phxnu</h4>
          <p className={styles.bio}>Front-end developer.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;