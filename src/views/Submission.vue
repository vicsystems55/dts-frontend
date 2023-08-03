<template>
  <div>

    <div class="containe">
      <div class="">
        <div class="">

          <div class="scroll-card   overflow-auto  p-2">

            <div v-for="submissionStatus, key in submissionStatuses" :key="submissionStatus.index"
              style="min-height: 150px; max-width: 300px;"
              class="card  m-1 border border-prim ard   bg-succe ">
              <div class="card-body">

                <h6 class="">Title: <span style="font-weight: bold;" class="font-weight-bold"> {{ submissionStatus.visitors_submission.title }}</span></h6>
                <h6 class="">From: <span style="font-weight: bold;" class="font-weight-bold"> {{ submissionStatus.visitors_submission.from_address }}</span></h6>
                <h6 class="">To: <span style="font-weight: bold;" class="font-weight-bold"> {{ submissionStatus.visitors_submission.from_address }}</span></h6>
  
                <h6 class="">Date: {{ submissionStatus.created_at }}</h6>
  
               
              </div>

              <app-collapse accordion>
              <app-collapse-item title="Action">
               <div class="form-group">
                <label for="">Remark</label>
                <textarea type="text" col="" row="5" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Dispatch</button>
              </div>
              </app-collapse-item>
              
            </app-collapse>



            </div>

            <div style="height: 150px; max-width: 300px;" class="card card-body m-1 border border-primary ard ">
              <h6></h6>
            </div>





          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {

    AppCollapse,
    AppCollapseItem,
  },
  data() {
    return {
      submissionStatuses: [],
    }
  },
  mounted() {
    this.getSubmissionStatus()
  },

  methods: {
    getSubmissionStatus() {
      axios({
        url: `${process.env.VUE_APP_BACKEND_URL}/api/submission-statuses`,
        method: 'get',
        params: {
          visitors_submission_id: this.$route.params.id,
        },
      }).then(res => {
        console.log(res)
        this.submissionStatuses = res.data
      }).catch(error => {
        console.log(error)
      })
    },
  },
}
</script>

<style>.scroll-card::-webkit-scrollbar {
  width: 16px;
}

.scroll-card::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.scroll-card::-webkit-scrollbar-thumb {
  background-color: #d4aa70;
  border-radius: 100px;
}</style>
