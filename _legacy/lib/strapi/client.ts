// Strapi CMS Client
// Replace with your actual Strapi URL
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

interface StrapiResponse<T> {
  data: T
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export async function fetchFromStrapi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
  }

  const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  })

  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${res.statusText}`)
  }

  const json: StrapiResponse<T> = await res.json()
  return json.data
}

export async function getServices(locale: string) {
  return fetchFromStrapi(`/services?locale=${locale}&filters[featured][$eq]=true&populate=*`)
}

export async function getProjects(locale: string) {
  return fetchFromStrapi(`/projects?locale=${locale}&filters[featured][$eq]=true&populate=*`)
}

export async function getTestimonials(locale: string) {
  return fetchFromStrapi(`/testimonials?locale=${locale}&populate=*`)
}

export async function getFAQs(locale: string) {
  return fetchFromStrapi(`/faqs?locale=${locale}&sort=order:asc`)
}

export async function getGlobalSettings(locale: string) {
  return fetchFromStrapi(`/global?locale=${locale}&populate=*`)
}

export async function subscribeToNewsletter(email: string) {
  return fetchFromStrapi("/newsletter-subscriptions", {
    method: "POST",
    body: JSON.stringify({ data: { email } }),
  })
}
