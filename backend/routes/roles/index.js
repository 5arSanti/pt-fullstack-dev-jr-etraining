const express = require("express");
const { getQuery } = require('../../database/query');

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const roles = await getQuery(`
			SELECT * FROM roles
		`)

		return response.json({roles: roles})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;