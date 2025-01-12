const express = require("express");
const { getQuery } = require('../../database/query');

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const inscriptionStatus = await getQuery(`
			SELECT id, name FROM inscription_status
		`)

		return response.json({inscriptionStatus: inscriptionStatus})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;