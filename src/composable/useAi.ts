import { ref } from 'vue'
import { ApiError } from '@google/genai'

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

const WORKER_URL = import.meta.env.VITE_CLOUD_FLARE_WORKER_URL

export function useAi() {
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
      const enhancedPrompt = `${prompt} + Return ONLY JSON. Use exact keys: title, prerequisites, roadmap (array of objects with step, name, topics), resources.`

      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: enhancedPrompt }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw { status: response.status, message: result.error?.message || 'Unknown error' }
      }

      const text = result.candidates?.[0]?.content?.parts?.[0]?.text

      if (text) {
        const cleanText = text.replace(/```json\n?|\n?```/g, '').trim()
        aiResponse.value = JSON.parse(cleanText) as RoadmapResponse
        return aiResponse.value
      }

      throw new Error('No content in response')
    } catch (e) {
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
