import React from 'react'


import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

import '../components/createdriver/createdriver.css'

// import 'bootstrap/dist/css/bootstrap.min.css';


const Createdriver = () => {
  return (
    <div>
        <h2 className="page-header">Thêm tài xế</h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="">

                <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Tài khoản
        </Label>
        <Input
          id="exampleEmail"
          name="userName"
          placeholder=""
          type="test"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Mật khẩu
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder=""
          type="password"
        />
      </FormGroup>
    </Col>
  </Row>
  
  
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          Họ và tên
        </Label>
        <Input
          id="exampleCity"
          name="name"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          Số điện thoại
        </Label>
        <Input
          id="exampleState"
          name="state"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
    <FormGroup>
          <Label for="exampleSelect">Giới tính</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Nam</option>
            <option>Nữ</option>
          </Input>
        </FormGroup>
    </Col>
  </Row>
  {/* <FormGroup>
    <Label for="exampleAddress">
      Họ và tên
    </Label>
    <Input
      id="exampleAddress"
      name="name"
      placeholder=""
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleAddress2">
      Address 2
    </Label>
    <Input
      id="exampleAddress2"
      name="address2"
      placeholder="Apartment, studio, or floor"
    />
  </FormGroup> */}
  {/* <Row>
    <Col md={6}>
    <FormGroup>
          <Label for="exampleSelect">Xe buýt</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>59-D2.99999</option>
            <option>59-D2.88888</option>
          </Input>
        </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Tuyến đường
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder=""
          type="password"
          disabled
        />
      </FormGroup>
    </Col>
  </Row> */}
  {/* <FormGroup check>
    <Input
      id="exampleCheck"
      name="check"
      type="checkbox"
    />
    <Label
      check
      for="exampleCheck"
    >
      Hoạt động
    </Label>
  </FormGroup> */}
  <Button>
    Lưu
  </Button>
</Form>
</div>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default Createdriver