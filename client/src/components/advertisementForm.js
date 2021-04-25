import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export const AdvertisementForm = () => {

  const [advertisement_id] = useState(200);
  const [advertisement_title, setTitle] = useState("");
  const [advertisement_details, setDetail] = useState("");
  const [advertisement_date] = useState(new Date().toISOString().slice(0, 19).replace('T', ' '));
  const [price, setPrice] = useState();
  const [category_id, setCategoryId] = useState("");
  const [user_id] = useState("Rkale");
  const [moderator_id] = useState(null);
  const [status_id] = useState("PN");

  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="advertisement title"
          value={advertisement_title}
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="advertisement detail"
          value={advertisement_details}
          onChange={e => setDetail(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="category id"
          value={category_id}
          onChange={e => setCategoryId(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const advertisement = { advertisement_id, advertisement_title, advertisement_details, advertisement_date, price, user_id, moderator_id, category_id, status_id };
            await fetch('http://localhost:5000/advertisements', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(advertisement)
            });
            window.location.reload();
          }}>submit</Button>
      </Form.Field>
    </Form>
  );
};