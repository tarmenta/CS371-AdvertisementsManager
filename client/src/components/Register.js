import React, {useState} from 'react'
import { Grid, Form, Button } from "semantic-ui-react";

const Register = () => {
  const [user_id, setId] = useState("");
  const [user_first_name, setFirst] = useState("");
  const [user_last_name, setLast] = useState("");
  const [user_password, setPass] = useState("");

    return (
      <Grid centered>
        <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input label='First Name' placeholder='First name'
            value={user_first_name} 
            onChange={(e) => setFirst(e.target.value)} />
         <Form.Input label='Last name' placeholder='Last name'
            value={user_last_name} 
            onChange={(e) => setLast(e.target.value)} />
         </Form.Group>

         <Form.Group widths={2}>
           <Form.Input label='Username' placeholder='Username'
              value={user_id} 
              onChange={(e) => setId(e.target.value)} />
            <Form.Input label='Password' placeholder='Password'
                value={user_password} 
                onChange={(e) => setPass(e.target.value)} />
          </Form.Group>

         <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button type='submit'
            onClick={async () => {
              const authentication = {
                user_id,
                user_first_name,
                user_last_name,
                user_password,
              };
              await fetch("http://localhost:5000/authentication", {
                method: "POST",
                header: {
                  "Conten-Type": "application/json",

                },
                body: JSON.stringify(authentication),
              });
              window.location.reload();
            }}
            >
              Submit
              </Button>
          
        </Form>
         
      </Grid>
   )
}


export default Register