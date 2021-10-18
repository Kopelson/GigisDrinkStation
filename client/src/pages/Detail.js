import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteBtn from "../components/DeleteBtn";


function Detail() {
  const [drink, setDrink] = useState({})
  // When this component mounts, grab the drink with the _id of props.match.params.id
  // e.g. localhost:3000/drinks/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getDrink(id)
      .then(res => setDrink(res.data))
      .catch(err => console.log(err));
  }, [id])


  const formatDateCreated = dateFormat(drink.date, "mmmm dS, yyyy");
  
  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {drink.title}
              </h1>
              <p>
                by {drink.author}
              </p>
              <p>{formatDateCreated}</p>
              <h2>Ingredients:</h2>
              <p>
                {drink.ingredients}
              </p>
              <DeleteBtn id={drink._id} />
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 d-flex justify-content-between">
            <Link className="text-white" to="/">← Back to Drink Station</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;