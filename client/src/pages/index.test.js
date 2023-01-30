import { render, screen, act } from "@testing-library/react";
import Index from "./index.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Index Page", () => {
  it("Page fetches the data from API", async () => {
    const properties = [
      {
        AgentId: 1,
        area: 1320,
        bathrooms: 2,
        bedrooms: 2,
        city: "Natomas",
        createdAt: "2023-01-03T11:03:06.691Z",
        deal: "rent",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus accusantium omnis. Quos, quaerat inventore id odio facere fuga aut?",
        deletedAt: null,
        price: 20000,
        prop_id: "A0001",
        state: "CA",
        title: "Luxury Apartment with great views",
        type: "townhouse",
        updatedAt: "2023-01-16T12:01:37.235Z",
        year: 1920,
      },
      {
        AgentId: 2,
        area: 720,
        bathrooms: 1,
        bedrooms: 1,
        city: "Kyiv",
        createdAt: "2023-01-03T11:03:06.691Z",
        deal: "sale",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus accusantium omnis. Quos, quaerat inventore id odio facere fuga aut?",
        deletedAt: null,
        price: 150000,
        prop_id: "A0002",
        state: "UA",
        title: "Beautiful house",
        type: "apartments",
        updatedAt: "2023-01-16T12:01:37.235Z",
        year: 2000,
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            properties,
          }),
      })
    );

    await act(async () => {
      render(
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      );
    });

    screen.debug();
    // expect(screen.queryByRole("loader"))
    // expect(setTimeout(() => { screen.findByText("Luxury Apartment");
    // }, 3000)).toBeInTheDocument()
  });
});
