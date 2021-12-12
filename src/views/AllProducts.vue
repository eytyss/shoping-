<template>
<div>
    <!-- <ul v-for="(a,i) in products" :key="i ">

      {{ a.brand }} {{ a.model }} {{ a.color }} {{ a.capacity }}
    </ul> -->
    <Wrapper>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :type="product.type"
          :brand="product.brand"
          :model="product.model"
          :color="product.color"
          :capacity="product.capacity"
          :imgSrc="product.imgSrc"
          :price="product.price"
        />
    </Wrapper>
</div>
</template>

<script>
import  ProductCard from '../components/ProductCard.vue';
import  Wrapper from '../components/Wrapper.vue';
export default {
     name: 'AllProducts',
    data(){
        return {
        }
    },
     computed: {
    products() {
      const productsSort = this.$store.getters["products"];
      return productsSort.sort((a, b) => {
        if (a.model < b.model) {
          return -1;
        }
        if (a.model > b.model) {
          return 1;
        }
        return 0;
      });
    }
},
components: {
ProductCard,
Wrapper
}

}
</script>

<style>

</style>