const express = require("express");



const versionRouter = require("./version/index.js");

const modalitiesRouter = require("./modalities/index.js");


const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${process.env.API_STRUCTURE}/v1`, router);

	// Routes
	router.use("/version", versionRouter);

	router.use("/modalities", modalitiesRouter);

}

module.exports = routerApi;