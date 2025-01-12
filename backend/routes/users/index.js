const express = require("express");
const { getQuery } = require('../../database/query');
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");

const router = express.Router();

router.post("/", async (request, response) => {
	try {
		validateObjectValues(request.body);

		const { id, first_name, last_name, email, phone, role_id, } = request.body;

		await getQuery(`
			INSERT INTO users
			(id, first_name, last_name, email, phone, role_id)

			VALUES
			(${id}, '${first_name}', '${last_name}', '${email}', '${phone}', ${role_id})
		`)

		return response.json({ Status: "Success", message: "Usuario registrado correctamente" });
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;