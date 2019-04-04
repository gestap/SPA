<template>
 <v-container>
   <v-layout row>
     <v-flex xs12 sm6 offset-sm3>
       <h1 class="text--secondary md-3"> Orders</h1>
        <v-list
          subheader
          three-line
        >
          <v-list-tile
            v-for="order in orders"
            :key='order.id'
          >
            <v-list-tile-action>
              <v-checkbox
                color="success"
                :input-value='order.done'
                @change="markDone(order)"
               ></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn color="primary"
              :to="'/ad/' + order.id"
              >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
       </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '1234',
          name: 'Ost',
          phone: '+38-093-347-43-08',
          done: false,
          adId: '2345'
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>
