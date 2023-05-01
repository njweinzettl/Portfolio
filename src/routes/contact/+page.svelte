<!-- Contact form -->
<div>
    <label>
        Name
        <input type ="text" bind:value="{name}"/>
    </label>
    <label>
        Email
        <input type ="text" bind:value="{email}"/>
    </label>
    <label>
        Message
        <input type ="text" bind:value="{message}"/>
    </label>
    <button on:click={sendPost}>Send</button>
</div>

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
