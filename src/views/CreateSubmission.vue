<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">


                    <div class="card col-md-6 mx-auto">
                        <div class="card-body ">

                            <div class="form-group">
                                <label for="">Full name</label>
                                <input type="text" class="form-control" placeholder="Enter your name">
                            </div>

                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="text" class="form-control" placeholder="Enter email">
                            </div>

                            <div class="form-group">
                                <label for="">Enter Department Name</label>
                                <input type="text" class="form-control" placeholder="Enter department name">
                            </div>

                            <div class="form-group">
                                <label for="">Title</label>
                                <input type="text" class="form-control" placeholder="Enter title or subject">
                            </div>


                            <div class="form-group">
                                <label for="">Select Submission format</label>
                                <select name="" id="" class="form-control">
                                    <option value="">Cheque</option>
                                    <option value="">Letter</option>
                                    <option value="">Document</option>
                                    <option value="">Proposal</option>
                                    <option value="">File</option>

                                </select>
                            </div>

                            <div class="form-group">
                                <label for="">Date</label>
                                <input type="date" class="form-control">
                            </div>


                            <div class="form-group">
                                <label for="">Phone</label>
                                <input type="text" class="form-control" placeholder="Enter Phone">
                            </div>

                            <div class="form-group">
                                <label for="">Remarks</label>
                                <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Any remarks or comments."></textarea>
                            </div>

                            <div class="form-group">
                                <router-link :to="'/submission-success'">
                                    <button class="btn btn-primary btn-lg btn-block">Submit</button>
                                </router-link>
                            </div>





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
