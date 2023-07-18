require('dotenv').config();

const express = require('express')
const cors = require("cors")
const connection = require('./database');
const UserRoutes = require('./src/UserRoutes');
const CourseRoutes = require('./src/CourseRoutes');
const TakeCourseRoutes = require('./src/TakeCourseRoutes');
const ScheduleRoutes = require('./src/ScheduleRoutes');

const app = express();
app.use(cors());

// Register routes
UserRoutes(app, connection);
CourseRoutes(app, connection);
TakeCourseRoutes(app, connection);
ScheduleRoutes(app, connection);

app.listen(process.env.APIPORT, () => {
  console.log(`Application listening on port ${process.env.APIPORT}`)
});