
<template>
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
</template>

<script>
import  ProductCard from '../components/ProductCard.vue';
import  Wrapper from '../components/Wrapper.vue';

export default {
  components: {
    ProductCard,
    Wrapper
  },
  computed: {
    products() {
      return this.$store.getters["products"].filter(product => product.type.includes("Tablet"));
    },
  },
};
</script>