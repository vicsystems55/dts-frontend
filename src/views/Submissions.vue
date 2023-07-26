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
                                        <th>Departmenst</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
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
