<template>
 <v-container>
   <v-layout row>
     <v-flex xs12 sm6 offset-sm3>
       <h1 class="text--secondary md-3">Create new Ad</h1>
       <v-form ref="form" v-model="valid" validation>
        <v-text-field
          name="title"
          label="Ad title"
          :rules="[v => !!v || 'Title is required']"
          required
          type="text"
          v-model="title"
        ></v-text-field>
        <v-textarea
          label="Ad description"
          :rules="[v => !!v || 'Description is required']"
          type="text"
          v-model="description"
        ></v-textarea>
      </v-form>
      <v-layout row >
        <v-flex sm12>
          <v-btn color="warning mb-3">
            Upload
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row >
        <v-flex sm12>
          <img src=""
            >
        </v-flex>
      </v-layout>
      <v-layout row >
        <v-flex sm12>
          <v-switch
            color="primary"
            v-model="promo"
            label="Ad to promo?"
          ></v-switch>
        </v-flex>
      </v-layout>
       <v-layout row >
        <v-flex sm12>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="success"
            @click="createAd"
          >Create Ad</v-btn>
        </v-flex>
      </v-layout>
     </v-flex>
  </v-layout>

 </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>
