
import { db } from "@utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const GET = async (req, res) => {
    try {
       

        const querySnapshot = await getDocs(collection(db, "en"));
       
        const de = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        // res.status(200).json(docSnap)
        return new Response(JSON.stringify(de), { status: 200 })


        // res.status(200).json(newUser)
    } catch (error) {
        return new Response(error, { status: 500 });
    }
}

