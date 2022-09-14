import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../fakeData/fakeData.json";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

const MainPage = () => {
  let Navigate = useNavigate();
  return (
    <>
      <div className="all">
        <div className="back">
          {data?.map((item, id) => {
            return (
              <>
                <div className="behind-box">
                  <div className="box py-2">
                    <Link
                      to={`/account/${id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Card
                        className="d-flex flex-row py-3 ps-3"
                        style={{ width: "24rem", height: "100%" }}
                      >
                        <Card.Img
                          variant="top"
                          src={item.image}
                          style={{
                            height: "80px",
                            width: "90px",
                            objectFit: "cover",
                          }}
                          className="rounded-circle"
                        />
                        <Card.Body className="w-50">
                          <Card.Title>@{item.username}</Card.Title>
                          <Card.Text>Followers: {item.follower}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
