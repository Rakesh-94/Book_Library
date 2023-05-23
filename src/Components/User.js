import React from "react";

const User = () => {
  return (
    <div>
      <div className="container">
        <div class="card text-center">
          <div class="card-header">User</div>
          {/* <div class="card-header row">
            <div className="col-3">Name</div>
            <div className="col-3">Roll No</div>
            <div className="col-3">Roll No</div>
            <div className="col-3">Roll No</div>
          </div> */}

          {/* <div className="row">
            <div class="card m-4 " style={{ width: "18rem" }}>
              <div class="card-header">Math</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Class-12th</li>
                <li class="list-group-item">Algebra</li>
                <li class="list-group-item">Dr. Manohar Ray</li>
              </ul>
            </div>
            <div class="card m-4 " style={{ width: "18rem" }}>
              <div class="card-header">Math</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Class-12th</li>
                <li class="list-group-item">Algebra</li>
                <li class="list-group-item">Dr. Manohar Ray</li>
              </ul>
            </div>
            <div class="card m-4 " style={{ width: "18rem" }}>
              <div class="card-header">Math</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Class-12th</li>
                <li class="list-group-item">Algebra</li>
                <li class="list-group-item">Dr. Manohar Ray</li>
              </ul>
            </div>
          </div> */}

          <table>
            <tr>
              <th>Roll NO</th>
              <th>Name</th>
              <th>books</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1056</td>
              <td>Rakesh</td>
              <td>
                math books
              </td>
              <td>
                issue
              </td>
            </tr>
          </table>

          <div class="card-footer text-muted">Updated 2 days ago</div>
        </div>
      </div>
    </div>
  );
};

export default User;
