const fs = require('node:fs/promises');

const express = require("express");
const { getQuery } = require('../../database/query');

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const modalities = await getQuery(`
			SELECT * FROM modalities
		`)

		return response.json({modalities: modalities})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;