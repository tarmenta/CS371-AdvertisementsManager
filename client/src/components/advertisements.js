import React from "react";
import { Table } from "semantic-ui-react";

const Advertisements = (props) => {
  const { advertisements } = props;

  const adRows = (
    advertisements.map((advertisement) => {
      return(
      <Table.Row>
        <Table.Cell>{advertisement.advertisement_id}</Table.Cell>
        <Table.Cell>{advertisement.advertisement_title}</Table.Cell>
        <Table.Cell>{advertisement.price}</Table.Cell>
        <Table.Cell>{advertisement.category_id}</Table.Cell>
      </Table.Row>
  )}));

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      {adRows}
    </Table>
  );
};

export default Advertisements;
