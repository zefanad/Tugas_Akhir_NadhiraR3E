import toast from "react-hot-toast";
import { text } from "stream/consumers";


export const makeToast = (text: string) => {
    toast.success(text, {
        style: {
            borderRadius: "4px",
            background: "#333",
            color: "#fff",
        },
    });
};