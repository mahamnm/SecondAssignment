async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users =await response.json();
    const result = users.map(function(user) {
          return `
          <div class="col-md-3">
          <div class="card mb-3"> 
          <h5 class="card-title"> Name : ${user.name}</h5>
          <div class="card-body pt-0 pb-0">
            <div> <label>User Name  : </label> ${user.username}</div>
            <div> <label>Email : </label> ${user.email}</div>
            <div> <label>Street Name : </label> ${user.address.street}</div>
            <div> <label>Suite : </label> ${user.address.suite}</div>
            <div> <label>City : </label> ${user.address.city}</div>
            <div> <label>zipcode : </label> ${user.address.zipcode}</div>
            <div> <label>Geo lat : </label> ${user.address.geo.lat}</div>
            <div> <label>Geo lng : </label> ${user.address.geo.lng}</div>
            <div> <label>Phone Number : </label>${user.phone}</div>
            <div> <label>Website : </label>${user.website}</div>
            <div> <label>Company Name :</label> ${user.company.name}</div>
            <div> <label>Company CatchPhrase : </label> ${user.company.catchPhrase}</div>
            <div> <label>Company Bs : </label> ${user.company.bs}</div>
            </div>
            </div>
          </div>
          `
    }).join('') ;

    document.querySelector(".users").innerHTML = result;
}

getUsers();

   