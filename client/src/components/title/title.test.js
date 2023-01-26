import { Title } from "./title.jsx";
import { render, screen } from "@testing-library/react";

describe("Title", () => {
  it("Props", () => {
    const props = {
      area: 1320,
      bedrooms: 2,
      bathrooms: 2,
      year: 2020,
      id: "A0005",
      location: "Natomas, UA",
      name: "Luxury Apartment with great views",
      type: "Townhouse",
      price: 530000,
    };
    const { title } = render(<Title {...props} />);

    expect(screen.getByText(/1320/i)).toBeInTheDocument();
    expect(screen.getByText(/area.svg/i)).toBeInTheDocument();
    expect(screen.getByText(/beds.svg/i)).toBeInTheDocument();
    expect(screen.getByText(/baths.svg/i)).toBeInTheDocument();
    expect(screen.getByText(/2020/i)).toBeInTheDocument();
    expect(screen.getByText(/A0005/i)).toBeInTheDocument();
    expect(screen.getByRole("location")).toHaveClass("title__location");
    expect(
      screen.getByText(/Luxury Apartment with great views/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("type")).toHaveClass("details__type-card");
    expect(screen.getByText(/530 000/i)).toBeInTheDocument();
  });
});
