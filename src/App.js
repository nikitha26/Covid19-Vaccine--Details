import React from 'react';
import {Container,Row,Col,Form,Input,Button} from 'reactstrap'
import Axios from 'axios';
function App() {
   
  const City = async() => {
    //  var dist = document.getElementById("district").value;
    //  console.log(dist)
    var date = new Date();
    console.log(date.getDate() +"  "+date.getMonth())
    const response = await Axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=588&date=06-05-2021&pincode=503122')
      console.log(response.data)
      // var one = response.data.sessions[0];
      // console.log(one)
  }
    City();
     return (
    <Container className="mt-5 pt-5">
      <Row className="mt-5">
        <Col className="col-lg-6 col-md-6 col-sm-12 offset-lg-3">
          <Input
            type="text"
            placeholder="Enter Mondal"
            id="district"
          >
          </Input>
          <br/>
          <Button
           color="primary"
          >View By District</Button>  
        </Col>
      </Row>   
    </Container>  
  );
}

export default App;
