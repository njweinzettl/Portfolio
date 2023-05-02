<!-- Contact form -->
<body>
    <main class="contactform">
        <div class="form">
            <h1> Get in touch </h1>
            <label>
                <p> Name </p>
                <input class="detailsDiv" type ="text" bind:value="{name}" placeholder="Your name goes here"/>
            </label>
            <label>
                <p> Email </p>
                <input class="detailsDiv" type ="text" bind:value="{email}" placeholder="Your email goes here"/>
            </label>
            <label>
                <p> Message </p>
                <input class="messageDiv" type ="text" bind:value="{message}" placeholder="Your message goes here"/>
            </label>
            <button class="sendPostButton" on:click={sendPost}>Send</button>
        </div>
    </main>
</body>

<!-- Post data of contact form to google forms -->
<script>
    const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfP8FWKBmhKi5CCaQ2UOjO8UthLP9hEwZ4JpcI-IZaKzG7YJg/formResponse';

    let name = "";
    let email = "";
    let message = "";

    // Function to post data
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
        margin: 80px auto;
        display: flex;
    }

    .form{
        display: flex;
        flex-direction: column;
        padding: 4em 7em 7em;
        max-width: 580px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 5px;
    }

    .detailsDiv{
        height:30px;
        width:350px;
        border-color: rgb(233, 233, 234);
        border-radius: 2px;
        border-width: 1px;
    }

    .messageDiv{
        height:100px;
        width:350px;
    }

    .sendPostButton{
        width: 150px;
    }

    .sendPostButton:hover {
        background-color: #82a5b1;
    }

    
</style>