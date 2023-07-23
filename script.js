
var verifynumber=false;

const numberchange=(val)=>{
    // console.log(val.length)
    if(val.length > 10){
        alert('Invalid Phone number');
    }else if(val.length < 10){
        alert('Invalid Phone number');
    }else{
        verifynumber=true;
    }

}

var otpsend=false;

document.addEventListener("DOMContentLoaded", function () {
    const verifyOTPBtn = document.getElementById("verifyOTPBtn");
    const mobileOTPInputs = document.querySelector(".mobile-otp-inputs");
    const remainingInputs = document.querySelector(".remaining-inputs");
    const submitBtn = document.getElementById("submitBtn");

    // Function to handle the "Verify OTP" button click
    verifyOTPBtn.addEventListener("click", function () {
        const phoneNumberInput = document.querySelector("input[name='phoneNumber']");
        const otpInput = document.querySelector("input[name='verificationCode']");
        // Here is the default OTP => "1234".

        if(verifynumber==true && otpsend == false){
            // console.log("OTP")
            document.getElementById("verifyOTPBtn").innerText="Verify OTP"
            // console.log(phoneNumberInput.value.length);
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'OTP sent successfully',
                showConfirmButton: false,
                timer: '1500'
            }).then(()=>{
            otpsend=true;

            })
        }

        const correctOTP = "1234";
        if(verifynumber==true){
            if(otpsend==true){
                if (otpInput.value === correctOTP && phoneNumberInput.value.length == 10) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        text: 'Login Successful',
                        showConfirmButton: false,
                        timer: '1500'
                    })

                    mobileOTPInputs.classList.add("hidden");

                    remainingInputs.classList.remove("hidden");
                    
                    submitBtn.classList.remove("hidden");
        
                }
                
                else {

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Incorrect OTP. Please try again.',
                        timer: '1500'
                        
                    })
                }
            }
        }
        else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Phone number',
                timer: '1500'
                
            })
        }
    });

    // Function to handle the form submission
    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const formData = new FormData(signupForm);
        let formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        console.log(formDataObj)
        // alert("Form submitted successfully!\n" + JSON.stringify(formDataObj));
        Swal.fire({
            position: 'center',
            icon: 'success',
            // title: 'Oops...',
            text: 'Form Submitted Successfully',
            showConfirmButton: false,
            timer: '1500'
        }).then(() => {
            // window.location.reload();
        })
    });
});
