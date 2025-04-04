import React from "react";
import Business from "./Business";
import styles from "./BusinessList.module.css";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzareia",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [
  business,
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Pizza Palace",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    category: "Italian",
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Slice Heaven",
    address: "456 Broadway",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    category: "Italian",
    rating: 4.3,
    reviewCount: 75,
  },
];

const BusinessList = () => {
  return (
    <div className={styles.businessList}>
      {businesses.map((business) => {
        return <Business business={business} key={business.name} />;
      })}
    </div>
  );
};

export default BusinessList;
