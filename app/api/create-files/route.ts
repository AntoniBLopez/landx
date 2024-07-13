export async function POST(req: Request) {
  const { aiResponse: { text } }: { aiResponse: { text: string } } = await req.json()

  const codeSections: { language: string, code: string }[] = []

  const lines = text.split('\n')
  let currentLanguage = ''

  lines.forEach(line => {
    if (line.startsWith('```')) {
      // Detectar el tipo de lenguaje (ej. JavaScript, README)
      currentLanguage = line.substring(3, line.length).trim()
      // Detectar inicio de bloque de código
      const endIndex = lines.indexOf('```', lines.indexOf(line) + 1)

      if (endIndex !== -1) {
        const codeLines = lines.slice(lines.indexOf(line) + 1, endIndex)
        const code = codeLines.join('\n').trim()
        if (currentLanguage && code) {
          codeSections.push({ language: currentLanguage, code })
        }
        currentLanguage = ''
      }
    }
  })

  console.log('codeSections', codeSections)

  return Response.json({ aiResponse: text })
}