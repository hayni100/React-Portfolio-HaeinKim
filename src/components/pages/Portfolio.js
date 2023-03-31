import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// const { Meta } = Card;
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={require('../../assets/img/sidehus.png')} />
            <Card.Body>
              <Card.Title><a href="https://arcane-dusk-42730.herokuapp.com/">Side Hussle</a></Card.Title>
              <Card.Text>
              This project is a fantastic user-focused MERN app for a small or self employed business person who wants to be able to track their SideHussle income & expenses to estimate budget and reach their business goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
        <Col>
          <Card>
            <Card.Img variant="top" src={require("../../assets/img/wtw.png")} />
            <Card.Body>
              <Card.Title><a href="https://hayni100.github.io/Movie-Recs/">What To Watch</a></Card.Title>
              <Card.Text>
              This is simple movie recommender application where a user selects up to 3 genres, then has a movie or TV show recommended to them based on the most popular results within those specified genres. They are also given a link they can click to watch the trailer. They can save any result, and at a later time, pull it back up with a simple click of a button.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={require('../../assets/img/plantparent.png')} />
            <Card.Body>
              <Card.Title><a href="https://plantparenthood.herokuapp.com/">Plant Parenthood</a></Card.Title>
              <Card.Text>
              This application was made to help plant lovers who want to know how to properly take care of a household plants, whether you are a newbie or an expert we are here to provide new tips in our lovely website. When the user signs up and is login, the user will be able to look up a common household plant and saved the ones they took interest in. To look up the facts the plants needs to stay alive, showing the tempature it needs, the lighting, and how much water.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={require('../../assets/img/techblog.png')} />
            <Card.Body>
              <Card.Title><a href="https://desolate-shore-53056.herokuapp.com/profile">Tech Blog</a></Card.Title>
              <Card.Text>
              This project was built following the MVC framwork. This application is a simple blog that allows users to login, view other users posts, create new post, and delete their own blog posts. Moreover, users can comment on other users posts.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={require('../../assets/img/scheduler.png')} />
            <Card.Body>
              <Card.Title><a href="https://hayni100.github.io/Work-Day-Scheduler/">Work Day Scheduler</a></Card.Title>
              <Card.Text>
              This is a simple application that allows users to view and create schedule in certain time blocks. This application features moment js. which allows time indication.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={require('../../assets/img/password.png')} />
            <Card.Body>
              <Card.Title><a href="https://hayni100.github.io/Password_generator/">Password Generator</a></Card.Title>
              <Card.Text>
              This application uses javascript to generate passwords according to user preferences in length and type of characters. User can input desired length of their password in the initial promt when "generate password" button is clicked. Then, user can answer seriece of questions regarding which characters they want to include in the password. Once all the promts are answered, the application will generate a random password according to user input.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
  );
}
