<template>
    <div class="contacts" id="contacts">
        <div class="title">
            <h3>Let's get in touch</h3>
            <h1>Contacts</h1>
        </div>

        <div class="content">

            <form action="https://formsubmit.co/30a790847cce83fe3c32cc5a13467b83" method="POST">

                <div class = "name__form">

                    <div class="flex__col">
                        <input class="input__field" type="text" name="name" id="name" required>
                        <div class="input__label">
                            <label for="name">Name</label>
                        </div>
                    </div>

                    <div class="flex__col">
                        <input class="input__field" type="email" name="email" id="email" required>
                        <div class="input__label">
                            <label for="email">E-mail</label>
                        </div>
                    </div>
                </div>
            
            
                <textarea class="input__field" name="content" cols="15" rows="3" id="content" required></textarea>
                <div class="input__label">
                    <label for="content">Your message</label>
                </div>

                <div class="send__btn">
                    <button type="submit" class="btn">
                            Send
                    </button>

                   
                </div>
            </form>
            
            <lord-icon
                    src="https://cdn.lordicon.com/zpxybbhl.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#00ee01"
                    style="width:300px;height:300px">
            </lord-icon>
        </div>

        <div class="footer">
                <div class="form__field">
                    <h3>My accounts</h3>
                    <a  href="https://www.linkedin.com/in/vittorio-rossi-645749226/">Linkedin</a>
                    <a  href="https://github.com/VittorioRossi">GitHub</a>
                    <a  href="https://www.kaggle.com/vittoriorossi">Kaggle</a>
                    <a  href="https://www.fiverr.com/vittoriorossi23">Fiverr</a>
                </div>

                <div class="form__field">
                    <h3>Downloads</h3>
                    <a class = "download__btn grid-item" href="./src/assets/file/CV-EN.pdf" download>Download my CV - EN</a>
                    <a class = "download__btn grid-item" href="./src/assets/file/CV-EN.pdf" download>Download my CV - IT</a>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"contacts",
}

</script>


<style scoped>

.contacts {
    display: flex;
    flex-direction: column;
    overflow-x: none;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

form {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 40px;
}

.input__field {
    font-family: Nunito, -apple-system, BlinkMacSystemFont, sans-serif;;
    width: 100%;

    border: 0;
    outline: 0;
    border-bottom: 2px solid var(--color-text);
    color: var(--color-text);
    background-color: transparent;

    transition: border-color 0.2s;

    resize: none;
    font-size: 20px;
    color: white;
}

.input__field:focus{
    border-color: var(--color-third);   
}

.input__label {
    position: relative;
    width: 100%;
}

.input__label > label {
    position: absolute;
    bottom: -10px;
    transition: 0.2s;
    font-size: 20px;
    color: var(--color-secondary);
    white-space: nowrap;
}

.flex__col > .input__label > label {
  bottom: -40px;
}

.input__field:focus ~ .input__label > label{
    color: var(--color-third);   
}
.send__btn {
    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: right;
    align-items: center;

    height: fit-content;
}


.form__field {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 5px;
}


.name__form {
    display: flex;
    gap: 100px;
}

.name__form > .input__label > input {
    width: 100%;
}

.footer {
    margin-top: 10px;
    padding: 10px;
    height: 25vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.form__field > h3 {
    font-size: 20px;
}
.form__field > a {
    font-size: 15px;
}


</style>