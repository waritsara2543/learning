"use client";
import React, { useEffect } from "react";
import { useQueries, useQuery } from "react-query";

const ReactQuery = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );
  const products = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const userQueries = useQueries(
    products.map((product) => {
      return {
        queryKey: ["user", product],
        queryFn: () =>
          fetch(`https://dummyjson.com/products/${product}`).then((res) =>
            res.json()
          ),
      };
    })
  );
  console.log(userQueries[0].data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default ReactQuery;
