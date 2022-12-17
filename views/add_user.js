
<!-- include header -->
<%- include('include/_header') %>
<!-- /include header -->

  <!-- Main Site -->
  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/"><i class="fas fa-angle-double-left"></i>Students List</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">New Student</h2>
            <span class="text-light">Use the below form to create a new Student Details</span>
        </div>

        <!-- add user form -->
        <%- include('include/_form') %>
       
    </div>
</main>
<!-- /Main Site -->

<!-- include footer -->
<%- include('include/_footer') %>
<!-- /include footer -->
