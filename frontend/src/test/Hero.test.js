import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // or move to setupTests.js

import Hero from "../landing_page/home/Hero";

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // or move to setupTests.js

import Hero from "../landing_page/home/Hero";

describe('Hero Component', () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  // another test case
   test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button",{name:"/signup now/"});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

});




