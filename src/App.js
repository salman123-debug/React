import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// let name = 'salman';
// const user = {
//   firstname: 'Muhammad',
//   lastName: 'Salman'
// }
// function format(user) {
//   return user.firstname +' '+user.lastName;
//  }
// function getName(user){
//   if(user){
//     return <h1>Hello, {format(user)}</h1>
//   }
//   else{
//     return <h1>Hello, This is stranger</h1>
//   }
// }

function App() {
  return (
    
    <div className="a">
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"style={{color:"red"}}>Muhammad<span style={{color:"green"}}>Salman</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="action" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Category</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Category1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Category2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Contact             
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* end navbar */}
    <h1 style={{textAlign:"center"}}>Category</h1>
    <Card style={{ width: '18rem', float:"left",margin:"23px"}}>
      <Card.Img variant="top" src="image/cover1.jpg" />
      <Card.Body>
        <Card.Title>Category1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', float:"left",margin:"23px"}}>
      <Card.Img variant="top" src="image/cover2.jpg" />
      <Card.Body>
        <Card.Title>Category2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', float:"left",margin:"23px"}}>
      <Card.Img variant="top" src="image/cover7.jpg" />
      <Card.Body>
        <Card.Title>Category3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', float:"left",margin:"23px"}}>
      <Card.Img variant="top" src="image/cover3.jpg" />
      <Card.Body>
        <Card.Title>Category4</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <div className='cardTask'>
    <Card style={{ width: '25rem',height:'40rem', float:"left",margin:"23px"}}>
      <Card.Img style={{width:'25rem',height:'29rem'}} variant="top" src="image/anupma.jpg" />
      <Card.Body>
        <Card.Title>Anupama</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem',height:'40rem', float:"left",margin:"23px"}}>
      <Card.Img style={{width:'25rem',height:'29rem'}} variant="top" src="image/tarak.jpg" />
      <Card.Body>
        <Card.Title>Tarak mehta ka ulta chashma</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem',height:'40rem', float:"left",margin:"23px"}}>
      <Card.Img style={{width:'25rem',height:'29rem'}} variant="top" src="image/OIP.jpg" />
      <Card.Body>
        <Card.Title>Balveer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    </div>

    </div>
    
    

    
  );
}

export default App;
