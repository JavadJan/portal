import { doc, setDoc } from "firebase/firestore";
import { db } from "@utils/firebase";


export const POST = async (req) => {
    try {
        const { contact } = await req.json()
        const menuObj = await setDoc(doc(db, 'de', 'contact'), {
            contact: contact

        })
        return new Response(JSON.stringify(menuObj), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}