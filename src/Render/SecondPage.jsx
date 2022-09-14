import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import data from "../fakeData/fakeData.json";

const SecondPage = () => {
  const params = useParams();

  const index = params.id;
  let Navigate = useNavigate();

  const handleBack = () => {
    Navigate("/");
  };

  return (
    <div>
      <div className="all-second">
        <div className="back-second p-2">
          <div className="card mx-auto pt-2" style={{ width: "29rem" }}>
            <img
              className="rounded-circle mx-auto image-second"
              src={data[index].image}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title text-center mx-auto">
                @{data[index].username}
              </h5>
              <div className="d-flex pt-3">
                <h5 className="card-title mx-auto follow-amount">
                  {data[index].follower}
                </h5>
                <h5 className="card-title mx-auto follow-amount">
                  {data[index].following}
                </h5>
              </div>
              <div className="d-flex pb-3">
                <h5 className="card-title mx-auto follow-text">Followers</h5>
                <h5 className="card-title mx-auto follow-text">Following</h5>
              </div>
            </div>
          </div>
          <Button className="mt-3 mx-auto button-back" onClick={handleBack}>
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
