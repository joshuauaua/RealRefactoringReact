import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/cardGroup";
import MyCv from "../assets/myData.json";

export default function Cv() {
  return (
    <CardGroup>
      {MyCv.workplace.map((workplace) => {
        return (
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/50/50" />
            <Card.Body>
              <Card.Title>Employer: {workplace.name}</Card.Title>
              <Card.Text>
                {workplace.role}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
}
