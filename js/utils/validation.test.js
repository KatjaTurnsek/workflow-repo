import { expect, describe, it } from "vitest";
import { validateForm } from "./validation";

describe("validateForm", () => {
  // We're testing three different situations:
  const testCases = [
    {
      // Situation 1: Everything is correct
      email: "valid@stud.noroff.no",
      password: "validpass",
      expected: { isValid: true, errors: {} },
    },
    {
      // Situation 2: Everything is wrong
      email: "invalid@gmail.com",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          email: "Please enter a valid Noroff email address",
          password: "Password must be at least 8 characters",
        },
      },
    },
    {
      // Situation 3: Email is good but password is too short
      email: "valid@noroff.no",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          password: "Password must be at least 8 characters",
        },
      },
    },
  ];

  testCases.forEach(({ email, password, expected }) => {
    it(`validates correctly for email "${email}" and password "${password}"`, () => {
      const result = validateForm(email, password);
      expect(result).toEqual(expected);
    });
  });
});
