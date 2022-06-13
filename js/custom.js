// // form validation

// // Wait for the DOM to be ready
// $(function () {
//   // Initialize form validation on the registration form.
//   // It has the name attribute "registration"
//   $("form[name='registration']").validate({
//     // Specify validation rules
//     rules: {
//       // The key name on the left side is the name attribute
//       // of an input field. Validation rules are defined
//       // on the right side
//       fname: "required",
//       lname: "required",
//       country: "required",
//       company: "required",
//       email: {
//         required: true,
//         // Specify that email should be validated
//         // by the built-in "email" rule
//         email: true,
//       },
//     },
//     // Specify validation error messages
//     messages: {
//       fname: "This field can’t be empty. Please fill it in.",
//       lname: "This field can’t be empty. Please fill it in.",
//       country: "This field can’t be empty. Please fill it in.",
//       email: "This field can’t be empty. Please fill it in.",
//       company: "This field can’t be empty. Please fill it in.",
//     },
//     // Make sure the form is submitted to the destination defined
//     // in the "action" attribute of the form when valid

//     submitHandler: function (form) {
//       form.submit();
//     },
//   });
// });

$(document).ready(function () {
  $(".burger").click(function () {
    $(".menu").show(100);
    $(".burger").hide(100);
    $(".cross").show(100);
  });
  $(".item").click(function () {
    $(".menu").hide(100);
    $(".burger").show(100);
    $(".cross").hide(100);
  });
  $(".cross").click(function () {
    $(".menu").hide(100);
    $(".burger").show(100);
    $(".cross").hide(100);
  });
});
