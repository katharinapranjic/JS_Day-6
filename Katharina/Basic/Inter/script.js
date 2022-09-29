let employee = JSON.parse(employeesJson);
console.log(employee);

let output = document.getElementById("output");

let overview = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email adress</th>
      <th scope="col">Job Title</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody class="table-group-divider"> `

  for (title of employee) {
    overview += `
      <tr>
        <th scope="row">${title.id}</th>
        <td>${title.firstName}</td>
        <td>${title.lastName}</td>
        <td>${title.emailAddress}</td>
        <td>${title.jobTitle}</td>
        <td>${title.salary}</td>
    </tr>`
  }

  overview += `
  </tbody>
</table>
`

output.innerHTML = overview

