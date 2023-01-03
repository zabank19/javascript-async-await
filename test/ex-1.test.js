import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 1: Conditional Logic tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-1.js");
        const code = `${data} \n return johnProfile`;

        const func = new Function(code);
        const johnProfile = func()
        const result = {
            name: "John",
            age: 20,
            hobbies: ["Coding", "Football"],
        }
        expect(johnProfile).toStrictEqual(result);
    });
});