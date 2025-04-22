import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let { id } = useParams();

  const [details, setDetails] = useState(null);

  function getProductDetails() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

      .then(({ data }) => {
        console.log(data.data);
        setDetails(data.data);
      })

      .catch(() => {});
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-25">
        <img src={details?.imageCover} alt={details?.title} className="w-100" />
      </div>
      <div className="w-50 justify-content-center align-items-center">
        <h2>{details?.title}</h2>
        <p>{details?.description}</p>
        <p>{details?.category.name}</p>
        <div className="d-flex justify-content-between">
          <span>{details?.price}</span>
          <span>{details?.ratingsQuantity}</span>
        </div>
        <button className="btn bg-info w-100">buy</button>
      </div>
    </div>
  );
}
