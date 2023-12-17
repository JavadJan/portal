import { doc, setDoc } from "firebase/firestore"
import { db } from "@utils/firebase";

export const POST = async (req) => {
    try {
        const { projects } = await req.json()
       
        const project = await setDoc(doc(db, "de", "projects"), {
            projects: projects
        })
        
        return new Response(JSON.stringify(project), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}   