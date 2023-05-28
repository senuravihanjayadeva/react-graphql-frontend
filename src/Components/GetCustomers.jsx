import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_CUSTOMERS } from "../GraphQL/Queries";

function GetCustomers() {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    console.log(data?.customers);
    setCustomers(data?.customers.slice(-20));
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="row">
      {customers &&
        customers.length &&
        customers.map((customer) => {
          return (
            <div key={customer.id} className=" card col-3 p-3 m-1">
              <p>{customer.id}</p>
              <p>{customer.firstName}</p>
              <p>{customer.lastName}</p>
            </div>
          );
        })}
    </div>
  );
}

export default GetCustomers;
