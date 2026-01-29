export async function onRequest(context) {
  const { request, next } = context;

  const log = {
    ip: request.headers.get("cf-connecting-ip"),
    country: request.cf?.country,
    method: request.method,
    url: request.url,
    userAgent: request.headers.get("user-agent"),
    time: new Date().toISOString()
  };

  console.log(JSON.stringify(log));

  return next();
}
