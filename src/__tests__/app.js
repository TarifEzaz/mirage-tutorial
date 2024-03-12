// Welcome to the test file for the tutorial!
import { visit } from "../lib/test-helpers"
import { screen, waitForElementToBeRemoved } from "@testing-library/react"

test("it shows a message when there are no reminders", async () => {
	visit("/")
	await waitForElementToBeRemoved(() => screen.getByText("Loading..."))

	expect(screen.getByText("All done!")).toBeInTheDocument()
})