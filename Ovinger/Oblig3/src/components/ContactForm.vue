<template>
    <div id="contactform">
        <h1>Contact us</h1>
        
        <form
            @submit="submit" 
            @submut.prevent="sendForm"
        >
            <label>Name</label>
            <input
                data-test="name"
                v-model="event.name"
                type="text"
                placeholder="Name"
                class="field"
                @keyup="checksubmit"
                id="name"
                @blur="keepState('name')"
            >
            <br>

            <label>Email</label>
            <input
                data-test="email"
                v-model="event.email"
                type="email"
                placeholder="email@address.com"
                class="field"
                @keyup="checksubmit"
                id="email"
                validation="required"
                @blur="keepState('email')"
            >
            <br>

            <label>Message</label>
            <input
                data-test="message"
                v-model="event.message"
                type="text"
                placeholder="Write your message here"
                class="field-message"
                @keyup="checksubmit"
                id="message"
            >
            <br>

            <button
                data-test="submit" 
                class="button -fill-gradient" 
                type="submit" 
                id="submit" 
                :disabled="checksubmit"
                >Submit</button> 
        </form>
    </div>
    
  </template>

<script>
import { postContactForm } from "../services/feedback"

export default {

    name: 'ContactForm',
    data () {
        return {
            event: {
                name: sessionStorage.getItem("name") ||  "",
                email: sessionStorage.getItem("email") || "",
                message: "",
            },
            inputIsValid: false,
        }
    },

    methods: {
        validEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return true;
            } else {
                return false;
            }
        },

        checksubmit() {
            if(document.getElementById("name").value !== "" && document.getElementById("email").value !== ""
                && document.getElementById("message").value !== ""
                && /^[A-Åa-å]*$/.test(document.getElementById("name").value)
                && this.validEmail(document.getElementById("email").value)) {
                this.inputIsValid = true;
            } else {
                this.inputIsValid = false;
            }

            if (this.inputIsValid) {
                document.getElementById("submit").disabled = false;
            } else {
                document.getElementById("submit").disabled = true;
            }
        },

        keepState(value) {
            const inputValue = this.event[value];
            sessionStorage.setItem(value, inputValue);
        },

        created() {
            this.event.name = this.$store.state.name;
            this.event.email = this.$store.state.email;
        },

        submit() {
            alert("Your message was submitted succesfully!")
            this.sendForm()
        },

        sendForm() {
            this.$store.commit("SET_NAME", this.event.name)
            this.$store.commit("SET_EMAIL", this.event.email)

            const event = {
                ...this.event,
            }
            postContactForm(event)
                .then(response => {
                    this.event.name = "";
                    this.event.email = "";
                    this.event.message = "";

                    this.event.name = this.$store.state.name;
                    this.form.email = this.$store.state.email;

                    console.log("Response", response)
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }
}
</script>

<style scope>
#contactform {
    display: block;
    color:  white;
    font-size: large;
}
h1 {
    color: hsla(160, 100%, 37%, 1);
}

#contactform .field {
    position: relative;
    display: block;
    background: rgb(67, 67, 67);
    border: 1px solid rgba(255,255,255,0.01);
    border-radius: 32px;
    color: white;
    flex-basis: 20%;
    font-size: 15px;
    height: 50px;
    width: 400px;
    text-align: center;
}

#contactform .field-message {
    position: relative;
    display: block;
    background: rgb(67, 67, 67);
    border: 1px solid rgba(255,255,255,0.01);
    border-radius: 32px;
    color: white;
    font-size: 15px;
    height: auto;
    min-height: 100px;
    width: 400px;
    text-align: center;
    overflow: scroll;
    resize: vertical;
}

#contactform .button {
    margin-top: 10px;
    padding: 10px 20px;
    border: 1px solid rgba(255,255,255,0.01);
    border-radius: 32px;
    height: auto;
    width: auto;
    font-size: 20px;
    color: white;
    background: orange;
}

#contactform .button:hover {
    opacity: 0.6;
}

#contactform .button:disabled {
    opacity: 0.2;
}
</style>