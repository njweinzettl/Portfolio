<!-- 
    This page contains the content for the contact page. 
    It consists of the contact form and the api that sends 
    the entered data to google forms when submitted.
-->

<div class="contactform">
    <h1>Get in touch</h1>
    <form class="form" class:submitted on:submit|preventDefault={handleSubmit}>
        <label for="name">Name</label>
        <input class="details" type ="text" bind:value="{name}" required>
        <label for="email">Email</label>
        <input class="details" type ="email" bind:value="{email}" required>
        <label for="message">Message</label>
        <textarea class="message" maxlength="200" bind:value="{message}" required></textarea>
        <button class="sendpostbutton" on:click={()=> submitted = true}>Send</button>
    <form/>
    <div class="feedback">
        {#if hasError}
            <p>Please fill in all fields</p>
        {:else}
            {#if isSuccessVisible}
                <p>Thank you for contacting me, your message had been sent successfully. I usually get back to messages within 48h!</p>
            {/if}
        {/if}
    </div>
</div>

<!-- Handling the form -->
<script>
    // Handling not correctly filled out forms
    let hasError = false;
    let isSuccessVisible = false;
    let submitted = false;

    let handleSubmit = () => {
        isSuccessVisible = true;
        setTimeout(() => {
            isSuccessVisible = false;
        }, 4000);
        sendPost();
        resetInput();
    }

    const resetInput = async (event) => {
        const formData = new FormData(event.target)

        console.log([...formData]);
        event.target.reset();
    }
    
    // Post data to Google forms
    const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfP8FWKBmhKi5CCaQ2UOjO8UthLP9hEwZ4JpcI-IZaKzG7YJg/formResponse';

    let name = "";
    let email = "";
    let message = "";

    let sendPost = () => {
        let data =`entry.927853139=${name}&entry.956718180=${email}&entry.99754670=${message}`;

        console.log("sending", data);
        fetch(url,{
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
        })
        .then(res => {
            console.log("done")
        });
    }
</script>

<style>
    .contactform{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: relative;
        width: 30rem;
        box-shadow: var(--box-shadow);
        border-radius: 5px;
        padding-top: 40px;
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    h1{margin-bottom: 30px;}

    label{line-height: 2em;}

    .details{
        height: 30px;
        width: 350px;
        margin-bottom: 30px;
        text-align: center;
    }

    .message{
        height: 100px;
        width: 350px;
        text-align: center;
        resize: vertical;
    }

    .feedback{
        margin: 20px;
        text-align: center;
    }

    .sendpostbutton{width: 150px;}

    .sendpostbutton:hover{background-color: var(--hover-button-color)}

    @media (max-width: 1000px){
        .contactform{
            width: 100%;
            margin: 0;
        }
    }

    @media (max-width: 480px){
        .details, .message{width: 100%;}
    }
</style>