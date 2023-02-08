import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import { Message } from "./Message";

describe("Message component", () => {
  afterEach(cleanup);

  it("renders with error class when type is error", () => {
    const { getByText } = render(
      <Message type="error" message="Error message" />
    );
    const message = getByText("Error message");
    expect(message).toHaveClass("bg-red-600");
    expect(message).toHaveClass("text-white");
    expect(message).toHaveClass("border");
    expect(message).toHaveClass("p-4");
    expect(message).toHaveClass("rounded");
    expect(message).toHaveClass("text-center");
  });

  it("renders with success class when type is success", () => {
    const { getByText } = render(
      <Message type="success" message="Success message" />
    );
    const message = getByText("Success message");
    expect(message).toHaveClass("bg-green-600");
    expect(message).toHaveClass("text-white");
    expect(message).toHaveClass("border");
    expect(message).toHaveClass("p-4");
    expect(message).toHaveClass("rounded");
    expect(message).toHaveClass("text-center");
  });

  it("renders with info class when type is info", () => {
    const { getByText } = render(
      <Message type="info" message="Info message" />
    );
    const message = getByText("Info message");
    expect(message).toHaveClass("bg-blue-600");
    expect(message).toHaveClass("text-white");
    expect(message).toHaveClass("border");
    expect(message).toHaveClass("p-4");
    expect(message).toHaveClass("rounded");
    expect(message).toHaveClass("text-center");
  });

  it("renders with custom class when passed as a prop", () => {
    const { getByText } = render(
      <Message type="info" message="Info message" className="custom-class" />
    );
    const message = getByText("Info message");
    expect(message).toHaveClass("bg-blue-600");
    expect(message).toHaveClass("text-white");
    expect(message).toHaveClass("border");
    expect(message).toHaveClass("p-4");
    expect(message).toHaveClass("rounded");
    expect(message).toHaveClass("text-center");
    expect(message).toHaveClass("custom-class");
  });
});