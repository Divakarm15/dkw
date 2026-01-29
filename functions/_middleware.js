export async function onRequest(context) {
  try {
    const { request, next } = context;

    console.log({
      ip: request.headers.get("cf-connecting-ip"),
      url: request.url,
      time: new Date().toISOString()
    });

    return await next();
  } catch (err) {
    return new Response("Middleware error", { status: 500 });
  }
}
