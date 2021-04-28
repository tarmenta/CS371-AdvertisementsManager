import React from 'react'
import { Input, Grid, Form, Button, Segment, Link } from "semantic-ui-react";

const Register = () => {
    return (
      <Grid centered>
        <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input label='First Name' placeholder='First name' />
         <Form.Input label='Last name' placeholder='Last name' />
         </Form.Group>
         <Form.Group widths={2}>
           <Form.Input label='Username' placeholder='Username' />
            <Form.Input label='Password' placeholder='Password' />
          </Form.Group>
         <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button type='submit'>Submit</Button>
         </Form>
         
      </Grid>
   )
}


export default Register