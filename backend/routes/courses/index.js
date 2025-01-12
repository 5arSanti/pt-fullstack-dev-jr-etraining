const express = require("express");
const { getQuery } = require('../../database/query');
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");

const router = express.Router();

router.post("/", async (request, response) => {
	try {
		validateObjectValues(request.body);

		const { name, modality_id, duration, quota } = request.body;

		await getQuery(`
			INSERT INTO courses
			(name, modality_id, duration, quota)

			VALUES
			('${name}', ${modality_id}, ${duration}, ${quota})
		`)

		return response.json({ Status: "Success", message: "Curso creado correctamente"});
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;