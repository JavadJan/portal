import { doc, setDoc } from "firebase/firestore";
import { db } from "@utils/firebase";


export const POST = async (req) => {
    try {
        const { menu } = await req.json()
        const menuObj = await setDoc(doc(db, 'en', 'menu'), {
            menu: menu
        })
        return new Response(JSON.stringify(menuObj), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}