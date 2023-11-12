
import { db } from "@utils/firebase";
import { setDoc, doc } from "firebase/firestore";

export const POST = async (req) => {
    try {
        console.log('start to create')
        const { user } = await req.json();

        console.log('start to create', user)
        const userObj = await setDoc(doc(db, "de","user"), {
            user: user

        });
        return new Response(JSON.stringify(userObj), { status: 200 })
        // res.status(200).json(newUser)
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

