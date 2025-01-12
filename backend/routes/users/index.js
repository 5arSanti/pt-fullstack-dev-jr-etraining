const express = require("express");
const { getQuery } = require('../../database/query');
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const users = await getQuery(`
			SELECT
				u.id,
				u.first_name AS Nombres,
				u.last_name AS Apellidos,
				u.email AS Correo,
				u.phone AS Numero,
				r.name AS Rol

			FROM users u

			JOIN roles r ON u.role_id = r.id
		`);

		return response.json({users: users});
	}
	catch (err) {
		return response.json({Error: err.message})

	}
})


router.post("/", async (request, response) => {
	try {
		validateObjectValues(request.body);

		const { id, first_name, last_name, email, phone, role_id, course_id, inscription_status_id } = request.body;

		const userExists = await getQuery(`SELECT * FROM users WHERE id = ${id}`);

		if (userExists.length > 0) {
			return response.json({Error: "El usuario ya esta registrado"});
		}

		await getQuery(`
			INSERT INTO users
			(id, first_name, last_name, email, phone, role_id)

			VALUES
			(${id}, '${first_name}', '${last_name}', '${email}', '${phone}', ${role_id})
		`)

		await getQuery(`
			INSERT INTO user_course
			(user_id, course_id, inscription_status_id)

			VALUES
			(${id}, ${course_id}, ${inscription_status_id})
		`)

		return response.json({ Status: "Success", message: "Usuario registrado correctamente" });
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});


router.delete("/", async (request, response) => {
	try {
		const { id } = request.body;

		await getQuery(`
            DELETE FROM user_course
            WHERE user_id = ${id}
        `);

		await getQuery(`
			DELETE FROM users
			WHERE id = ${id}
		`);

		return response.json({ Status: "Success", message: "Usuario eliminado correctamente" });
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;