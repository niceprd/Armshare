// Profile update
function submitPF() {
    $(document).ready(function() {
        $('.submit').click(function() {
            swal({
                    title: "Are you sure?",
                    text: "Your profile will be change!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, confirm change!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        swal("Completed", "Your profile updated", "success");
                        document.getElementById("submitProfile").submit();
                    } else {
                        swal("Cancelled", "Your profile will not update.", "error");
                    }
                });
        });


    });
};

// Password update
function submitPW() {
    $(document).ready(function() {
        $('.submit').click(function() {
            swal({
                    title: "Are you sure?",
                    text: "Your password will be change!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, confirm change!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        swal("Completed", "Your password updated", "success");
                        document.getElementById("changePassword").submit();
                    } else {
                        swal("Cancelled", "Your password will not update.", "error");
                    }
                });
        });
    });
};