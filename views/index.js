
<!-- include header -->
    <%- include('include/_header') %>
<!-- /include header -->


    <!-- Main Site -->
    <main id="site-main">
        <div class="container">
            <div class="box-nav d-flex justify-between">
                <a href="/add-user" class="border-shadow">
                    <span class="text-gradient">New Student <i class="fas fa-user"></i></span>
                </a>
            </div>

            <!-- form handling -->
            <form action="/" method="POST">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th>Roll Number</th>
                            <th>Student Name</th>
                            <th>Official Email</th>
                            <th>Gender</th>
                            <th>Branch Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <%- include('include/_show') %>
                    </tbody>
                </table>
            </form>
        </div>
    </main>
<!-- /Main Site -->


<!-- include footer -->
<%- include('include/_footer') %>
<!-- /include footer -->