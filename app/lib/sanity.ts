import { createClient } from "next-sanity"
export const revalidate = 30;



const projectId = 'lhls3ta1'
const dataset = "production"
const apiVersion = "2021-10-21"

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})