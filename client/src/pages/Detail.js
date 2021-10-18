import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";


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
              <h2>
                by {drink.author}
              </h2>
              <h3>{formatDateCreated}</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>How to Make</h1>
              <p>
                {drink.ingredients}
              </p>
              
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to="/">← Back to Drink Station</Link>
            <EditBtn />
            <DeleteBtn id={drink._id} />
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;