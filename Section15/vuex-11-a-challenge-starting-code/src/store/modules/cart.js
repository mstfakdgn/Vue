export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cart.items.findIndex(
        ci => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      console.log(prodId);
      const productInCartIndex = state.cart.items.findIndex(
        cartItem => cartItem.productId === prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    }
  },
  actions: {
    addToCart(context, payload) {
      const productId = payload.id;
      const products = context.rootGetters['prods/products'];

      const chosenProduct = products.find(product => product.id === productId);

      context.commit('addProductToCart', chosenProduct);
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    }
  },
  getters: {
    products(state) {
      console.log(state.cart.items);
      return state.cart.items;
    },
    totalSum(state) {
      return state.cart.total.toFixed(2);
    },
    quantity(state) {
      return state.cart.qty;
    }
  }
};
