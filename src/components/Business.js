import React from "react";
import styles from "./Business.module.css";

const Business = ({ business }) => {
  return (
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.businessInfo}>
        <div className={styles.businessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipCode}
          </p>
        </div>
        <div className={styles.businessReviews}>
          <h3>{business.category}</h3>
          <h3 className={styles.rating}>{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
