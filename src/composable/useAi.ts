import { ref } from 'vue'
import { GoogleGenAI, ThinkingLevel, ApiError } from '@google/genai'

export interface RoadmapItem {
  step: number
  name: string
  topics: string[]
}

export interface RoadmapResponse {
  title: string | null
  prerequisites: string[] | null
  roadmap: RoadmapItem[] | null
  resources: string[] | null
}

export type AiError = {
  message: string | null
  status: number | null
  isError: boolean
}

const apiKey = import.meta.env.VITE_GEMINI_API_KEY

export function useAi() {
  const ai = new GoogleGenAI({
    apiKey,
  })

  const isLoading = ref<boolean>(false)

  const error = ref<AiError>({
    message: null,
    status: null,
    isError: false,
  })

  const aiResponse = ref<RoadmapResponse>({
    title: null,
    prerequisites: null,
    roadmap: null,
    resources: null,
  })

  async function aiCall(prompt: string): Promise<RoadmapResponse | null> {
    isLoading.value = true

    error.value = {
      message: null,
      status: null,
      isError: false,
    }

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `${prompt} + Return ONLY JSON. Use exact keys: title, prerequisites, roadmap (array of objects with step, name, topics), resources.`,
              },
            ],
          },
        ],
        config: {
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.MEDIUM,
          },
          responseMimeType: 'application/json',
        },
      })

      const text = response.text

      if (text) {
        const data = JSON.parse(text) as RoadmapResponse
        aiResponse.value = data
      }

      return aiResponse.value
    } catch (e) {
      const apiError = 'Unknow Error: Try Again'

      if (e instanceof ApiError) {
        error.value = {
          message: JSON.parse(e.message).error.message,
          status: e.status,
          isError: true,
        }
      }

      aiResponse.value = { title: null, prerequisites: null, roadmap: null, resources: null }

      return null
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    aiResponse,
    aiCall,
  }
}
