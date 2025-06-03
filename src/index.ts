import 'dotenv/config'
import { Server } from "@modelcontextprotocol/sdk/server/index.js"
import {
	ListResourcesRequestSchema,
	ReadResourceRequestSchema
} from "@modelcontextprotocol/sdk/types.js"
import express from "express"
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import { randomUUID } from "node:crypto"
import dotenv from 'dotenv'
dotenv.config()

const BASE_URL = "https://ui.nuxt.com"

const server = new Server({
	name: "nuxtui-mcp-server",
	version: "0.0.1",
}, {
	capabilities: {
		resources: {}
	}
})

const app = express()

const transports: { [sessionId: string]: StreamableHTTPServerTransport } = {}

server.setRequestHandler(ListResourcesRequestSchema, async () => {
	// Divide resources into sections
	const sections = {
		"getting-started": [
			{
				uri: "nuxtui://getting-started/introduction",
				name: "Introduction",
				description: "Introduction to Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://getting-started/installation",
				name: "Installation",
				description: "How to install Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://getting-started/migration",
				name: "Migration",
				description: "Migration guide for Nuxt UI v2 to v3",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://getting-started/theme",
				name: "Theme",
				description: "Theming in Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://getting-started/icons",
				name: "Icons",
				description: "Icon usage in Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://getting-started/fonts",
				name: "Fonts",
				description: "Font configuration in Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://getting-started/color-mode",
				name: "Color Mode",
				description: "Color mode support in Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://getting-started/i18n",
				name: "I18n",
				description: "Internationalization in Nuxt UI",
				mimeType: "text/html"
			}
		],
		composables: [
			{
				uri: "nuxtui://composables/defineShortcuts",
				name: "defineShortcuts",
				description: "Composable for defining keyboard shortcuts",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://composables/useOverlay",
				name: "useOverlay",
				description: "Composable for overlay management",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://composables/useToast",
				name: "useToast",
				description: "Composable for toast notifications",
				mimeType: "text/html"
			}
		],
		components: [
			{
				uri: "nuxtui://components/app",
				name: "App",
				description: "App component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/accordion",
				name: "Accordion",
				description: "Accordion component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/alert",
				name: "Alert",
				description: "Alert component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/avatar",
				name: "Avatar",
				description: "Avatar component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/avatargroup",
				name: "AvatarGroup",
				description: "AvatarGroup component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/badge",
				name: "Badge",
				description: "Badge component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/breadcrumb",
				name: "Breadcrumb",
				description: "Breadcrumb component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/button",
				name: "Button",
				description: "Button component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/buttongroup",
				name: "ButtonGroup",
				description: "ButtonGroup component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/calendar",
				name: "Calendar",
				description: "Calendar component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/card",
				name: "Card",
				description: "Card component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/carousel",
				name: "Carousel",
				description: "Carousel component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/checkbox",
				name: "Checkbox",
				description: "Checkbox component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/chip",
				name: "Chip",
				description: "Chip component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/collapsible",
				name: "Collapsible",
				description: "Collapsible component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/colorpicker",
				name: "ColorPicker",
				description: "ColorPicker component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/commandpalette",
				name: "CommandPalette",
				description: "CommandPalette component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/container",
				name: "Container",
				description: "Container component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/contextmenu",
				name: "ContextMenu",
				description: "ContextMenu component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/drawer",
				name: "Drawer",
				description: "Drawer component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/dropdownmenu",
				name: "DropdownMenu",
				description: "DropdownMenu component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/form",
				name: "Form",
				description: "Form component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/formfield",
				name: "FormField",
				description: "FormField component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/icon",
				name: "Icon",
				description: "Icon component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/input",
				name: "Input",
				description: "Input component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/inputmenu",
				name: "InputMenu",
				description: "InputMenu component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/inputnumber",
				name: "InputNumber",
				description: "InputNumber component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/kbd",
				name: "Kbd",
				description: "Kbd component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/link",
				name: "Link",
				description: "Link component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/modal",
				name: "Modal",
				description: "Modal component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/navigationmenu",
				name: "NavigationMenu",
				description: "NavigationMenu component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/pagination",
				name: "Pagination",
				description: "Pagination component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/pininput",
				name: "PinInput",
				description: "PinInput component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/popover",
				name: "Popover",
				description: "Popover component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/progress",
				name: "Progress",
				description: "Progress component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/radiogroup",
				name: "RadioGroup",
				description: "RadioGroup component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/select",
				name: "Select",
				description: "Select component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/selectmenu",
				name: "SelectMenu",
				description: "SelectMenu component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/separator",
				name: "Separator",
				description: "Separator component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/skeleton",
				name: "Skeleton",
				description: "Skeleton component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/slideover",
				name: "Slideover",
				description: "Slideover component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/slider",
				name: "Slider",
				description: "Slider component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/stepper",
				name: "Stepper",
				description: "Stepper component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/switch",
				name: "Switch",
				description: "Switch component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/table",
				name: "Table",
				description: "Table component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/tabs",
				name: "Tabs",
				description: "Tabs component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/toast",
				name: "Toast",
				description: "Toast component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/tooltip",
				name: "Tooltip",
				description: "Tooltip component from Nuxt UI",
				mimeType: "text/html"
			},
			{
				uri: "nuxtui://components/tree",
				name: "Tree",
				description: "Tree component from Nuxt UI",
				mimeType: "text/html"
			}
		]
	};

	// Flatten all resources into a single array
	const resources = Object.values(sections).flat();

	return {
		resources,
		sections
	};
})

server.setRequestHandler(ReadResourceRequestSchema, async (req: any) => {
	const uri = req.params.uri
	const [_, path] = uri.split('://')
	const [section, ...rest] = path.split('/')
	let url

	if (section === 'getting-started') {
		url = `${BASE_URL}/getting-started/${rest.join('/')}`
	} else if (section === 'composables') {
		url = `${BASE_URL}/composables/${rest.join('/')}`
	} else if (section === 'components') {
		url = `${BASE_URL}/components/${rest.join('/')}`
	} else {
		// fallback for legacy or unknown
		url = `${BASE_URL}/${path}`
	}

	const response = await fetch(url)
	return {
		contents: [
			{
				uri,
				mimeType: "text/html",
				text: await response.text()
			}
		]
	}
})

app.post("/mcp", async (req, res) => {
	// Check for existing session ID
	const sessionId = req.headers["mcp-session-id"] as string | undefined
	let transport: StreamableHTTPServerTransport

	if (sessionId && transports[sessionId]) {
		// Reuse existing transport
		transport = transports[sessionId]
	} else {
		// New initialization request
		transport = new StreamableHTTPServerTransport({
			sessionIdGenerator: () => randomUUID(),
			onsessioninitialized: (id) => {
				transports[id] = transport
			}
		})
		// Clean up transport when closed
		transport.onclose = () => {
			if (transport.sessionId) {
				delete transports[transport.sessionId]
			}
		}
		await server.connect(transport)
	}

	await transport.handleRequest(req, res, req.body)
})

const handleSessionRequest = async (req: express.Request, res: express.Response) => {
	const sessionId = req.headers["mcp-session-id"] as string | undefined
	if (!sessionId || !transports[sessionId]) {
		res.status(400).send("Invalid or missing session ID")
		return
	}
	const transport = transports[sessionId]
	await transport.handleRequest(req, res)
}

app.get("/mcp", handleSessionRequest)
app.delete("/mcp", handleSessionRequest)

app.listen(process.env.DEFAULT_PORT || 3000, () => {
	console.log(`MCP server started using Streamable HTTP transport on port ${process.env.DEFAULT_PORT || 3000}.`)
})
