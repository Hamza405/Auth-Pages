import { setupWorker, rest } from "msw";
const endpoint = "http://localhost:3000/api/";
const worker = setupWorker(
  rest.post(`${endpoint}login`, async (req, res, ctx) => {
    const { username } = await req.json();

    return res(
      ctx.json({
        username,

        firstName: "John",
      })
    );
  })
);

worker.start();
