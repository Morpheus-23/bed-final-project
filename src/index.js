import express from "express";
import usersRouter from "./routes/users.js";
import reviewsRouter from "./routes/reviews.js";
import propertiesRouter from "./routes/properties.js";
import hostsRouter from "./routes/hosts.js";
import bookingsRouter from "./routes/bookings.js";
import amenitiesRouter from "./routes/amenities.js";
import loginRouter from "./routes/login.js";
import "dotenv/config";
import * as Sentry from "@sentry/node";
import errorHandler from "./middleware/errorHandler.js";
import log from "./middleware/logMiddleware.js";

const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use(log);

//routes
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/hosts", hostsRouter);
app.use("/bookings", bookingsRouter);
app.use("/reviews", reviewsRouter);
app.use("/properties", propertiesRouter);
app.use("/amenities", amenitiesRouter);

app.use(Sentry.Handlers.errorHandler());
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
