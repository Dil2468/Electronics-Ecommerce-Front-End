import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart(state, action) {
      //const id=action.payload;
      //console.log(action.payload[0].id)
      const itemexist = state.cartData.find(
        (p) => p[0].id === action.payload[0].id
      );
      // console.log(itemexist)
      //  console.log(state.cartData.find(p=>p[0].id))
      // if (itemexist) {
      //   state.cartData.reduce((acc,crr)=>
      //   {

      //      console.log( crr[0])

      //  console.log(acc.push(action.payload))
      //   },[]

      //   )}

      if (itemexist) {
        state.cartData.forEach((item) => {
          if (item?.[0].id === action.payload[0].id) {
            item.count = 1;
          }
          // else{
          // state.cartData.push([])

          // };
        });
        return;
      }

      // if(itemexist){

      //   state.cartData.reduce((acc,crr)=>{
      //     if(crr[0].id===action.payload.id){
      //      crr.count=1

      //   }else{
      //     acc.push({...action.payload,count:1})
      //     };
      //    return acc;
      //   }

      // // console.log(acc)
      //  ,[] )

      // }
      // else{

      state.cartData.push({
        ...action.payload,

        count: 1,
      });

      // console.log(action)
    },

    increment(state, action) {
      const { id } = action.payload;

      //console.log(id)
      // state.cartData.forEach((item) => {
      //   if (item.id === id) {
      //     item.count = item.count + 1;
      //   }
      // });
      const data = state.cartData.find((item) => item[0].id === id);
      // console.log(state.cartData.find(item=>item[0].id===id))
      //console.log(item.id)
      data.count = data.count + 1;
      // console.log(data.count)

      //  if(data){
      //   state.cartData.forEach((item) => {
      //     if (item?.id === action.payload.id) {
      //       item.count += 1;
      //     }
      //     else{
      //       item.count=0;
      //     }

      //  })}

      // const quantityitem= state.cartData.find(p=>p.id===id)

      // quantityitem.count=quantityitem.count+1;
      // console.log(quantityitem)
    },
    decrement(state, action) {
      // state.quantity -= 1;
      const { id } = action.payload;

      console.log(id);
      state.cartData.map((item) => {
        if (item[0].id === id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    removeItem(state, action) {
      const nextCart = state.cartData.filter(
        (p) => p[0].id !== action.payload.id
      );

      state.cartData = nextCart;
    },

    calculate(state, action) {
      let pricetotal = 0;
      state.cartData.forEach(
        (p) => (pricetotal += p.count * p[0].attributes.price)
      );
      state.total = pricetotal;
    },
  },
});

export const { addCart, increment, decrement, removeItem, calculate } =
  cartSlice.actions;
export default cartSlice.reducer;
