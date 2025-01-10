import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/app/admin/dashboard/page";

const initialState: IProduct = {
    _id: "",
   imgSrc: "",
   fileKey: "",
   name: "",
   price: 0,
   category: "",
}

export const productSlice = createSlice({
   name:"productSlice",
   initialState,
   reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
        return action.payload;
    },
   },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer