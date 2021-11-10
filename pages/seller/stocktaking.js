import React, {useState} from "react";
import Router from "next/router";
import {Acl} from "./../acl";
import { useQuery } from '@apollo/client';
import { getProductsSeller } from '../../graphql/queries';

import {
  Container,
  Table,
  Button
} from "reactstrap";
// layout for this page
import Seller from "layouts/Seller.js";
import Header from "components/Headers/Header.js";

const Stocktaking = (props) => {
  const [listProducts, setListProducts] = useState([]);

  const submitCreateProduct = () =>{
    Router.push("/seller/create_product");
  }

  const getProductsResponse = (dat) => {
    const response = JSON.parse(dat.getProductsSeller.response)
    setListProducts(response);
  };
  const getProductsData = useQuery(getProductsSeller, {
    onCompleted: (data) => getProductsResponse(data),
    onError: (error) => console.log("error =>", error)
  });

  Acl(JSON.stringify(Router.router))
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <div style={{float: 'right'}}>
            <Button className="mb-4" type="button" onClick={submitCreateProduct}>
                CREAR
            </Button>
        </div>
        <Table responsive className=" align-items-center">
            <thead className=" thead-light">
                <tr>
                    <th className=" sort" data-sort="name" scope="col">
                    Nombre del producto
                    </th>
                    <th className=" sort" data-sort="budget" scope="col">
                    SKU
                    </th>
                    <th className=" sort" data-sort="status" scope="col">
                    Cantidad
                    </th>
                </tr>
            </thead>
            <tbody className=" list">
                {listProducts.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.sku}</td>
                        <td>{item.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Container>
    </>
  );
};

Stocktaking.layout = Seller;

export default Stocktaking;
