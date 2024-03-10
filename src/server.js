// src/server.js
import { createServer } from "miragejs"

export default function () {
	createServer({

		models: {
			reminder: Model,
		},

		routes() {
			this.get("/api/reminders", () => ({
				reminders: [        
					{ id: 1, text: "Walk the dog" },
					{ id: 2, text: "Take out the trash" },
					{ id: 3, text: "Work out" },
				],
			}))


			let newId = 4

			this.post("/api/reminders", (schema, request) => {
				let attrs = JSON.parse(request.requestBody)
				console.log(attrs)
				attrs.id = newId++
//return { reminder: attrs }


				return { reminder: attrs }
				//debugger
			})
		},
	})
}