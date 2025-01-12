const express = require("express");
const { getQuery } = require('../../database/query');
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const courses = await getQuery(`
			SELECT
				id,
				name
			FROM courses
		`);

		return response.status(200).json({courses: courses});
	}
	catch (err) {
		return response.json({Error: err.message})
	}
})

router.get("/details", async (request, response) => {
	try {
		const coursesDetailed = await getQuery(`
			SELECT
				c.id,
				c.name,
				m.name AS modality,
				c.duration,
				c.quota,
				COUNT(uc.user_id) AS total

			FROM courses c

			JOIN modalities m ON m.id = c.modality_id
			LEFT JOIN user_course uc ON uc.course_id = c.id

			GROUP BY c.id, c.name, m.name, c.duration, c.quota
			ORDER BY c.name;
		`);

		return response.status(200).json({coursesDetailed: coursesDetailed});
	}
	catch (err) {
		return response.json({Error: err.message})
	}
})

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

router.delete("/", async (request, response) => {
	try {
		const { id } = request.body;

		const studentsCount = await getQuery(`
			SELECT COUNT(*) AS count
			FROM user_course
			WHERE course_id = ${id}
		`);

        if (studentsCount[0].count > 0) {
            return response.json({ Error: `No se puede eliminar el curso, hay ${studentsCount[0].count} usuarios inscritos.`});
        }

		await getQuery(`
			DELETE FROM courses
			WHERE id = ${id}
		`);

		return response.json({ Status: "Success", message: "Curso eliminado correctamente" });
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;