import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getApiKey", () => {
  test("returns test-key-123 as api key", () => {
    const header = { authorization: "ApiKey test-key-123" };
    const apikey = getAPIKey(header);
    expect(apikey).toBe("test-key-123");
  });
  test("returns null cause missing key", () => {
    const header = {};
    const apikey = getAPIKey(header);
    expect(apikey).toBe(null);
  });
  test("returns null cause malformed header", () => {
    const header = { authorization: "ApiKeytest-key-123" };
    const apikey = getAPIKey(header);
    expect(apikey).toBe(null);
  });
});
