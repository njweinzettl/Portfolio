<form method = "POST" action = "/contact">
    <label>
        Name
        <input name = "name" type = "name">
    </label>
    <label>
        Email
        <input name = "email" type = "email">
    </label>
    <label>
        Message
        <input name = "message" type = "message">
    </label>
    <button>Send</button>
</form>

<style>
    label {
        display: grid;
        max-width: 100%;
        margin-top: 0.25rem;
    }
</style>