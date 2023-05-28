import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_CUSTOMERS } from "../GraphQL/Queries";

function GetCustomers() {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  useEffect(()=>{
    console.log(data)
  },[data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return <div>GetCustomers</div>;
}

export default GetCustomers;
