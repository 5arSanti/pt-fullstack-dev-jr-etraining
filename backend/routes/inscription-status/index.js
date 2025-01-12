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

router.get("/students", async (request, response) => {
	try {
		const studentsByStatus = await getQuery(`
			SELECT
				c.name AS Curso,
				i.name AS "Estado de matricula",
				COUNT(uc.user_id) AS "Total estudiantes"

			FROM user_course uc

			JOIN users u ON uc.user_id = u.id
			JOIN roles r ON u.role_id = r.id
			JOIN courses c ON uc.course_id = c.id
			JOIN inscription_status i ON uc.inscription_status_id = i.id

			WHERE r.name = 'Estudiante'
			GROUP BY c.name, i.name
			ORDER BY c.name, i.name;
		`)

		return response.json({ studentsByStatus: studentsByStatus });
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;