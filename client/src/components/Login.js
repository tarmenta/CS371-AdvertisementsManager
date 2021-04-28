import React from 'react'
import { Input, Grid, Form, Button } from "semantic-ui-react";



const Login = () => {
    
    
    
    return (
        <Form >
        <Form.Field>
          <label>Login</label>
          <input placeholder='UserName' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <Button type='submit'>Submit</Button>
        </Form.Field>
        
        <Button primary>Create New User</Button>
      </Form>
      
    )
}


export default Login