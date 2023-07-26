<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <div class="mx-auto py-5 text-center">
                        <router-link :to="'/create-submission'" >
                            <buttons class="btn btn-primary btn-lg">Create Submission</buttons>
                        </router-link>
                    </div>
              

                    <div class="card">
                        <div class="card-body table-responsive">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tracking ID</th>
                                        <th>Department</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <router-link :to="'/submission'"> 12312100ddl</router-link>
                                           

                                        </td>
                                        <td>Department 1</td>
                                        <td>23-09-2012</td>
                                        <td>
                                            <span class="badge badge-primary">pending</span>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>


                </div>
            </div>
        </div>



    </div>
</template>

<script>


export default {
    components: {

    },
}
</script>

<style></style>
