
import { db } from "@utils/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export const POST = async (req) => {
    try {
        const { user } = await req.json();
        console.log('user', user)
        const userObj = await setDoc(doc(db, "en", "user"), {
            user: user
        });
        return new Response(JSON.stringify(userObj), { status: 200 })
        // res.status(200).json(newUser)
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

