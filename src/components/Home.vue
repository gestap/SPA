<template>

  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel interval=2000>
            <v-carousel-item
            v-for="(ad) in ads"
            :key="ad.id"
            :src="ad.imageSrc"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
        xs12
        sm6
        md4
        v-for="ad in ads"
        :key="ad.id">
          <v-card>
            <v-img
              class="white--text"
              :src="ad.imageSrc"
              height="200px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{ad.title}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number {{ad.id}}</span><br>
                <span>{{ad.description}}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      ads: [
        {
          title: 'First',
          description: 'Hi First',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '1'
        },
        {
          title: 'Second',
          description: 'Hi Second',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '2'
        },
        {
          title: 'Third',
          description: 'Hi Third',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '3'
        },
        {
          title: 'Fourth',
          description: 'Hi Fourth',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '4'
        }
      ]
    }
  }
}
</script>
