import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
	const {
		aiResponse: { text },
	}: { aiResponse: { text: string } } = await req.json();

	const codeSections: { language: string; code: string }[] = [];

	const lines = text.split("\n");
	let currentLanguage = "";

	lines.forEach((line) => {
		if (line.startsWith("```")) {
			currentLanguage = line.substring(3, line.length).trim();
			// Detectar el tipo de lenguaje (ej. css, javaScript, README...)
			const endIndex = lines.indexOf("```", lines.indexOf(line) + 1);

			if (endIndex !== -1) {
				const codeLines = lines.slice(lines.indexOf(line) + 1, endIndex);
				const code = codeLines.join("\n").trim();
				if (currentLanguage && code) {
					codeSections.push({ language: currentLanguage, code });
				}
				currentLanguage = "";
			}
		}
	});

	// Ruta de la carpeta donde se guardan los archivos
	const outputDir = path.join(process.cwd(), "public", "generated");
	await fs.mkdir(outputDir, { recursive: true });

	// Eliminar todos los archivos en la carpeta 'public/generated'
	try {
		const files = await fs.readdir(outputDir);
		const deletePromises = files.map((file) =>
			fs.unlink(path.join(outputDir, file))
		);
		await Promise.all(deletePromises);
	} catch (error) {
		console.error("Error al eliminar los archivos:", error);
	}

	// Crear los nuevos archivos y guardarlos en la carpeta
	const filePromises = codeSections.map(({ language, code }) => {
		const fileName = `${
			language === "svg"
				? "img"
				: language === "css"
				? "styles"
				: language === "javascript"
				? "script"
				: language === "html"
				? "index"
				: language
		}.${language === "javascript" ? "js" : language}`;

		console.log("fileName", fileName);
		const filePath = path.join(outputDir, fileName);
		return fs.writeFile(filePath, code);
	});

	await Promise.all(filePromises);

	console.log("codeSections", codeSections);
	console.log("text", text);

	return Response.json({ aiResponse: text });
}
