$.ajax({
    url: "/pj1/data",
    type: "get"
}).then(function (data) {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
        var template = `

      <div class="card col-lg-3" style="width: 18rem;">
          <div class="card-body">
          <p>Email: <span id="value-email-${data[index]._id}"> ${data[index].email}</span>
          <input class="input-email" id="email-${data[index]._id}" value="${data[index].email}"></p>
          <p>Password: <span id="value-password-${data[index]._id}"> ${data[index].password}</span>
          <input class="input-password" id="password-${data[index]._id}" value="${data[index].password}"></p>
          <p>Age: <span id="value-age-${data[index]._id}"> ${data[index].age}</span>
          <input class="input-age" id="age-${data[index]._id}" value="${data[index].age}"></p>
            <button class="btn btn-primary edit" id="edit-${data[index]._id}" onClick = edit("${data[index]._id}")>Edit</button>
            <button class="btn btn-warning save" id="save-${data[index]._id}" onClick = save("${data[index]._id}")>Save</button>
            <button type="button" class="btn btn-danger delete" id="delete-${data[index]._id}" onClick = deleteValue("${data[index]._id}") data-toggle="modal" data-target="#exampleModal">Delete</button>
          </div>
        </div>
    `
        $('.content').append(template);
    }
    $("input").hide();
    // $('.input-email').hide();
    // $('.input-password').hide();
    // $('.input-age').hide();
    $(".save").hide();
});
function edit(id) {
    $('#email-'+id).show();
    $('#password-'+id).show();
    $('#age-'+id).show();
    $("#value-email-"+id).hide();
    $("#value-password-"+id).hide();
    $("#value-age-"+id).hide();
    $("#edit-"+id).hide();
    $("#save-"+id).show();
}
function save(id) {
    $('#email-'+id).hide();
    $('#password-'+id).hide();
    $('#age-'+id).hide();
    $("#value-email-"+id).show();
    $("#value-password-"+id).show();
    $("#value-age-"+id).show();
    $("#edit-"+id).show();
    $("#save-"+id).hide();
    
    var email = $("#email-"+id).val();
    var password = $("#password-"+id).val();
    var age = $("#age-"+id).val();
    $.ajax({
        url: "/pj1/update/"+id,
        type: "put",
        data: {
            email: email,
            password: password,
            age: age
        }
    }).then(function(data){
        alert(data.message);
        window.location.href = "/pj1/index";
    });
    $(".edit").show();
    $(".save").hide();
}
function deleteValue(id){
    $("#agree").click(function(){
        $.ajax({
            url: "/pj1/delete/"+id,
            type: "delete"
        }).then(function(data){
            window.location.href = "/pj1/index";
        });
    })  
}
