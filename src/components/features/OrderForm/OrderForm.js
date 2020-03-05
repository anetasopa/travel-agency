import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <OrderSummary />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default OrderForm;
