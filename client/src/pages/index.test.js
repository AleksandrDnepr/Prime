import { render, screen } from "@testing-library/react";
import { Index } from "./index.jsx";
import queryStr from "query-string";

describe("Index Page", () => {
  it("Filtration", () => {
    //     const props = {
    //         values: {
    //         bathrooms: '2',
    //         type: 'apartment'
    //         }
    //         options: {

    //         }

    // }

    const properties = [
      {
        AgentId: 1,
        area: 1320,
        bathrooms: 2,
        bedrooms: 2,
        city: "Natomas",
        createdAt: "2023-01-03T11:03:06.691Z",
        deal: "rent",
        deletedAt: null,
        price: 20000,
        prop_id: "A0001",
        state: "CA",
        title: "Luxury Apartment with great views",
        type: "townhouse",
        updatedAt: "2023-01-16T12:01:37.235Z",
        year: 1920,
      },
    ];

    const mockSuccesfulResponse = (status = 200, returnBody = properties) => {
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          resolve({
            ok: true,
            status,
            json: () => {
              return returnBody ? returnBody : {};
            },
          });
        });
      });
    };

    console.log(mockSuccesfulResponse());

    // fetch = jest.fn(() => Promise.resolve());
    const filter = render(<Index />);
    screen.debug();
  });
});
