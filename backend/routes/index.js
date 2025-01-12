const express = require("express");



const versionRouter = require("./version/index.js");

const modalitiesRouter = require("./modalities/index.js");

const rolesRouter = require("./roles/index.js");

const coursesRouter = require("./courses/index.js");

const usersRouter = require("./users/index.js");



const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${process.env.API_STRUCTURE}/v1`, router);

	// Routes
	router.use("/version", versionRouter);

	router.use("/modalities", modalitiesRouter);

	router.use("/roles", rolesRouter);

	router.use("/courses", coursesRouter);

	router.use("/users", usersRouter);

}

module.exports = routerApi;