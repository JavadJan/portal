
import { db } from "@utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const GET = async (req, { params }) => {
    // console.log(params.id)
    try {
       
        const querySnapshot = await getDocs(collection(db, "de"));

       
        const de = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        return new Response(JSON.stringify(de), { status: 200 })

    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

