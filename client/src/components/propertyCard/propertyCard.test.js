import React from "react";
import { render, screen } from "@testing-library/react";
import { PropertyCard } from "./propertyCard";
import { Link } from "react-router-dom";

const sum = (a, b) => {
  return a + b;
};
describe("propertyCard testing:", () => {
  let props = {};

  beforeEach(() => {
    props = {
      price: 1022000,
      preview:
        "https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg",
      mode: "grid",
      deal: "sale",
      type: "townhouse",
      title: "Super house",
      bedrooms: 2,
      bathrooms: 1,
      year: 1990,
      area: 200,
      city: "Mykolaiv",
      state: "UA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit, minima nobis nostrum dignissimos rerum cupiditate culpa in ut vero nesciunt alias voluptatum fuga! Voluptatem, laborum hic vero sed rerum nostrum ipsam dolore alias ipsum magnam ducimus repellat maxime cupiditate sit! A labore perferendis, odit quos eius hic commodi veritatis asperiores, harum quas qui officiis eum, magnam nostrum facilis impedit doloribus iste nemo. Possimus dolores minima dolorem voluptate nihil quasi ullam aliquam, itaque ipsum soluta? Optio, veniam doloribus officia accusantium mollitia dolores dolorem veritatis cupiditate delectus, officiis adipisci esse! Vitae, commodi. Est natus iusto dignissimos quae dolorem error libero nam?",
      shortDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium consequuntur quia accusamus! Consequuntur, nihil modi natus qui unde optio aliquid.",
    };
  });

  test("function sum should return sum of a & b", () => {
    expect(sum(3, 5)).toBe(8);
  });

  test("User can see property description", () => {
    render(<PropertyCard {...props} />);
    const propDescrptn = screen.getByText(/Lorem ipsum dolor/i);
    console.log(propDescrptn);
    expect(propDescrptn).not.toBeUndefined();
    expect(propDescrptn).toBeInTheDocument();
  });
});
