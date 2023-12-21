import { doc, setDoc } from "firebase/firestore"
import { db } from "@utils/firebase";

export const POST = async (req) => {
    try {
        const { aboutMe } = await req.json()
        const about = await setDoc(doc(db, "en", "aboutMe"), {
            aboutMe: aboutMe
        })
        
        return new Response(JSON.stringify(about), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}   
