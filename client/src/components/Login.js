import React, {useState} from 'react'
import { Form, Button } from "semantic-ui-react";



const Login = () => {
    const [login_user, setUser] = useState("");
    const[login_password, setPass] = useState("");
    
    
    return (
        <Form >
        <Form.Field>
          <label>Login</label>
          <Form.Input placeholder= "UserName" value={login_user}
            onChange={(e) => setUser(e.target.value)}></Form.Input>
        </Form.Field>

        <Form.Field>
          <Form.Input placeholder='Password' value={login_password}
            onChange={(e) => setPass(e.target.value)}></Form.Input>>
        </Form.Field>

        <Form.Field>
          <Button type='submit' 
          onClick={async () => {
            const user = {
              login_user,
              login_password,
            };
            await fetch("http://localhost:5000/authentication", {
              method: "POST",
              header: {
                "Content-Type": "applicatin/json",

              },
              body: JSON.stringify(user),
            });
            window.location.reload();
          }}
          >
            Submit
            </Button>
        </Form.Field>
        
        <Button primary>Create New User</Button>
      </Form>
      
    )
}


export default Login