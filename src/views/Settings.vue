<template>
  <div>

    <b-card-code title="Administrative Settings">
      <b-tabs>
        <b-tab title="Departments">

          <div class="row">
            <div class="col-md-6">

              <div class="card">
                <div class="card-body">
                  <h6>Create Office</h6>

                  <div class="form-group">
                    <label for="">Name of office:</label>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control"
                    >
                  </div>
                  <div class="form-group">
                    <label for="">Name of office:</label>
                    <input
                      v-model="abbrev"
                      type="text"
                      class="form-control"
                    >
                  </div>
                  <div class="form-group">
                    <label for="">Name of office:</label>
                    <input
                      v-model="desc"
                      type="text"
                      class="form-control"
                    >
                  </div>

                  <div class="form-group">
                    <label for="">Assign:</label>
                    <select
                      id=""
                      v-model="user_id"
                      class="form-control"
                    >
                      <option
                        v-for="user in users"
                        :key="user.index"
                        :value="user.id"
                      >
                        {{ user.name }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="">Choose Parent Office:</label>
                    <select
                      id=""
                      v-model="parent_id"
                      class="form-control"
                    >
                      <option
                        v-for="office in offices"
                        :key="office.index"
                        :value="office.id"
                      >
                        {{ office.name }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group">
                    <button
                      class="btn btn-primary btn-block"
                      @click="createOffice()"
                    >
                      {{ loading?'Please wait...':'Submit' }}
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-12">

              <div class="card">
                <div class="card-body table-responsive">

                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th />
                      </tr>
                    </thead>
                  </table>

                </div>
              </div>

            </div>
          </div>

        </b-tab>
        <b-tab
          active
          title="User Accounts"
        >
        
        </b-tab>
        <b-tab
          title="Disabled"
          disabled
        >
          <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text>
        </b-tab>
       
      </b-tabs>


    </b-card-code>

    <div class="container" />

  </div>
</template>

<script>
import axios from 'axios'
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BCardCode,
    BTabs,
    BCardText,
    BTab,

  },
  data() {
    return {
      name: '',
      abbrev: '',
      desc: '',
      user_id: '',
      parent_id: '',
      loading: false,
      users: [],
      offices: [],
    }
  },
  mounted() {
    this.getOffices()
    this.getUsers()
  },

  methods: {
    getOffices() {
      axios({
        url: `${process.env.VUE_APP_BACKEND_URL}/api/offices`,
        method: 'get',
      }).then(res => {
        console.log(res)
        this.offices = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    getUsers() {
      axios({
        url: `${process.env.VUE_APP_BACKEND_URL}/api/users`,
        method: 'get',
      }).then(res => {
        console.log(res)
        this.users = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    createOffice() {
      this.loading = true
      axios({
        url: `${process.env.VUE_APP_BACKEND_URL}/api/offices`,
        method: 'post',
        data: {
          name: this.name,
          abbrev: this.abbrev,
          desc: this.desc,
          user_id: this.user_id,
          parent_id: this.parent_id,
        },
      }).then(res => {
        this.loading = false
        console.log(res)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Office created',
            icon: 'EditIcon',
            variant: 'success',
          },
        })
        this.getOffices()
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
    },
  },
}
</script>

<style></style>
