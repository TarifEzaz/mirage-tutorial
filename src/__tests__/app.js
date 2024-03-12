// Welcome to the test file for the tutorial!
import { visit } from "../lib/test-helpers"
import { screen, waitForElementToBeRemoved } from "@testing-library/react"
import makeServer from "../server";

test("it shows a message when there are no reminders", async () => {
	let server = makeServer("test")
	makeServer("test")
	visit("/")
	await waitForElementToBeRemoved(() => screen.getByText("Loading..."))

	expect(screen.getByText("All done!")).toBeInTheDocument()
	server.shutdown()
})

test("it shows existing reminders", async () => {
	let server = makeServer("test")
	makeServer("test")
	visit("/")
	await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
  
	expect(screen.getByText("All done!")).toBeInTheDocument()
	server.shutdown()
  })