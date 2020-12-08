import { createSlice, configureStore } from '@reduxjs/toolkit'
import blueimg from "./../../images/blue-tshirt.png";
import redimg from "./../../images/red-tshirt.png"
import yellowimg from "./../../images/yellow-tshirt.png"

const basketSlice = createSlice({
    name: "basket",
    initialState: [
      {
        id: '123',
        title: 'Blue t-shirt',
        description: 'No fancy sizing charts here, one t-shirt size to rule them all',
        imageUrl: blueimg,
        price: 399
      },
      {
        id: '456',
        title: 'Yellow t-shirt',
        description:
          'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
        imageUrl: yellowimg,
        price: 499
      },
      {
        id: '789',
        title: 'Red t-shirt',
        description: 'The only product on our site that might actually be worth buying',
        imageUrl: redimg,
        price: 799
      }
    ]
    
    ,
    reducers: {
      add: (state, action) => {
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }
  
          return {
            ...item,
            added: true
          }
        })
      }
      ,
      remove: (state, action) => {
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }
  
          return {
            ...item,
            added: false       }
        })
      }
    }
  })

const store = configureStore({ reducer: basketSlice.reducer })

export const { add,remove } = basketSlice.actions

export { basketSlice, store }