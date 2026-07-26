export const requestLogger = (req, res, next) => {
  const start = Date.now();

  console.log("\n======================================");
  console.log(`${req.method} ${req.originalUrl}`);
  console.log(`Time : ${new Date().toLocaleString()}`);
  console.log("Request Body:");
  console.log(JSON.stringify(req.body, null, 2));
  console.log("======================================");

  res.on("finish", () => {
    const duration = Date.now() - start;

    console.log("------------ RESPONSE ------------");
    console.log(`Status : ${res.statusCode}`);
    console.log(`Duration : ${duration} ms`);
    console.log("----------------------------------\n");
  });

  next();
};