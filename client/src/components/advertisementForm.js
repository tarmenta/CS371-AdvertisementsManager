import React, { useState } from "react";
import { Grid, Form, Input, Button, GridRow } from "semantic-ui-react";

const AdvertisementForm = () => {
  const [advertisement_id] = useState(200);
  const [advertisement_title, setTitle] = useState("");
  const [advertisement_details, setDetail] = useState("");
  const [advertisement_date] = useState(
    new Date().toISOString().slice(0, 19).replace("T", " ")
  );
  const [price, setPrice] = useState();
  const [category_id, setCategoryId] = useState("");
  const [user_id] = useState("Rkale");
  const [moderator_id] = useState(null);
  const [status_id] = useState("PN");

  return (
    <Form widths="equal" size="large">
      <Grid>
        <GridRow centered>
          <Form.Input label="Title" value={advertisement_title}
              onChange={(e) => setTitle(e.target.value)}>

          </Form.Input>
          <Form.Input label="Detail">
            <Input
              value={advertisement_details}
              onChange={(e) => setDetail(e.target.value)}
            />
          </Form.Input>
          <Form.Input label="Price">
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Input>
          <Form.Input label="Category">
            <Input
              value={category_id}
              onChange={(e) => setCategoryId(e.target.value)}
            />
          </Form.Input>
        </GridRow>
        <GridRow centered>
          <Form.Field>
            <Button
              onClick={async () => {
                const advertisement = {
                  advertisement_id,
                  advertisement_title,
                  advertisement_details,
                  advertisement_date,
                  price,
                  user_id,
                  moderator_id,
                  category_id,
                  status_id,
                };
                await fetch("http://localhost:5000/advertisements", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(advertisement),
                });
                window.location.reload();
              }}
            >
              Submit
            </Button>
          </Form.Field>
        </GridRow>
      </Grid>
    </Form>
  );
};

export default AdvertisementForm;
