
<!-- include header -->
<%- include('include/_header') %>
<!-- /include header -->

  <!-- Main Site -->
  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/"><i class="fas fa-angle-double-left"></i> All Students</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Update Student Data</h2>
            <span class="text-light">Use the below form to Update an Student Details</span>
        </div>

        <!-- add user form -->
         <!-- form handling -->
 <form method="POST" id="update_user">
    <div class="new_user">
        <div class="form-group">
            <label for="name" class="text-light">Name</label>
            <input type="hidden" name="id" value="<%= user._id %>">
            <input type="text" name="name" value="<%= user.name %>" placeholder="Lakshmi">
        </div>
        <div class="form-group">
            <label for="Email" class="text-light">Email</label>
            <input type="text" name="email" value="<%= user.email%>" placeholder="example@gmail.com">
        </div>
        <div class="form-group">
            <label for="gender" class="text-light">Gender</label>
            <div class="radio inline">
                <input type="radio" id="radio-2" name="gender" value="Male" <%= user.gender == 'Male' ? 'checked' : '' %>>
                <label for="radio-2" class="radio-label">Male</label>
            </div>
            <div class="radio inline">
                <input type="radio" id="radio-3" name="gender" value="Female"  <%= user.gender == 'Female' ? 'checked' : '' %> >
                <label for="radio-3" class="radio-label">Female</label>
            </div>
        </div>

        <div class="form-group">
            <label for="gender" class="text-light">Branch Name</label>
            <div class="radio inline">
                <input type="radio" id="radio-4" name="status" value="IT" <%= user.status == 'IT' ? 'checked' : '' %> >
                <label for="radio-4" class="radio-label">IT</label>
            </div>
            <div class="radio inline">
                <input type="radio" id="radio-5" name="status" value="CSE" <%= user.status == 'CSE' ? 'checked' : '' %> >
                <label for="radio-5" class="radio-label">CSE</label>
            </div>
        </div>

        <div class="form-group">
            <button type="submit" class="btn text-dark update">Save</button>
        </div>

    </div>
</form>
       
    </div>
</main>
<!-- /Main Site -->

<!-- include footer -->
<%- include('include/_footer') %>
<!-- /include footer -->
