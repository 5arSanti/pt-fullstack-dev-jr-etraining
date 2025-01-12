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

router.get("/courses", async (request, response) => {
	try {
		const coursesByModality = await getQuery(`
			SELECT
				m.name AS Modalidad,
				COUNT(c.id) AS "Total cursos"

			FROM courses c
			JOIN modalities m ON c.modality_id = m.id

			GROUP BY m.name;
		`)

		return response.json({ coursesByModality: coursesByModality });
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;