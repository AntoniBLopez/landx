'use client'

import { use, useEffect, useState } from 'react'
import { PlaceholdersAndVanishInput } from '@/components/ui/input-vanisher'
import qualityPrompt from '@/app/create/utils/qualityPrompt'

export default function Chat() {

  const [generation, setGeneration] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState('')
  const [aiResponse, setAiResponse] = useState('')
  const [time, setTime] = useState(true)

  const placeholders = [
    'Neon futuristic page with Cyberpunk vibes',
    'Solid color E-Commerce concept',
    'Natura type welcome page',
    'Make a page for a game presentation',
    'Make me a page that could impress any developer',
    'I want a page to show off my business',
    'Give me a page where i can show off my dj skills',
    'I want a luxury vibe kind of page',
    'Give me a random thing'
  ]

  const onSubmit = async (event: { preventDefault: () => void }) => {
    console.log(event)
    event.preventDefault() // Previene el comportamiento predeterminado del formulario
    setIsLoading(true)

    const prompt = qualityPrompt({
      input,
      name: 'Business Analysis',
      email: 'business@analysis.com',
      businessName: 'Business Analysis',
      serviceDescription: 'En Business Analysis, ofrecemos servicios de análisis de negocios que te permiten tomar decisiones informadas y estratégicas. Nuestro enfoque basado en datos y nuestra experiencia en diversas industrias nos permiten proporcionar información valiosa y personalizada que impulsa el crecimiento y la eficiencia de tu empresa.',
      callToActionButtonName: 'Empieza Ahora',
      mainColor: '#00ff00',
      font: 'Montserrat',
      stack: 'HTML5, CSS3 (preferentemente con Flexbox o Grid), y JavaScript (opcional). Puede usar un framework como Bootstrap si es necesario.',
      foldersTech: 'HTML para la estructura, CSS para el estilo, y JavaScript para la interactividad (si es necesario).',
    })

    await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        prompt,
      }),
    }).then(response => {
      response.json().then(json => {
        setAiResponse(json)
        setGeneration(json.text)
        setIsLoading(false)
      })
    })
  }

  useEffect(() => {
    if (aiResponse) {
      fetch('/api/create-files', {
        method: 'POST',
        body: JSON.stringify({
          aiResponse,
        }),
      }).then(response => {
        response.json().then(json => {
          console.log(json)
        })
      }).catch(error => {
        console.error(error)
      })
      console.log('aiResponse', aiResponse)
    }
  }, [aiResponse])

  return (
    <main className="flex w-full h-screen flex-col items-center justify-center">
      <h1>Input your vision.</h1>

      <div className='p-10'>{isLoading ? 'Loading...' : generation}</div>

      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={e => setInput(e.target.value)} onSubmit={(event) => {
        if (time) {
          setTime(false)
          onSubmit(event)
          setTimeout(() => {
            setTime(true)
          }, 3000)
        }
      }}></PlaceholdersAndVanishInput>
    </main>
  )

}