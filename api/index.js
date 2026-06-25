import { Readable } from "node:stream";
import server from "../dist/server/server.js";

function toRequest(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;

  const headers = new Headers();

  Object.entries(req.headers).forEach(([key, value]) => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else {
      headers.set(key, value);
    }
  });

  const init = {
    method: req.method,
    headers,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req;
    init.duplex = "half";
  }

  return new Request(
    `${proto}://${host}${req.url}`,
    init
  );
}

export default async function handler(req, res) {
  try {
    const request = toRequest(req);
    const response = await server.fetch(request);

    res.statusCode = response.status;

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (!response.body) {
      res.end();
      return;
    }

    Readable.fromWeb(response.body).pipe(res);
  } catch (err) {
    console.error(err);

    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}