<!-- Contact form -->

<main>
    <div class="contactform">
    <h1> Get in touch </h1>
        <form class="form" class:submitted on:submit|preventDefault={handleSubmit}>
            <label> Name </label>
            <input class="details" type ="text" bind:value="{name}" placeholder="Your name goes here" required/>
            <label> Email </label>
            <input class="details" type ="email" bind:value="{email}" placeholder="Your email goes here" required/>
            <label> Message </label>
            <input class="message" type ="message" bind:value="{message}" placeholder="Your message goes here" required/>
            <button class="sendpostbutton" on:click={()=> submitted = true}> Send </button>
        <form/>
        <div class="feedback">
            {#if hasError}
                <p class="feedbackmessage"> Please fill in all fields </p>
            {:else}
                {#if isSuccessVisible}
                    <p class="feedbackmessage"> Thank you for contacting me, your message had been sent successfully. I usually get back to messages within 48h! </p>
                {/if}
            {/if}
        </div>
    </div>
</main>


<!-- Handling the form -->
<script>

    // Handling not correctly filled out forms
    let hasError = false;
    let isSuccessVisible = false;
    let submitted = false;

    function handleSubmit(){
        isSuccessVisible = true;
        setTimeout(() => {
            isSuccessVisible = false;
        }, 4000);
        sendPost();
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
    main{
        display: flex;
        justify-content: center;
        margin: 40px 0px;
    }
    .contactform{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 30rem;
        height: 40rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 5px;
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
        border-color: rgb(233, 233, 234);
        border-radius: 2px;
        border-width: 1px;
        margin-bottom: 30px;
        text-align: center;
    }

    .message{
        height: 100px;
        width: 350px;
        text-align: center;
    }

    .feedback{
        margin: 20px;
        text-align: center;
    }

    .sendpostbutton{width: 150px;}

    .sendpostbutton:hover{background-color: #82a5b1;}

    @media (max-width: 1000px){
        .contactform{
            width: 100%;
            margin: 0;
        }
    }

    @media (max-width: 480px){
        .details, .message{
            width: 100%;
        }
    }
</style>